import React from 'react';
import { connect } from 'react-redux';
import CardRover from '../../components/cardRover/cardRover';

const Home = ({STATE,CONTENT,LOADING,ERROR}) => {
    return (
        <>
            <h1>Home</h1>
            {STATE && !LOADING ? (
               <CardRover props={CONTENT}/> 
            ) : "" }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        STATE: state.rovers,
        CONTENT: state.rovers.content.rovers,
        LOADING: state.rovers.contentLoading,
        ERROR: state.rovers.contentErrors
    }
}

export default connect(mapStateToProps)(Home);