import React, { useState } from "react";
import { connect } from "react-redux";

import TabsRovers from "../../components/tabsRover/TabsRovers";
import CardPhoto from "../../components/cardPhoto/CardPhoto";
import Paginate from "../../components/paginate/Paginate";
import Skeleton from '../../components/skeleton/Skeleton';

import rover from "../../assets/images/rover.png"
import { alertAnswerFavWithoutStorage ,alertAnswerFavStorage } from "../../helpers/alerts/alerts";

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
        alertAnswerFavStorage(photo,storage)
          return
      }else{
        alertAnswerFavWithoutStorage(photo)
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
