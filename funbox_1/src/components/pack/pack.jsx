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
    const {
      card_info_title,
      card_info_subtitle_top,
      card_info_subtitle_bottom,
      card_info_text,
      card_text_disable,
      text_under_pack,
      isDisable,
      card_weight,
    } = this.props;

    const { isSelected, isHover } = this.state;

    let footerText = isDisable ? (
      <FootertextDisable text_under_pack={card_text_disable} />
    ) : (
      <Footertext text_under_pack={text_under_pack} />
    );

    return (
      <Router>
        <div className={styles.pack_full}>
          <div
            className={
              isDisable
                ? styles.disabled
                : isSelected
                ? styles.selected
                : isHover
                ? styles.hover
                : styles.pack
            }
            onClick={() => this.getSelected()}
            onMouseEnter={() => this.getHover()}
            onMouseLeave={() => this.getHover()}>
            <Link to="#">
              <PackInfo
                card_info_title={card_info_title}
                card_info_subtitle_top={card_info_subtitle_top}
                card_info_subtitle_bottom={card_info_subtitle_bottom}
                card_info_text={card_info_text}
              />
              <PackBigImage />
              <ImgWeight
                card_weight={card_weight}
                selected={isSelected}
                isHover={isHover}
                disabled={isDisable}
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
