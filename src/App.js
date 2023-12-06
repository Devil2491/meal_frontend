// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignup from "./Component/Registration/LoginSignup";
import RecoverPassword from "./Component/Registration/RecoverPassword";
import MyCalendar from "./Component/Home/MyCalendar";
import Navbar from "./Component/widgets/Navbar/Navbar";
import Home from "./Component/Home/Home";
import BookingListing from "./Component/Tables/BookingListing";
import Employee from "./Component/Tables/Employee";
import NonEmployee from "./Component/Tables/NonEmployee";
import Custom from "./Component/Tables/Custom";
import Navigation from "./Component/widgets/NavigationPanel/Navigation";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginSignup />} />
          <Route path="/RecoverPassword" element={<RecoverPassword />} />
          <Route path="/MyCalendar" element={<MyCalendar />} />
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Employee" element={<Employee/>}/>
          <Route path="NonEmployee" element={<NonEmployee/>}/>
          <Route path="/Custom" element={<Custom/>}/>
          <Route path="/BookingListing" element={<BookingListing/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
