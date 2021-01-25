// import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Layout } from "../Layout";
import { graphql, Link, useStaticQuery } from "gatsby";

export default ({ pageContext }) => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col xs={9} style={{ margin: "0 auto" }}>
            {/* image, title, body */}
            <img
              src={pageContext.data.featuredImage.fluid.src}
              alt={pageContext.data.title}
              style={{ width: "100%" }}
            />
            <h3>{pageContext.data.title}</h3>
            <>
              {documentToReactComponents(JSON.parse(pageContext.data.body.raw))}
              {pageContext.data.body.references.length !== 0 ? (
                <img
                  src={pageContext.data.body.references[0].fluid.src}
                  alt={pageContext.data.title}
                />
              ) : (
                console.log("No image")
              )}
            </>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Link to="/blogs">
            <Button variant="dark">Back To Blogs</Button>
          </Link>
        </Row>
        <br />
      </Container>
    </Layout>
  );
};
