 import { useEffect, useState } from "react";
import useCounter from "./hooks/useCounter";
import usePostTitle, { useFetch } from "./hooks/useFetch";
function App() {

  function sendDataToBackend(){
    fetch("")
  }

  const debouncedFn = useDebounce(sendDataToBackend)


  return <div>

    <input type="text" name="" id=""onChange={debouncedFn} />

  </div>
}

export default App;
