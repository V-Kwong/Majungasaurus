import React, { Component } from 'react';
import styles from './about.module.css';

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <div className={styles.topContainer}>
          <img src={Logo} className={styles.logo} alt=""/>
          <h1 className={styles.text}>
              Majungasaurus
          </h1>
          </div>
          <div className={styles.bottomContainer}>
          <p className={styles.slogan}>
              Challenge <span className={styles.sloganHighlight}>Natural Selection</span>
          </p>
          <div className={styles.line} />
        </div> */}
        <div className={styles.textContainer}>
          <h1 style={{ color: 'white' }}>Allosaurus</h1>
          <p style={{ marginBottom: 0, color: 'white', lineHeight: 2 }}>
            Allosaurus (/ˌæləˈsɔːrəs/[2][3]) is a genus of carnivorous theropod dinosaur that lived 155 to 145 million years ago during the late Jurassic period (Kimmeridgian to late Tithonian[4]). The name "Allosaurus" means "different lizard" alluding to its unique concave vertebrae (at the time of its discovery). It is derived from the Greek ἄλλος (allos) ("different, other") and σαῦρος (sauros) ("lizard / generic reptile"). 
          </p>
          <p style={{ marginBottom: 0, color: 'white', lineHeight: 2 }}>
            The first fossil remains that could definitively be ascribed to this genus were described in 1877 by paleontologist Othniel Charles Marsh. As one of the first well-known theropod dinosaurs, it has long attracted attention outside of paleontological circles. 
          </p>
          <p style={{ marginBottom: 0, color: 'white', lineHeight: 2 }}>
            Allosaurus was a large bipedal predator. Its skull was large and equipped with dozens of sharp, serrated teeth.
          </p>
        </div>
      </div>
    )
  }
}
