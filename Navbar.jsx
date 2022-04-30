import React from "react";
const Navbar = () => {
    return(
      <>
      <div class="container-fluid nav_bg">
          <div class="row">
              <div class="col-10 mx-auto">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a activeClassName='menu_active' class="navbar-brand" href="/">Edutek</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a activeClassName='menu_active'
           exact
           class="nav-link active" 
           aria-current="page" 
           href="/"
           >
             Home
             </a>
        </li>
        <li class="nav-item">
          <a activeClassName='menu_active' class="nav-link" href="/service">Service</a>
        </li>
        <li class="nav-item">
          <a activeClassName='menu_active' class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a activeClassName='menu_active' class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>
          </div>
      </div>
      </>
    )
  }
  
  export default Navbar;
  