import React from "react";
import { Fragment } from "react";
import { useState } from "react";

function Loginform({connexion}) {

     
 
  
    return (
        <Fragment> 
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">EB</span>
                </div>
        
            </nav>
            <div class="col-12 d-flex justify-content-center" >
            <form onSubmit={connexion} class="d-flex align-self-center my-2"  >
                <fieldset class="d-flex flex-column">
                    <h1>Connexion</h1>
                    <label for="email">Email:</label>
                        <input type="email" name="email" required />
                    <label for="password">Mot de passe:</label>
                        <input type="password" name="password" required />
                    <button type="submit" class="my-2">Se connecter</button>
                </fieldset>
            </form>
        </div>
        </Fragment>
       
    );
}

export default Loginform;
