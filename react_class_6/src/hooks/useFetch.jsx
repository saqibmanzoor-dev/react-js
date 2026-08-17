import { use } from "react";
import { useEffect, useState } from "react";
// custom hookk
export function usePostTitle(){

    const [  post, setPost] = useState({})

      async function getPosts(){

        const res = await fetch("")

        const data = await res.json()

       setPost(data);

      }



      useEffect(()=>{

        getPosts();

      },[]) 
        
      return post.title;
}

// A reusable custom hook: pass a URL and refresh interval, then receive
// the fetched data and its loading status in any component that needs them.
export function useFetch(url , retryTime){


    const [finalData , setFinalData] = useState({})
    const [loading , setLoading] = useState(true)

    async function getDetails(){

       setLoading(true)
        const response = await fetch(url)

        const data = response.json()

        setFinalData(data)
        setLoading(false)
        
    }

     useEffect(()=>{
        getDetails();
     },[url])
     useEffect(()=>{
        setInterval(getDetails() ,retryTime * 1000)
            
       
     },[])

     return{ finalData , loading}
}
