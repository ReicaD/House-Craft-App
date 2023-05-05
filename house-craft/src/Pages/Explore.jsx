import { useEffect} from 'react'
import {getAuth} from "firebase/auth"

function Explore() {
  const auth = getAuth()
useEffect(()=>{
 console.log(auth.currentUser);
},[])



  return (
    <h1>Explore</h1>
  )
}

export default Explore