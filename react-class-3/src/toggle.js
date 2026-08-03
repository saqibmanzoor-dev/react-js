
// when the value of stateVariables changes the component that uses the 
// state variable re_renders


export const ToggleMessage = () => {

  const [notificationCount, setNotificationCount] = useState(0);
  


  function incrementCount(){
     setNotificationCount((inc) => inc + 1)
  }

  return  <div>
     <button onClick={incrementCount}>toggle message</button> {notificationCount}

     {/* {notificationCount? <p>this message canot be rendered</p>: null} */}
  </div>


}