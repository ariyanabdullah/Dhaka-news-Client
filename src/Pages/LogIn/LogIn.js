import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { authContext } from "../../Context/UserContext";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LogIn = () => {
  const { handleLog } = useContext(authContext);
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const LogInForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    handleLog(email, password)
      .then((result) => {
        toast.success("Log in successFul");
        navigate(from, { replace: true });
        setErr("");
        form.reset();
      })
      .catch((error) => {
        const ero = error.message;
        setErr(ero);
      });
  };

  return (
    <div className="px-5 py-4 border rounded-4 ">
      <h1 className="text-primary">Log In Now !!</h1>
      <Form onSubmit={LogInForm}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            id="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <Form.Text className="text-danger">{err}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
