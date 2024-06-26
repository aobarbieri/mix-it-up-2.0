import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import hamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import search from "../../assets/icons/search.svg";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function Header() {
  const [snack, setSnack] = useState({
    open: false,
    Transition: SlideTransition,
  });

  const handleClick = () => {
    setSnack({ open: true, SlideTransition });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnack({ ...snack, open: false });
  };

  return (
    <header>
      <nav className="app-default-width flex justify-between items-center h-20 bg-white pt-6 md:p-0">
        <button className="md:hidden">
          <img className="" src={hamburgerMenu} alt="menu icon" />
        </button>

        <img
          className="w-28 md:w-32 mb-2 md:m-0"
          src={logo}
          alt="Mix it up logo"
        />

        <div className="md:flex items-center gap-x-16">
          <ul className="hidden md:flex gap-x-16">
            <li className="link-secondary">
              <Link to={"/"}>Cocktail calculator</Link>
            </li>
            <li className="link-secondary">
              <Link to={"/recipes"}>Recipes</Link>
            </li>

            <li className="link-secondary">
			<button onClick={handleClick}>My Favorites</button>
              {/* <Link to="/favorites">My Favorites</Link> */}
            </li>
            <li className="link-secondary">
              <button onClick={handleClick}>Profile</button>
              {/* <Link to="/profile">Profile</Link> */}
            </li>

            <li className="link-secondary">
              <Link to="/login">Login/Logout</Link>
            </li>
          </ul>
          <img className="" src={search} alt="search icon" />
        </div>
      </nav>
      <Snackbar
        open={snack.open}
        TransitionComponent={snack.Transition}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Sorry! This feature is under maintenance at the moment.
        </Alert>
      </Snackbar>
    </header>
  );
}
