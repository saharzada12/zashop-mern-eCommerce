import React from "react";
import Homepage from "./Pages/Homepage";
import "../../client/src/App.css";
import SingleCategory from "./Pages/SingleCategory";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import MustBeLogged from "./Pages/MustBeLogged";
import AboutUs from "./Pages/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Cart from "./Pages/Cart";
import Dashboard from "./adminPage/Dashboard";
import EditProduct from "./adminPage/pages/EditProduct";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  const isAdmin = user && user.isAdmin == true;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}>
            {" "}
          </Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route
            path="/products/:category"
            element={<SingleCategory />}
          ></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route
            path="/login"
            element={user ? <Homepage /> : <LoginPage />}
          ></Route>
          <Route
            path="/register"
            element={user ? <Homepage /> : <Register />}
          ></Route>
          <Route
            path="/Cart"
            element={user ? <Cart /> : <MustBeLogged />}
          ></Route>
          <Route path="/notLogged" element={<MustBeLogged />}></Route>
          <Route
            path="/admin"
            element={isAdmin ? <Dashboard /> : <Homepage />}
          ></Route>
          <Route
            path="/editProduct/:id"
            element={isAdmin ? <EditProduct /> : <Homepage />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
