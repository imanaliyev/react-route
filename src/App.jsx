import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Detail from "./Components/Pages/Detail";
import MainLayout from "./Components/Layouts/MainLayout";
import About from "./Components/Pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
        <Route path="/" element={<MainLayout/>}>

          <Route path="/" element={<Home/>} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/contacts" element={<Contact/>} /> 
          <Route path="/detail/:id" element={<Detail/>} /> 
          
          
           </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
