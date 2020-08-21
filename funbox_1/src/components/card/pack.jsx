import React from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import styles from './pack.module.css';

const Pack = () => {
  return (
    <div className={styles.pack}>
      <a href="#" className={styles.pack_link}>
        <div className={styles.card_info}>
          <div className={styles.card_info_subtitle_top}>Сказочное заморское яство</div>
          <div className={styles.card_info_title}>Нямушка</div>
          <div className={styles.card_info_subtitle_bottom}>с фуа-гра</div>
          <div className={styles.card_info_text}>10 порций мышь в подарок</div>
        </div>
        <div className={styles.card_image}></div>
        <div className={styles.card_weight}></div>
        <div className={styles.card_footer_text}></div>
      </a>
    </div>
    /* <Card className={styles.pack}>
      <CardSubtitle className={styles.card_subtitle_head}>Сказочное заморское яство</CardSubtitle>
      <CardTitle className={styles.card_title}>Нямушка</CardTitle>
      <CardSubtitle className={styles.card_subtitle_bottom}>с фуа-гра</CardSubtitle>
      <CardText className={styles.card_text}> 10 порций мышь в подарок</CardText>
    </Card> */
  );
};

export default Pack;
