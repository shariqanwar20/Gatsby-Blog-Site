import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import styles from "./blogs.module.css";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Swal from "sweetalert2";
import firebase from "gatsby-plugin-firebase";

// import {
//   auth,
//   googleProvider,
//   facebookProvider,
// } from "../components/features/signIn";
import { useDispatch, useSelector } from "react-redux";
import { userData, userLogin } from "../components/store";

export default () => {
  const dispatch = useDispatch();
  const user = useSelector(userData);

  const signIn = (value: string) => {
    const auth = firebase.auth();
    if (value === "google") {
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(googleProvider)
        .then((result) => {
          if (result.user !== undefined && result.user !== null) {
            const user = result.user.displayName;
            console.log(user);

            dispatch(userLogin(user));
          }
        })
        .catch((err) => {
          alert(err);
        });
    } else if (value === "facebook") {
      const facebookProvider = new firebase.auth.FacebookAuthProvider();
      auth
        .signInWithPopup(facebookProvider)
        .then((result) => {
          if (result.user !== undefined && result.user !== null) {
            const user = result.user.displayName;
            console.log(user);

            dispatch(userLogin(user));
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            slug
            title
            publishedDate(formatString: "Do MMMM, YYYY")
            excerpt {
              childrenMarkdownRemark {
                excerpt(pruneLength: 150)
                timeToRead
              }
            }
            featuredImage {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div className={styles.blogsContainer}>
        <Container fluid>
          {data.allContentfulBlog.edges.map((edge) => {
            return (
              <Row key={edge.node.id} style={{ marginBottom: "10px" }}>
                <Col md className={styles.image}>
                  {/* image of the blog */}
                  <img
                    src={edge.node.featuredImage.fluid.src}
                    alt={edge.node.title}
                    width="100%"
                    height="auto"
                  />
                </Col>
                <Col md>
                  {/* title and published date */}
                  <h3>{edge.node.title}</h3>
                  <p style={{ fontSize: "15px" }}>
                    {edge.node.publishedDate} |{" "}
                    <AccessTimeIcon fontSize="small" />{" "}
                    {edge.node.excerpt.childrenMarkdownRemark[0].timeToRead}{" "}
                    {" min read"}
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    {edge.node.excerpt.childrenMarkdownRemark[0].excerpt}
                  </p>
                  <br />
                  {user === "" ? (
                    <Button
                      variant="dark"
                      onClick={() => {
                        Swal.fire({
                          title: "Choose Login Method",
                          showDenyButton: true,
                          showConfirmButton: true,
                          confirmButtonText: `Google`,
                          buttonsStyling: true,
                          denyButtonText: `Facebook`,
                          confirmButtonColor: "green",
                          denyButtonColor: "blue",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            //login with google
                            signIn("google");
                          } else if (result.isDenied) {
                            //login with facebook
                            signIn("facebook");
                          }
                        });
                      }}
                    >
                      Sign In to Read More
                    </Button>
                  ) : (
                    <Link to={`/blogs/${edge.node.slug}`}>
                      <Button variant="dark">Read More</Button>
                    </Link>
                  )}
                </Col>
              </Row>
            );
          })}
        </Container>
      </div>
    </Layout>
  );
};
