import react, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { setUser } from "./redux/users/userAction";
import AboutPage from "./components/AboutPage";
import EventsPage from "./components/EventsPage";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    // It will only run once when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>>", authUser);

      if (authUser) {
        // The user just logged in/ the user was logged out
        dispatch(
          setUser({
            uid: authUser.uid,
            email: authUser.email,
            name: authUser.displayName,
          })
        );
      } else {
        // The user is logged out
        dispatch(setUser(null));
        history.push("/");
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/events">
            <Navbar />
            <EventsPage />
          </Route>
          <Route path="/about">
            <Navbar />
            <AboutPage />
          </Route>
          <Route path="/contact">
            <Navbar />
            <ContactPage />
          </Route>
          <Route path="/home">
            <Navbar />
            <HomePage />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
