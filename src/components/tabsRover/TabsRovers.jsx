import React from "react";
import { connect } from "react-redux";

import CardRover from "../cardRover/cardRover";

import rocket from "../../assets/images/loading/rocket.png";

const TabsRovers = ({ STATE, CONTENT, LOADING }) => {
  return (
    <div>
      {STATE && !LOADING ? (
        CONTENT &&
        CONTENT.length > 0 &&
        <div className="container_rovers">
        {CONTENT[0].rovers.map((elem,i) => {
          if(elem.name !== "Perseverance"){
            return(
                <CardRover props={elem} key={i} />
            )
          } 
        })}
        </div>
      ) : (
        <div className="content_loading">
          <img
            className="image_loading animate__animated animate__bounce animate__infinite"
            src={rocket}
            alt="loading"
          />
          <p>loading...</p>
        </div>
      )}

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    STATE: state.rovers,
    CONTENT: state.rovers.content,
    LOADING: state.rovers.contentLoading
  };
};


export default connect(mapStateToProps)(TabsRovers);