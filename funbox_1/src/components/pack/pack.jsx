import React from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import styles from './pack.module.css';
import cardBackImg from '../../img/CardBack.svg';
import imgCat from '../../img/imgCat.svg';
import Footertext from '../footertext/footertext';

const Pack = () => {
  return (
    <div className={styles.card_full}>
      <div className={styles.pack}>
        <a href="#" className={styles.pack_link}>
          {/* <img src={cardBackImg} alt="CardImg" /> */}
          <div className={styles.card_info}>
            <div className={styles.card_info_subtitle_top}>Сказочное заморское яство</div>
            <div className={styles.card_info_title}>Нямушка</div>
            <div className={styles.card_info_subtitle_bottom}>с фуа-гра</div>
            <div className={styles.card_info_text}>10 порций мышь в подарок</div>
          </div>
          <div className={styles.card_image}></div>
          <div className={styles.card_weight}></div>
          <div className={styles.card_footer_text}></div>
          <div className={styles.card_imgCat}></div>
          <div className={styles.card_imgWeight}>
            <div className={styles.card_imgWeight_content}>
              <span className={styles.card_value_weight}>0,5</span>
              <span className={styles.card_value_text}> кг</span>
            </div>
          </div>
        </a>
      </div>
      <Footertext />
    </div>
  );
};

export default Pack;
