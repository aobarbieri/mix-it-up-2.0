import { useState } from "react";
import { login } from "../../utilities/user-service";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const userData = await login(user);
    console.log(userData);

    setUser({
      email: "",
      password: "",
    });
  }

  return (
    <div className="user-container flex-center">
      <section className="user-content">
        <h1>Login into Mix It Up</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            placeholder="Email"
            onChange={handleChange}
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
          />

          <input className="btn-primary" type="submit" value="Log In" />
        </form>

        <p>
          New here? <Link to="/signup">Create new account</Link>
        </p>
      </section>
    </div>
  );
}
