import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function navbar() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("works");
  };
  return (
    <>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
        <li class="nav-item">
          <button class="btn btn-primary" onclick={handleSubmit}>
            Logout
          </button>
        </li>
      </ul>
    </>
  );
}

export default navbar;
