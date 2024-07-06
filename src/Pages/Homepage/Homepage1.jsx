import React from "react";
import styles from "../../Styles/homepage.module.css";
import vector1 from "../../assets/Vector 1.png";
import group2 from "../../assets/Group (2).png";
import group3 from "../../assets/Group (3).png";
import group from "../../assets/Group.png";
import group21 from "../../assets/Group2.png";
import frame from "../../assets/Frame 20.png";
import paw from "../../assets/paw.png";
import bili from "../../assets/bili.png";
import black from "../../assets/blackdog.png";
import dekhna from "../../assets/dekhnadog.png";
import smart from "../../assets/smartdog.png";
import sona from "../../assets/sonadog.png";

const Homepage1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <img src={paw} />

        <div className={styles.textCont}>Taking Care For Your pets !</div>
        <div className={styles.dog}>
          <div className={styles.dog1}>
            <div>
              <img src={bili} className={styles.bili} alt="Frame" />
            </div>
            <div>
              <img src={sona} className={styles.sona} alt="Frame" />
            </div>
          </div>
          <div className={styles.dog2}>
            <div>
              <img src={black} className={styles.dogblack} alt="Frame" />
            </div>
            <div>
              <img src={dekhna} className={styles.dekhna} alt="Frame" />
            </div>
            <div>
            <img src={smart} className={styles.smartdog} alt="Frame" />
          </div>
          </div>
        </div>
      </div>

      <div className={styles.textimg}>
        <img src={frame} className={styles.textf} alt="Frame" />
        <img src={group3} className={styles.texg3} alt="Group 3" />
        <img src={group2} className={styles.textg2} alt="Group 2" />
      </div>
    </div>
  );
};

export default Homepage1;
