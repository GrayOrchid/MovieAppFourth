import React, { useEffect, useState } from 'react';
import { Button,Carousel,Ca } from 'react-bootstrap';
import MoviesAPI from '../API/API';
const Slider = () => {

  let [img,setImg] = useState([])
  async function  getMovies(params) {
    let response = await MoviesAPI.getPopular()
 setImg(response)

  }
  
  useEffect(()=>{
    getMovies()
  },[])
    return (
        
            <Carousel>
  <Carousel.Item>
    {img.map((e)=>(
       <img
      className="d-block w-100"
        src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} 
    />
    ))}
   
    
    <Carousel.Caption>
      
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
      
    );
}

export default Slider;
