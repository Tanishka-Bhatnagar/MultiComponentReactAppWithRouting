import About from "../About/About"
import Home from "../Home/Home";
import Login from "../Login/Login";


function Body({page}){
    return(
        <main className="body">
            <routes>
            <route path="/" element={<Home/>}/>
            <route path="/about" element={<About/>}/>
            <route path="/login" element={<login/>}/>
            </routes>
            {/* { page === "Home" && <Home/> }
            { page === "About" && <About/> }
            { page === "Login" && <Login/> } */}
        </main>
    )
}
export default Body;