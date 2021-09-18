import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Formik, Field, Form } from 'formik';
import { getPhotosByCameraAndSol } from '../../store/photos/actions'

const CardRover = ({
  photos,
  props: {
    name,
    status,
    landing_date,
    launch_date,
    max_date,
    max_sol,
    total_photos,
    cameras,
  },
}) => {

  const [hidden, setHidden] = useState(false)

  const dispatch = useDispatch()

  const handlePhotos = (e, name) => {
    e.preventDefault();
    photos(name);
    !hidden ? setHidden(true) : setHidden(false)
  };

  return (
    <div className="card_rover">
      <Tippy
        content={
          <div className="info_rover">
            <p>status: {status}</p>
            <p>launch date: {launch_date}</p>
            <p>landing date: {landing_date}</p>
            <p>max date: {max_date}</p>
            <p>max sol distance: {max_sol}</p>
            <p>photos: {total_photos}</p>
          </div>
        }
      >
       <h2 onClick={(e) => handlePhotos(e, name)}>{name}</h2>
      </Tippy>
      {hidden
        ?   <Formik
                initialValues={{
                    cameras: "",
                    sol: ""
                }}
                validate={(fields) =>{
                    let errors = {}
                    if(!fields.cameras){
                        errors.cameras = "Please choose a camera"
                    }
                    if(!fields.sol){
                        errors.sol = "Please choose a distance of the sol"
                    }
                    return errors
                }}
                onSubmit={(fields) => {
                    dispatch(getPhotosByCameraAndSol(name,fields.cameras,fields.sol) )
                }}
            >
            {({errors,touched, handleChange}) => (
                <Form>
                    <select value={`${cameras[0].name}`} name="cameras" onChange={handleChange}>
                      {cameras.map((el, i) => <option value={el.name} key={i}>{el.name}</option>)}
                    </select>
                    {touched.cameras && errors.cameras && <p>{errors.cameras}</p>}

                    <Field name="sol" type="range" min="0" max="3211"/>
                    {touched.sol && errors.sol && <p>{errors.sol}</p>}
                    <button type="submit">Filter</button>
                </Form>
            )}
            </Formik>
        : ""}
    </div>
  );
};

export default CardRover;
