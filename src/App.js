import Container from "./components/Container";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Headphones from "./pages/Headphones";
import { Route, Routes } from "react-router-dom";
import InfoBlock from "./components/InfoBlock";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";


function App() {


  return (
  <Container>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/headphones" element={<Headphones/>}/>
      <Route path="/speakers" element={<Speakers/>}/>
      <Route path="/earphones" element={<Earphones/>}/>
    </Routes>
    <InfoBlock/>
    <Footer/>
  </Container>
  );
}

export default App;
