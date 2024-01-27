import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">
          <img src="images\360_F_424489023_hZtgYjx4ZR0ERdDHzKn23LtO52hY8sHg-removebg-preview.png" alt="" width="200" height="90" class="d-inline-block align-text-top" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/service">
                Service
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
  )
}

export default Navbar;
