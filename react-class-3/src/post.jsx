const style = {width:300 , backgroundColor : "white" , borderRadius :10 ,borderColor : "gray" , borderWidth : 1, padding: 20

 }
 import { useState } from 'react'
import {PostComponent} from './post'



function App() {
   // const [posts, setPosts] = useState([{}]);

    // That means the first element is an empty object:
   const [posts, setPosts] = useState([]);
   const postComponent = posts.map(post =><PostComponent 
          name= {post.name}
            subtitle = {post.subtitle}
            time={post.time}
            image = {
              post.image
            }
            description = {
              post.description
            }/>)

      function addpost(){
        setPosts([...posts,{
    name : 'saqib',
    subtitle : "1000 followers",
    time : "2m ago",
    image : "https://assets-cms.b-cdn.net/branding/100xdevs-profile.jpg",
    description : "want to know how to win big ? Check ou these folks won $2233 in bounties"



   } ])
       
      }


  return <div style={{ background: "#dfe6e9", height: "100vh" }}>
    <button onClick={addpost}>Add post</button>
     <div style={{display : "flex", justifyContent: "center"}}>

         
     
      <div>
         {postComponent
            }
        </div>
        </div> 

  

   
  </div>;
}


// when the value of stateVariables changes the component that uses the 
// state variable re_renders


// structring code into components
 export function  PostComponent({ name, subtitle, image, description, time }){

  return (
    <div style={style}>
    <div style={{display: "flex"}}>
    <img src={image} alt=""  style={{
      width: 30 , 
      height: 30 ,
      borderRadius: 20 , 

    }}/>

    <div style={{fontSize: 12, marginLeft: 10  }}><b>
      {name}
    </b>
    <div>{subtitle}</div>
    {time && <div style={{display: "flex"}}>

      <div>{time}</div>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4xlHMImVeHO7D6kzbZeZHSrbJE5itFLveJRQiutMyQ&s=10"} 
      style={{width:12 , height: 12}} />
    </div>
}
      </div>

  </div  >
  <div style={{fontSize: 12  }}>
        {description}
      </div>
  </div>
  )
}