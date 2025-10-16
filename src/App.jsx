
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
    <Suspense fallback={<p className='text-center text-4xl my-6 text-green-800 font-bold'> data loading....</p>}> <Body promise={promise}></Body></Suspense>
     <Footer></Footer>
      
    </>
  )
}

export default App
