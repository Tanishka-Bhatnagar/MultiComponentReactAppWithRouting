import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Pages/Header/Header'
import Body from './Pages/Body/Body'
import Footer from './Pages/Footer/Footer'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";

function App(){
   return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>

      <Footer />
    </>
  );
  // const [counter,setCounter]=useState(0)
  // const [page,setPage]=useState("Home");
  // return(
  //   <div>
  //   <Header setPage={setPage}/>
  //   <Body page={page}/>
  //   <Footer/>
  //   </div>
  // )
}
export default App