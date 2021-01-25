import React, { useEffect } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "gatsby";
import logo from "../images/icon.jpg";
import styles from "./header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userData, userLogin, userLogout } from "./store";
import Swal from "sweetalert2";
// import {
//   auth,
//   googleProvider,
//   facebookProvider,
// } from "../components/features/signIn";

//gatsby logo on the right; Home Blogs Sign in on right
export const Header = () => {
  useEffect(() => {
    console.log("User==>", user);
  }, []);
  const user = useSelector(userData);
  const dispatch = useDispatch();

  // const signIn = (value: string) => {
  //   auth
  //     .signInWithPopup(value === "google" ? googleProvider : facebookProvider)
  //     .then((result) => {
  //       if (result.user !== undefined && result.user !== null) {
  //         const user = result.user.displayName;
  //         console.log(user);

  //         dispatch(userLogin(user));
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/">
        <img src={logo} alt="gatsby-logo" width="40px" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link
            activeStyle={{ color: "white" }}
            className={styles.navLinks}
            to="/"
          >
            Home
          </Link>
          <Link
            activeStyle={{ color: "white" }}
            className={styles.navLinks}
            to="/blogs"
          >
            Blogs
          </Link>
          {user === "" ? (
            <Button
              variant="link"
              className={styles.buttonLink}
              // onClick={() => {
              //   Swal.fire({
              //     title: "Choose Login Method",
              //     showDenyButton: true,
              //     showConfirmButton: true,
              //     confirmButtonText: `Google`,
              //     buttonsStyling: true,
              //     denyButtonText: `Facebook`,
              //     confirmButtonColor: "green",
              //     denyButtonColor: "blue",
              //   }).then((result) => {
              //     if (result.isConfirmed) {
              //       //login with google
              //       signIn("google");
              //     } else if (result.isDenied) {
              //       //login with facebook
              //       signIn("facebook");
              //     }
              //   });
              // }}
            >
              SignIn
            </Button>
          ) : (
            <Button
              variant="link"
              className={styles.buttonLink}
              onClick={() => dispatch(userLogout(null))}
            >
              {/* {user && user} */}
              Sign Out
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
