import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RegisterPage from "./components/RegisterPage";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Cart />
      {/* <RegisterPage /> */}
      {/* <Login /> */}
      <Footer />
    </>
  );
}

export default App;
