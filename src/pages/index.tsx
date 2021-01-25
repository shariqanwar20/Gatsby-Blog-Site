import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Layout } from "../components/Layout";
import styles from "./home.module.css";

export default () => {
  return (
    <Layout>
      <div className={styles.backgroundContainer}>
        <Container fluid className={styles.contentContainer}>
          <Row>
            <Col xs={9}>
              <p className={styles.welcomeContainer}>Hello! Welcome to</p>
              <p className={styles.heading}>Gatsby Blogs.</p>
              <br />
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                assumenda aliquid adipisci ex nisi rerum delectus commodi
                quisquam cum quam iste quas odio quibusdam obcaecati quidem
                excepturi tenetur molestiae autem amet sequi quaerat eligendi,
                possimus repellat explicabo? Delectus, culpa repellendus?
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};
