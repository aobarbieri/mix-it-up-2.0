import { useState } from "react";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';
import Slide from "@mui/material/Slide";
// import { login } from "../../utilities/user-service";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function Login() {
  //   const [user, setUser] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   function handleChange(e) {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   }

  // const userData = await login(user);
  // console.log(userData);

  // setUser({
  //   email: "",
  //   password: "",
  // });

  const [snack, setSnack] = useState({
    open: false,
    Transition: SlideTransition,
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnack({ ...snack, open: false });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setSnack({ open: true, SlideTransition });
  }

  return (
    <div className="user-container flex-center">
      <section className="user-content">
        <h1>Login into Mix It Up</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            // value={user.email}
            placeholder="Email"
            // onChange={handleChange}
          />

          <input
            type="password"
            id="password"
            name="password"
            // value={user.password}
            placeholder="Password"
            // onChange={handleChange}
          />

          <input className="btn-primary" type="submit" value="Log In" />
        </form>

        <p>
          New here? <Link to="/signup">Create new account</Link>
        </p>
      </section>

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
    </div>
  );
}
