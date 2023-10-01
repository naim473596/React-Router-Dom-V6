import Home from "./assets/Module/Home"
import Hero from "./assets/Module/Hero"
import About from './assets/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>This is Window Page</h1>

      <a style={{marginLeft:"20px"}} href="/">Home</a>
      <a style={{marginLeft:"20px"}} href="/Hero">Hero</a>
      <a style={{marginLeft:"20px"}} href="/About">About</a>





    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hero" element={<Hero/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>




    
    
    

    </div>
  );
};

export default App;