import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Formik, Field, Form } from "formik";
import {
  getPhotosByCameraAndSol,
  getPhotosByDay,
} from "../../store/photos/actions";
import arrow from '../../assets/images/up-arrow.png';

const CardRover = ({
  props: {
    name,
    launch_date,
    max_date,
    max_sol,
    total_photos,
    cameras,
  },
}) => {

  const [hidden, setHidden] = useState(false);

  const [distance, setDistance] = useState(0);
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const handlePhotos = (e) => {
    e.preventDefault();
    hidden ? setHidden(false) : setHidden(true)
  };

  const handleChange = (e) => {
    setDistance(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };


  return (
    <div className="card_rover">
      <Tippy
        content={
          <div className="info_rover">
            <p>max date: {max_date}</p>
            <p>max sol: {max_sol}</p>
            <p>photos: {total_photos}</p>
          </div>
        }
      > 
        <p onClick={(e) => handlePhotos(e)}>{name}</p>
      </Tippy>
      <li></li>
      {hidden? (
        <div className="options">
          <Formik
            initialValues={{
              cameras: "FHAZ",
              sol: "",
              date: "",
            }}
            validate={(fields) => {
              let errors = {};
              if (!fields.cameras) {
                errors.camera = "Please choose a camera";
              }
              if (!distance) {
                errors.sol = "Please choose a sol";
              }
              return errors;
            }}
            onSubmit={(fields) => {
              dispatch(getPhotosByCameraAndSol(name, fields.cameras, distance));
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <label>Search by camera and sol</label>
                <Field as="select" name="cameras">
                  {cameras.map((el, i) => (
                    <option value={el.name} key={i}>
                      {el.name}
                    </option>
                  ))}
                </Field>
                {touched.cameras && errors.cameras && <span>{errors.cameras}</span>}

                <label>sol: {distance}</label>
                <input
                  name="sol"
                  type="range"
                  min="0"
                  max={`${max_sol}`}
                  onChange={handleChange}
                />
                {touched.sol && errors.sol && <span>{errors.sol}</span>}

                <button type="submit">Filter</button>
              </Form>
            )}
          </Formik>
          <p>OR</p>
          <Formik
            initialValues={{
              date: "",
            }}
            validate={() => {
              let errors = {};
              if (!date) {
                errors.date = "Please choose a date";
              }
              return errors;
            }}
            onSubmit={() => {
              dispatch(getPhotosByDay(name, date));
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <label>Search by date</label>
                <input
                  type="date"
                  min={`${launch_date}`}
                  max={`${max_date}`}
                  name="date"
                  onChange={handleChangeDate}
                />
                {touched.date && errors.date && <span>{errors.date}</span>}
                <button type="submit">Filter</button>
              </Form>
            )}
          </Formik>
          <img src={arrow} alt="close" onClick={() => setHidden(false)}/>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardRover;
