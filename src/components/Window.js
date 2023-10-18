import React from "react";
import '../stylesheets/Window.css';
import '../font-awesome-4.7.0/css/font-awesome.css'



function Window(props) {
  console.log(props.compress);
    return (
      <div
        className={`${props.type}`}>
          
       <div className="toolbar">
       <i className='fa fa-free-code-camp logo'> </i>
       <div id="content">< h2 >{props.type}</h2> </div>
       <div className="expand">
      
       </div>
       
       </div>
     
        
      </div>
      
    );
  
};
export default Window;