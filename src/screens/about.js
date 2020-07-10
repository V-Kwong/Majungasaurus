import React, { Component } from 'react';
import styles from './about.module.css';
import { HoverButton } from '../components/hoverButton';


export default class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeButton: 'Overview'
    }
  }

  overviewClick = () => {
    if(this.state.activeButton === 'Cool Facts') {
      this.setState({ activeButton: 'Overview' })
    }
  }

  coolFactsClick = () => {
    if(this.state.activeButton === 'Overview') {
      this.setState({ activeButton: 'Cool Facts' })
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title">Allosaurus</h1>
          <div className={styles.aboutBtnContainer}>
            <HoverButton
              active={this.state.activeButton === 'Overview'}
              onClick={this.overviewClick}>
                Overview
            </HoverButton> 
            <div className={styles.aboutBtnDivider}>
              |
            </div>
            <HoverButton 
              active={this.state.activeButton === 'Cool Facts'}
              onClick={this.coolFactsClick}>
                Cool Facts
            </HoverButton>
          </div>
          <div className={this.state.activeButton === 'Overview' ? styles.showText : styles.hideText}>
            <p className="textLine">
              Allosaurus (/ˌæləˈsɔːrəs/[2][3]) is a genus of carnivorous theropod dinosaur that lived 155 to 145 million years ago during the late Jurassic period (Kimmeridgian to late Tithonian[4]). The name "Allosaurus" means "different lizard" alluding to its unique concave vertebrae (at the time of its discovery). It is derived from the Greek ἄλλος (allos) ("different, other") and σαῦρος (sauros) ("lizard / generic reptile"). 
            </p>
            <p className="textLine">
              The first fossil remains that could definitively be ascribed to this genus were described in 1877 by paleontologist Othniel Charles Marsh. As one of the first well-known theropod dinosaurs, it has long attracted attention outside of paleontological circles. 
            </p>
            <p className={[styles.textLine, styles.lastLine].join(' ')}>
              Allosaurus was a large bipedal predator. Its skull was large and equipped with dozens of sharp, serrated teeth.
            </p>
          </div>
          <div className={this.state.activeButton === 'Cool Facts' ? styles.showText : styles.hideText}>
            <p className="textLine">
            It averaged 9.5 metres (31 ft) in length, though fragmentary remains suggest it could have reached over 12 m (39 ft). Relative to the large and powerful hindlimbs, its three-fingered forelimbs were small, and the body was balanced by a long and heavily muscled tail. It is classified as an allosaurid, a type of carnosaurian theropod dinosaur. 
            </p>
            <p className="textLine">
            The genus has a complicated taxonomy, and includes 5-6 valid species (later whittled down to three valid species as of 2020), the best known of which is A. fragilis. The bulk of Allosaurus remains have come from North America's Morrison Formation, with material also known from Portugal. 
            </p>
            <p className={["textLine", styles.lastLine].join(' ')}>
            As the most abundant large predator in the Morrison Formation, Allosaurus was at the top of the food chain.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
