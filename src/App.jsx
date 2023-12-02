
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import { Routes, Route } from "react-router-dom";
import { useApiOdont } from "./Components/utils/global.context";



function App() {
const {state}= useApiOdont()
const {theme} = state
  return (
      <div style={{background:theme.background}}>
          <Navbar />        
          <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Detail/:id" element={<Detail />}/>
            <Route path="/Favs" element={<Favs />}/>
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
