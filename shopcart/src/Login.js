import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartData } from "./CartProduct";
import ContinueShop from "./ContinueShop";

function Login() {
  console.log("Inside Login");
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");
  const cartCount = CartData.CartProducts.length;
  console.log("cartCount from Login: " + cartCount);
  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div class="container">
      {login && cartCount == 0 && <ContinueShop />}
      {!login && (
        <Card style={{ width: "800px" }} className="mx-auto mt-5">
          <Card.Header className="pb-4">
            <h1>Sign In</h1>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <React.Fragment>
                <h3>Please Login using one of the following:</h3>
                {/* login form */}
                <LoginForm />
                {/* FB login button */}
                <FacebookLogin
                  appId="708907720832161"
                  autoLoad={false}
                  fields="name,email,picture"
                  scope="public_profile,user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook"
                />
              </React.Fragment>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
      {login && cartCount > 0 && (
        <Card style={{ width: "800px" }} className="mx-auto mt-5">
          <Card.Header className="pb-4">
            <h1>Check Out</h1>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Home fbpic={picture} fbdata={data} />
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

function LoginForm() {
  return (
    <form className="border mt-3 mb-5 p-3 bg-white">
      <label className="m-2">Name:</label>
      <input type="text" name="name" placeholder="Your name" />
      <label className="m-2">Email:</label>
      <input type="email" name="email" placeholder="Your email" />
      <input
        type="submit"
        name="Login"
        className="btn bg-success text-white my-3"
      />
    </form>
  );
}

function Home({ fbpic, fbdata }) {
  return (
    <React.Fragment>
      <img src={fbpic} alt={fbdata.name} />
      <h3 className="d-inline text-success mx-2">
        Welcome back {fbdata.name}!
      </h3>
      <p className="my-5">Time to check out?</p>
    </React.Fragment>
  );
}

export default Login;
