import React from 'react'

import Header from './Header';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import "./All.css"



const Homepage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Header title= "Recipes" bgClass="bg-image ">
    <Button 
        content= "SEARCH RECIPES" 
        primary
        as={Link}
        to="/recipes"
        size='big'/>
        </Header>
       
    </>
  )
}

export  default Homepage;