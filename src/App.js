import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import AllCourses from "./pages/AllCourses/AllCourses";
import Order from "./pages/Order/Order";



function App() {
  return (
    <div className="">
      {/* <AuthProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<AllCourses />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/order/:id" element={<Order />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/dashboard/*" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path="" element={<DashboardHome />} />
              <Route path="manageOrders" element={<ManageOrders />} />
              <Route path="addProducts" element={<AddProducts />} />
              <Route path="manageProducts" element={<ManageProducts />} />
              <Route path="myOrders" element={<MyOrders />} />
              <Route path="addReview" element={<AddReview />} />
            </Route>

            <Route path="/checkout" element={<PrivateRoute>
              <Checkout />
            </PrivateRoute>} /> */}
        </Routes>
      </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
