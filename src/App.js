import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About/About";
import AuthProvider from "./Context/AuthProvider";
import Booking from "./pages/components/Booking/Booking";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyOrder from "./pages/MyOrder/MyOrder";
import Package from "./pages/components/Package/Package";
import PrivateRoute from "./pages/components/PrivateRoute/PrivateRoute";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/packages/:packageId"
              element={
                <PrivateRoute>
                  <Package />
                </PrivateRoute>
              }
            />
            <Route
              path="/booking/:packageId"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/myorder/"
              element={
                <PrivateRoute>
                  <MyOrder />
                </PrivateRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

// points coverd
// 1.  Home page will have a header (simple navbar), banner, offerings (services/items/options/plans: the main items that user will purchase), and footer.

//2. Add two extra sections in the home page in addition to the 4 sections mentioned above.

//3. The Offerings will have at least 6 items/services. You can put one or more items/services in a row based on your design. Each service should have a relevant name, image, short description and a purchase button (button could say: book now, buy now, order, etc.).

//4. Clicking on the button will take the user to the place order page. This route will be a private/protected route. Please make sure that if the user is not logged in, the private route redirects to the login page. After login, the user will be redirected to the page he/she wanted to go to. Also, make sure, after reloading the page of a private route, the user is not redirected to the login page.

//5. The Place Order page should display detailed information of the item, user has clicked. It will display users name and email address from the login system and user will provide address and necessary information to place the order/booking/purchase.

//6. Implement at least one (google, facebook, github,or email/ password) authentication. Once a user is logged in, the user name, logout button should appear on the header which will log out the user once clicked. Displaying user profile pic on the header is optional.

//7.

//8.

//9. No Fake data (data has to be hosted on the database). database could be mongodb atlas or any other noSQL database.No Fake data (data has to be hosted on the database). database could be mongodb atlas or any other noSQL database.
