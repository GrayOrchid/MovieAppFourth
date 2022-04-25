import React from 'react';

const People = (props) => {
    return (
<div className="item">
   <div className='item-img'> 
      <img  src={`https://image.tmdb.org/t/p/w500/${props.e.profile_path}`} alt="" />
   </div>
   <div className='item-info'>
      <div >{props.e.known_for_department}</div>
      <div className='item-name'>{props.e.name }</div>
      <div >Movies :</div>
      <div >{props.e.known_for[0].original_title}  </div>
   </div>
</div>
    );
}

export default People;
