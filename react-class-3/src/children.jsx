


function App(){

  return <div style={{display: "flex"}}>
      <Card >
        <div style={{color: "green"}}>
          what do u want to post 
          <input type="text" name="" id="" />

        </div>

      </Card>

      <Card>hii there</Card>
    
  </div>
}

function Card({children}){

   return <div style={{backgroundColor: "black" , borderRadius : 10, color: "white"  , padding: 10, margin: 10 }}>
         {children}
   </div>


}

