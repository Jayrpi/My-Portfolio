import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hello, There</p>
            <h3 className={styles.text_2}>Jirapron Inta</h3>
            <p className={styles.text_3}>I'm a full-stack developer</p>
            <p className={styles.text_4}>I am a developer Currently having a bachelor's degree University of Phayao
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/Jayrpi">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.hero_image}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;