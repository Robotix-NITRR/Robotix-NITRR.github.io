import React from "react";
import  { useEffect, useState } from "react";
import  "./ProjectList.css";
import"./card.css";
import {Link} from "react-router-dom";
import arduino from "./../components/assets/arduino.png"
import axios from 'axios';
import {AiOutlineEllipsis, AiOutlineBars,AiFillHeart,AiFillMessage } from "react-icons/ai";
import favicon from "./../components/assets/favicon.png"
import gear from "./../components/assets/gear.png"

const ProjectList = () => {

// const [user, setUser] = useState([]);
// // const fetchData1 = () => {
// //   return fetch("https://640f6bfccde47f68db4a4b91.mockapi.io/api/aman/aman")
// //         .then((response) => response.json())
// //         .then((data) => setUser(data));      
// // }
// const fetchData = () => {
//     axios.get(`http://localhost:80/api/user/save/`)
//     .then(function(res){
//     //console.log(res.data);
//     setUser(res.data);
//   });    
//   }

//   //https://640f6bfccde47f68db4a4b91.mockapi.io/api/aman/aman
// //https://jsonplaceholder.typicode.com/users
// //http://localhost:8080/users


 

//   useEffect(() => {
//     fetchData();
//     // fetchData1();
//   },[])
  return (<>
  
      <div className="header">
        <div className="contaner">
         <img  className="img" src={arduino} alt="arduino.png" />
         <h1 className="ProjectList" >Explore Our New Projects</h1>
         </div>
      </div>
       <main className="test">
       <div className="contaner_ul">
       <h1 className="UserList">Project List</h1>
       </div>
<div className="project_continer_center">
      <div className="project-continer">
      <div className="card1 ">
    <div className="Card_cantaner"> 
     <div className="card_img"></div>
     <div className="card_contex">
         <div className="card_user"></div>
         <div className="card_text"><b>Hack Game</b><p>alax</p></div>
         <div className="card_menu"><AiOutlineEllipsis/></div>
         <div className="icons_menu" ><AiOutlineBars/>
        </div>
     </div>
     <div className="display">
        <div className="card_icon">
          {/* <div className="icons"><AiFillLike/> <span>1</span> </div> */}
          <div className="icons"><AiFillHeart/> <span>2</span></div>
          <div className="icons"><AiFillMessage/> <span>3</span></div>
        </div>
        </div>
     </div>
     </div>

     <div className="card1 ">
    <div className="Card_cantaner"> 
     <div className="card_img"></div>
     <div className="card_contex">
         <div className="card_user"></div>
         <div className="card_text"><b>Hack Game</b><p>alax</p></div>
         <div className="card_menu"><AiOutlineEllipsis/></div>
         <div className="icons_menu" ><AiOutlineBars/>
        </div>
     </div>
     <div className="display">
        <div className="card_icon">
          {/* <div className="icons"><AiFillLike/> <span>1</span> </div> */}
          <div className="icons"><AiFillHeart/> <span>2</span></div>
          <div className="icons"><AiFillMessage/> <span>3</span></div>
        </div>
        </div>
     </div>
     </div>

     <div className="card1 ">
    <div className="Card_cantaner"> 
     <div className="card_img"></div>
     <div className="card_contex">
         <div className="card_user"></div>
         <div className="card_text"><b>Hack Game</b><p>alax</p></div>
         <div className="card_menu"><AiOutlineEllipsis/></div>
         <div className="icons_menu" ><AiOutlineBars/>
        </div>
     </div>
     <div className="display">
        <div className="card_icon">
          {/* <div className="icons"><AiFillLike/> <span>1</span> </div> */}
          <div className="icons"><AiFillHeart/> <span>2</span></div>
          <div className="icons"><AiFillMessage/> <span>3</span></div>
        </div>
        </div>
     </div>
     </div>

     <div className="card1 ">
    <div className="Card_cantaner"> 
     <div className="card_img"></div>
     <div className="card_contex">
         <div className="card_user"></div>
         <div className="card_text"><b>Hack Game</b><p>alax</p></div>
         <div className="card_menu"><AiOutlineEllipsis/></div>
         <div className="icons_menu" ><AiOutlineBars/>
        </div>
     </div>
     <div className="display">
        <div className="card_icon">
          {/* <div className="icons"><AiFillLike/> <span>1</span> </div> */}
          <div className="icons"><AiFillHeart/> <span>2</span></div>
          <div className="icons"><AiFillMessage/> <span>3</span></div>
        </div>
        </div>
     </div>
     </div>

     
      </div>
      </div>
    </main>

    <div className="rotation_box_position">
    <div className="rotation_box">
     <img className='favicon rotationL' src={favicon} alt="Logo" />
     <img className='gear rotationR' src={gear} alt="Logo" />
     </div> </div>
    </>
  );
};
  
export default ProjectList;
// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };