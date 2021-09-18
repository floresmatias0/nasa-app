import React, { useState } from "react";
import { connect } from "react-redux";

import Navbar from "../../components/navbar/Navbar";
import CardPhoto from "../../components/cardPhoto/CardPhoto";
import Paginate from "../../components/paginate/Paginate";
import Skeleton from '../../components/skeleton/Skeleton'

const Home = ({ STATE, CONTENT, LOADING }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  let currentPost =
    CONTENT && CONTENT.length > 0
      ? CONTENT[0].photos.slice(indexOfFirstPage, indexOfLastPage)
      : 0;

  const pagination = (number) => setCurrentPage(number);

  return (
    <div className="container_home">
      <Navbar />
      <div>
        <h2>photos of the day</h2>
      </div>
      <div>
        {STATE && !LOADING ? (
          <>
            <Paginate
              total={CONTENT[0].photos.length}
              postPerPage={postPerPage}
              pagination={pagination}
            />
            <div className="container_cards">
              {currentPost.map((elem, i) => (
                <CardPhoto props={elem} key={i} />
              ))}
            </div>
          </>
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
