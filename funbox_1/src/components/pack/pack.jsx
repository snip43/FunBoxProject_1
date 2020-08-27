import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import styles from './pack.module.css';

import Footertext from '../footertext/footertext';
import PackInfo from '../packInfo/packinfo';
import PackBigImage from '../packBigImage';
import ImgWeight from '../imgWeight/imgWeight';
import FootertextDisable from '../footertext_disable';

class Pack extends Component {
  state = {
    isSelected: false,
    isHover: false,
  };

  getSelected = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  };
  getHover = () => {
    this.setState({
      isHover: !this.state.isHover,
    });
  };

  render() {
    const footerText = this.props.isDisable ? (
      <FootertextDisable text_under_pack={this.props.card_text_disable} />
    ) : (
      <Footertext text_under_pack={this.props.text_under_pack} />
    );

    return (
      <Router>
        <div className={styles.pack_full}>
          <div
            className={
              this.props.isDisable
                ? styles.disabled
                : this.state.isSelected
                ? styles.selected
                : this.state.isHover
                ? styles.hover
                : styles.pack
            }
            onClick={() => this.getSelected()}
            onMouseEnter={() => this.getHover()}
            onMouseLeave={() => this.getHover()}>
            <Link to="#">
              <PackInfo
                card_info_title={this.props.card_info_title}
                card_info_subtitle_top={this.props.card_info_subtitle_top}
                card_info_subtitle_bottom={this.props.card_info_subtitle_bottom}
                card_info_text={this.props.card_info_text}
              />
              <PackBigImage />
              <ImgWeight
                card_weight={this.props.card_weight}
                selected={this.state.isSelected}
                isHover={this.state.isHover}
                disabled={this.props.isDisable}
              />
            </Link>
          </div>
          {footerText}
        </div>
      </Router>
    );
  }
}

export default Pack;
