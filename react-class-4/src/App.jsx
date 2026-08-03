

import { BrowserRouter , Routes, Route, Link , useNavigate } from 'react-router-dom'

function App() {
     
  return <div>
    

   


   {/* SPA routing updates the view without a full page refresh. */}
   <BrowserRouter>
   <Link to="/">ALLEN</Link>
    |  

    <Link to="/neet/online-coaching-class-11">Class 11th</Link>
    |  

    <Link to="/neet/online-coaching-class-12">Class 12th</Link>
   
  < Routes>
        <Route path="/neet/online-coaching-class-11" element= {<Class11Program/>}/>
         <Route path="/neet/online-coaching-class-12" element= {<Class12Program/>}/>
          <Route path="/" element= {<LandingPage/>}/>
  </Routes>
   </BrowserRouter>
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

  const navigate = useNavigate();
  
  return <div>
    Neet program for class 12th
  </div>
}

export default App
