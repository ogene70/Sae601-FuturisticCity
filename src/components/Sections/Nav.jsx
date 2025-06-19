import React from "react";

function Nav({deconnexion}){
return(
<nav id="nav"class="d-flex navbar navbar-expand-lg col-12 p-3 link-light">
 <a href="" className="navbar-brand link-light" >Polygone's</a>
 
 <div className="container-fluid ">

  <ul class=" d-flex col-12 navbar-nav m-0 justify-content-space-between ">
    <li><a href="" className="nav-link link-light ">Signalements</a></li>
    <li><a href="" className="nav-link link-light ">ActuVerte</a></li>
    <li><a href="" className="nav-link link-light ">Forum</a></li>
    <li className=""><a class="nav-link link-light " href="">Connexion/inscription</a></li>
  </ul>


 </div>
</nav>
   
)
}
export default Nav;