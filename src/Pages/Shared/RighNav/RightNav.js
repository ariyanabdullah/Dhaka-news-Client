import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import {
  AiOutlineGoogle,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineDribbble,
  AiOutlineTwitter,
} from "react-icons/ai";
import { authContext } from "../../../Context/UserContext";
import Carosel from "../../Carosel/Carosel";

const RightNav = () => {
  const { googleSign } = useContext(authContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogle = () => {
    googleSign(googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* login and sign up */}
      <div>
        <p className="m-0">
          <Button onClick={handleGoogle} variant="outline-primary">
            <AiOutlineGoogle /> Sign In With Google
          </Button>
        </p>
        <p className="mt-2">
          <Button variant="outline-dark">
            <AiOutlineGithub /> Sign In With Google
          </Button>
        </p>
      </div>

      {/* find us on  */}

      <div>
        <h5>Find Us</h5>
        {/* list group */}
        <ListGroup>
          <ListGroup.Item className="py-2">
            <AiOutlineFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="py-2">
            {" "}
            <AiOutlineWhatsApp /> Whatsapp{" "}
          </ListGroup.Item>
          <ListGroup.Item className="py-2">
            <AiOutlineTwitter />
            Twitter{" "}
          </ListGroup.Item>
          <ListGroup.Item className="py-2">
            {" "}
            <AiOutlineDribbble /> Dribble{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>

      {/* brand  */}

      <div>
        <h1>Brand </h1>
        <Carosel> </Carosel>
      </div>
    </div>
  );
};

export default RightNav;
