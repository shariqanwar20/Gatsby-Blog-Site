import React from "react";
import styles from "./footer.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className="fw-bold fs-6">&copy; 2020 - 2021</div>
      <div className={styles.iconsContainer}>
        <a href="#twitter">
          <TwitterIcon htmlColor="white" />
        </a>
        <a href="#github">
          <GitHubIcon htmlColor="white" />
        </a>
        <a href="#facebook">
          <FacebookIcon htmlColor="white" />
        </a>
      </div>
    </footer>
  );
};
