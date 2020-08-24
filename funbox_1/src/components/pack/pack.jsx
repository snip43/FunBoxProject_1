import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import styles from './pack.module.css';

import Footertext from '../footertext/footertext';
import PackInfo from '../packInfo/packinfo';
import PackBigImage from '../packBigImage';
import ImgWeight from '../imgWeight/imgWeight';
import FootertextDisable from '../footertext_disable';

const Pack = (props) => {
  const FooterText = props.isDisable ? (
    <FootertextDisable text_under_pack={props.card_text_disable} />
  ) : (
    <Footertext text_under_pack={props.text_under_pack} />
  );

  return (
    <Router>
      <div className={styles.pack_full}>
        <div className={props.isDisable ? styles.disabled : styles.pack}>
          <Link to="#">
            <PackInfo
              card_info_title={props.card_info_title}
              card_info_subtitle_top={props.card_info_subtitle_top}
              card_info_subtitle_bottom={props.card_info_subtitle_bottom}
              card_info_text={props.card_info_text}
            />
            <PackBigImage />
            <ImgWeight card_weight={props.card_weight} />
          </Link>
        </div>
        {FooterText}
        {/* <Footertext text_under_pack={props.isDisable ? text : props.text_under_pack} /> */}
      </div>
    </Router>
  );
};

export default Pack;
