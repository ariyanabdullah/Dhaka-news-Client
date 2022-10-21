import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { authContext } from "../../Context/UserContext";

const Register = () => {
  const { makePeople, varifyEmail, updatePeople } = useContext(authContext);

  const [check, setCheck] = useState(false);

  // handle registration form
  const RegisterForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.imgLink.value;
    const name = form.name.value;
    console.log(email, password);

    makePeople(email, password)
      .then((result) => {
        handleUpdate(name, photo);
        form.reset();
        varifyEmail().then(() => {
          toast.success(
            "please veryify your email. We have sent a verification on your Email"
          );
        });
      })
      .catch((error) => console.log(error));
  };

  // handle update user

  const handleUpdate = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };

    updatePeople(profile)
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // handleCheck btn

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };

  return (
    <div className="px-5 py-4 border rounded-4 ">
      <h1 className="text-primary">Register Now !!</h1>
      <Form onSubmit={RegisterForm}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            id="name"
            type="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Photo URL </Form.Label>
          <Form.Control
            name="imgLink"
            id="imgLink"
            type="text"
            placeholder="Enter Your Photo URL"
          />
        </Form.Group>

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
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleCheck}
            label={
              <>
                Accept <Link to="/terms"> Terms and Condition</Link>{" "}
              </>
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!check}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
