

import { BrowserRouter , Routes, Route, Link, Outlet } from 'react-router-dom'

 function App() {
     
  return <div>
    

   


   <BrowserRouter>
   
   
  < Routes>

          <Route path="/" element={<Layout />}>
        <Route path="/neet/online-coaching-class-11" element= {<Class11Program/>}/>
         <Route path="/neet/online-coaching-class-12" element= {<Class12Program/>}/>
          <Route path="/" element= {<LandingPage/>}/>
           </Route>
  </Routes>
        Footer | Contact Us
   </BrowserRouter>
  </div>
}

function Layout(){
     return <div style={{backgroundColor: 'cyan', height : "100vh"}}>

      <Link to="/">ALLEN</Link>
    |  

    <Link to="/neet/online-coaching-class-11">Class 11th</Link>
    |  

    <Link to="/neet/online-coaching-class-12">Class 12th</Link>

      <div style={{height:"90vh" , backgroundColor:'red'}}> 
              <Outlet/>

      </div>
     

    
     </div>
}

function LandingPage(){

  return <div>
    welcome to allen
  </div>

}

function Class11Program(){


  return <div>
    Neet program for class 11th
  </div>
}
function Class12Program(){
  return <div>
    Neet program for class 12th
  </div>
}


