import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";

import "./Programmer.css";

const Programmer = (props) => {
  // console.log(props);
  const { name, gender, age, language, salary, phone, image, email } =
    props.programmer;

  return (
    <div className="col-md-4 mb-4">
      <div class="card h-100 shadow-lg rounded bg-white mb-2">
        <div class="column h-100 card-color">
          <div class="rounded overflow-hidden border p-2 person">
            <img src={image} class=" img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h4 class="card-text">
                Name: <small class="persone-name">{name}</small>
              </h4>
              <h5 class="card-text">
                <small>Father of: {language}</small>
              </h5>
              <h6 class="card-text">
                <small>Salary: ${salary}</small>
              </h6>
              <p class="card-text">
                <small>Age: {age} years old</small>
              </p>
              <p class="card-text">
                <small>Gender: {gender}</small>
              </p>
              <p class="card-text">
                <small>Email: {email}</small>
              </p>
              <h6 class="card-text">
                <small>Phone: {phone}</small>
              </h6>
              <button
                onClick={() => props.handleAddToCart(props.programmer)}
                className="btn-regular"
              >
                <FontAwesomeIcon icon={faListOl} /> add to list
              </button>
            </div>
            <div className="container mx-5 icon-color1">
              <span className="area">
                <FontAwesomeIcon icon={faAddressCard} />
              </span>{" "}
              <span>
                <FontAwesomeIcon icon={faAward} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programmer;
