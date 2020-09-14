//required Modules
import React, { useState, useEffect} from "react";
import { Switch,Route, Redirect, Router } from "react-router-dom";

//Pages

import { Login } from "../pages/login/login.pages";
import {Register} from "../pages/login/register.pages";
import {Forgot} from "../pages/login/forgot.pages";
import {Menu} from "../pages/Menu/mainmenu.pages"; 
import {EditProfile} from "../pages/Menu/editProfile.pages"; 
import { Createmetting } from "../pages/Menu/createmetting.pages"
import { Confirmation } from "../pages/Menu/confirmation.pages"

import { isloged} from "../components/auth.components";


//Logic manipulators

const PrivateRoute = ({ component: Component, ...rest})=> (
    <Route {...rest}
    render = { props => isloged()? (
        <Component {...props}/>):
        <Redirect to={{ pathname:"/", state : {from: props.location}}}/>
        }/>
)


export const Routes = () => {

    return(
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/forgot" component={Forgot}/>

            <PrivateRoute path="/home" exact component={Menu}/>
            <PrivateRoute path="/home/editprofile" component={EditProfile}/>
            <PrivateRoute path="/home/createmetting" component={Createmetting}/>
            <PrivateRoute path="/home/confirm" component={Confirmation}/>
        </Switch>
    )
}