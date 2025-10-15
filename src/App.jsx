
import { Suspense } from 'react'
import './App.css'
import Body from './components/datainfo/Body'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


   const fetchitems = async()=>{
        const res= await fetch('/data.json')
    return res.json()
   }

function App() {
 
const promise = fetchitems()
  return (
    <>
     <Navbar></Navbar>
    <Suspense fallback={"data Loading ..."}> <Body promise={promise}></Body></Suspense>
     <Footer></Footer>
      
    </>
  )
}

export default App
