import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Formik, Field, Form } from 'formik';
import { getPhotosByCameraAndSol,getPhotosByDay } from '../../store/photos/actions'

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
  const [distance,setDistance] = useState(0)
  const [date, setDate] = useState("")

  const dispatch = useDispatch()

  const handlePhotos = (e, name) => {
    e.preventDefault();
    photos(name);
    !hidden ? setHidden(true) : setHidden(false)
  };

  const handleChange = (e) => {
    setDistance(e.target.value)
  }

  const handleChangeDate = (e) => {
    setDate(e.target.value)
  }


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
        ?   
          <><Formik
                initialValues={{
                    cameras: "",
                    sol: "",
                    date:""
                }}
                validate={(fields) =>{
                    let errors = {}
                    if(!fields.cameras){
                        errors.cameras = "Please choose a camera"
                    }
                    if(!distance){
                        errors.sol = "Please choose a distance of the sol"
                    }
                    return errors
                }}
                onSubmit={(fields) => {
                    dispatch(getPhotosByCameraAndSol(name,fields.cameras,distance) )
                }}
            >
            {({errors,touched}) => (
                <Form>
                    <Field as="select" name="cameras">
                      {cameras.map((el, i) => <option value={el.name} key={i}>{el.name}</option>)}
                    </Field>
                    {touched.cameras && errors.cameras && <p>{errors.cameras}</p>}

                    <p>distance: {distance}</p>
                    <input name="sol" type="range" min="0" max={`${max_sol}`} onChange={handleChange}/>
                    {touched.sol && errors.sol && <p>{errors.sol}</p>}
                    
                    <button type="submit">Filter</button>
                </Form>
            )}
            </Formik>
            <Formik
            initialValues={{
                date:""
            }}
            validate={() =>{
                let errors = {}
                if(!date){
                    errors.date = "Please choose a date"
                }
                return errors
            }}
            onSubmit={() => {
                dispatch(getPhotosByDay(name,date) )
            }}
            >
            {({errors,touched}) => (
                <Form>
                    <input type="date" min={`${launch_date}`} max={`${max_date}`} name="date" onChange={handleChangeDate}/>
                    {touched.date && errors.date && <p>{errors.date}</p>}
                    <button type="submit">Filter</button>
                </Form>
            )}
            </Formik></>
        : ""}
    </div>
  );
};

export default CardRover;
