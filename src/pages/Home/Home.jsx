import React, { useState } from "react";
import { connect } from "react-redux";

import TabsRovers from "../../components/tabsRover/TabsRovers";
import CardPhoto from "../../components/cardPhoto/CardPhoto";
import Paginate from "../../components/paginate/Paginate";
import Skeleton from '../../components/skeleton/Skeleton';

import rover from "../../assets/images/rover.png"

import Swal from 'sweetalert2';

const Home = ({ STATE, CONTENT, LOADING }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(24);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  let currentPost =
    CONTENT && CONTENT.length > 0
      ? CONTENT[0].photos.slice(indexOfFirstPage, indexOfLastPage)
      : 0;

  const pagination = (number) => {
    setCurrentPage(number)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const addFavorite = (photo) => {

      let storage = localStorage.getItem("photos")
      if(storage){
        Swal.fire({
          customClass: {
            container: 'container_custom',
            popup: 'popup_custom',
            title: 'title_custom_fav',
            htmlContainer: 'html_custom_fav',
            actions: 'actions_custom',
            confirmButton: 'confirm_custom',
            cancelButton: 'denied_custom',
          },
          title: 'Do you want to bookmark this photo?',
          text: "it's a nice photo!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, add it!'
        }).then((result) => {
          
          if (result.isConfirmed) {
            let previous = JSON.parse(storage);
            let arr = []

            previous.forEach(element => {
              if(element.id !== photo.id){
                arr.push(element)
                localStorage.clear()
                localStorage.setItem("photos",JSON.stringify(arr.concat(photo))) 
                Swal.fire({
                  customClass: {
                    container: 'container_custom',
                    popup: 'popup_custom',
                    title: 'title_custom_fav',
                    htmlContainer: 'html_custom_fav',
                    actions: 'actions_custom',
                    confirmButton: 'confirm_custom',
                    cancelButton: 'denied_custom',
                  },
                  title: 'Added!',
                  text: 'Your photo is now in the favorites section',
                  icon: 'info'
                })
              }else{
                Swal.fire({
                  customClass: {
                    container: 'container_custom',
                    popup: 'popup_custom',
                    title: 'title_custom_fav',
                    htmlContainer: 'html_custom_fav',
                    actions: 'actions_custom',
                    confirmButton: 'confirm_custom',
                  },
                  title: 'Oh! Oh!',
                  text: 'this photo already exists in your section',
                  icon: 'info'
                  })
              }
            })     
          }else if(result.dismiss || result.isDenied){
            Swal.fire({
              customClass: {
                container: 'container_custom',
                popup: 'popup_custom',
                title: 'title_custom_fav',
                htmlContainer: 'html_custom_fav',
                actions: 'actions_custom',
                confirmButton: 'confirm_custom',
              },
              title: 'Good idea!',
              text: 'There are better photos!',
              icon: 'info'
            })
          }
        })
          return
      }else{
        Swal.fire({
          customClass: {
            container: 'container_custom',
            popup: 'popup_custom',
            title: 'title_custom_fav',
            htmlContainer: 'html_custom_fav',
            actions: 'actions_custom',
            confirmButton: 'confirm_custom',
            cancelButton: 'denied_custom',
          },
          title: 'Do you want to bookmark this photo?',
          text: "it's a nice photo!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, added it!'
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.setItem("photos",JSON.stringify([photo]))
            Swal.fire({
              customClass: {
                container: 'container_custom',
                popup: 'popup_custom',
                title: 'title_custom_fav',
                htmlContainer: 'html_custom_fav',
                actions: 'actions_custom',
                confirmButton: 'confirm_custom',
                cancelButton: 'denied_custom',
              },
              title: 'Added!',
              text: 'Your photo is now in the favorites section',
              icon: 'info'
            })
          }else if(result.dismiss || result.isDenied){
            Swal.fire({
              customClass: {
                container: 'container_custom',
                popup: 'popup_custom',
                title: 'title_custom_fav',
                htmlContainer: 'html_custom_fav',
                actions: 'actions_custom',
                confirmButton: 'confirm_custom',
              },
              title: 'Good idea!',
              text: 'There are better photos!',
              icon: 'info'
            })
          }
        })
        
      }
  }

  return (
    <div className="container_home">
      <h1>Mars Rover Photos</h1>
      <TabsRovers />
      <div>
        {STATE && !LOADING ? (
          currentPost.length >= 1 ? (
            <>
            <div className="container_cards">
              {currentPost.map((elem, i) => (
                <CardPhoto props={elem} key={i} addFav={addFavorite} removeFav={false}/>
              ))}
            </div>
            <Paginate
              total={CONTENT[0].photos.length}
              postPerPage={postPerPage}
              pagination={pagination}
            />
          </>
          ):(
            <div className="container_cards">
              <img src={rover} alt="error"/>
            </div>
          )
        ) : (
          <div className="container_cards">
                <Skeleton />
                <Skeleton />
                <Skeleton />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    STATE: state.photos,
    CONTENT: state.photos.content,
    LOADING: state.photos.contentLoading,
  };
};

export default connect(mapStateToProps)(Home);
