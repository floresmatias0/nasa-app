import React from "react";
import { Link } from "react-router-dom";

const Paginate = ({ total, postPerPage, pagination }) => {
  let pageNumber = [];

  for (let i = 0; i <= Math.ceil(total / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="container_paginate">
      <ul>
        {pageNumber.map((elem, i) => {
          if(elem !== 0){
            return (
              <li key={i}>
                <Link onClick={() => pagination(elem)} to="/">
                  {elem}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Paginate;
