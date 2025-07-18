import Container from "./components/Container";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { useState, useEffect } from "react";


function App() {


  return (
  <Container>
    <Nav/>
    <Home/>
  </Container>
  );
}

export default App;
