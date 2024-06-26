import { useState } from "react";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

// import { signup } from '../../utilities/user-service'

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

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

  async function handleSubmit(e) {
    e.preventDefault();
    setSnack({ open: true, SlideTransition });
    // const userData = await signup(user)
    // console.log(userData)

    // setUser({
    // 	name: '',
    // 	email: '',
    // 	password: '',
    // 	passwordConfirm: '',
    // })
  }

  return (
    <div className="user-container flex-center">
      <section className="user-content">
        <h1>Create a new account</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
          />

          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />

          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="Confirm Password"
            value={user.passwordConfirm}
            onChange={handleChange}
          />

          <input className="btn-primary" type="submit" value="Signup" />
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
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
