import React from "react";
import { connect } from "react-redux";
import CardRover from "../../components/cardRover/cardRover";
import rocket from "../../assets/images/loading/rocket.png";

const Home = ({ STATE, CONTENT, LOADING }) => {
  return (
    <div className="container_home">
      <h1>Home</h1>
      {STATE && !LOADING ? (
        CONTENT &&
        CONTENT.length > 0 &&
        <div className="content_cards">
        {CONTENT[0].rovers.map((elem,i) => (
          <div key={i}>
            <CardRover props={elem}/>
          </div>
        ))}
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

export default connect(mapStateToProps)(Home);
