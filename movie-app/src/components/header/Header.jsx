import React from 'react';
import './header.css'
const Header = ({setShow,setQuery}) => {
    return (
        <div className='header'>
               <input type="text" onChange={e=>setQuery(e.target.value)} />  
               <div className="open" onClick={()=>setShow(true)}>		 
<div className="open-items">
<div className="solid"></div>
<div className="solid"></div>
<div className="solid"></div>
</div>
</div>	
        </div>
    );
}

export default Header;
