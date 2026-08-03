import React from "react";



function App(){

  return <div>
    <ErrorBoundary>
       <Card1 />
    </ErrorBoundary>
   

    <Card2 />
  </div>
    

}


function Card1(){
  throw new error("something")

  return <div style={{backgroundColor:"red" , borderRadius: 20 , padding: 20 , margin : 20}}>
     
     Hii there  from card1

  </div>

}

function Card2(){
  return <div style={{backgroundColor:"red" , borderRadius: 20 , padding: 20 , margin : 20}}>
     
     Hii there from card2
  
  </div>
}


class ErrorBoundary extends React.Component{

  constructor(props){
    super(props);
    this.state = {hasError: false}
  }

  static getDerivedStateFromError(error){
    return {hasError : true}
  }

  componentDidCatch(error, info){
    console.log("error caught" , error , info);
    
  }
  render(){
    if(this.state.hasError){
      return <h1>something went wrong</h1>
    }
  
  return this.props.children;
  }

}


export default App;