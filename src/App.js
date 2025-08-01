import Container from "./components/Container";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Headphones from "./pages/Headphones";
import { Route, Routes } from "react-router-dom";
import InfoBlock from "./components/InfoBlock";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./components/ScrollToTop.js";
import CartModal from "./components/CartModal.js";
import { useCart } from "./context/CartContext.js";
import Checkout from "./pages/Checkout.js";



function App() { 

  const {isCartOpen, closeModal} = useCart()
  return (
    <Container>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <InfoBlock />
      {isCartOpen && <CartModal onClose={closeModal}/>}
      <Footer />
    </Container>
  );
}

export default App;
