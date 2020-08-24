import React from 'react';
import styles from './packs.module.css';
import Pack from '../pack/pack';

const Packs = ({ packs }) => {
  const packItems = packs.map((elem) => (
    <Pack
      key={elem.id}
      id={elem.id}
      card_imgCatSrc={elem.card_imgCatSrc}
      card_info_title={elem.info.card_info_title}
      card_info_subtitle_top={elem.info.card_info_subtitle_top}
      card_info_subtitle_bottom={elem.info.card_info_subtitle_bottom}
      card_info_text={elem.info.card_info_text}
      card_weight={elem.card_weight}
      text_under_pack={elem.text_under_pack}
      isDisable={elem.isDisable}
      card_text_disable={elem.card_text_disable}
    />
  ));
  return <div className={styles.packs}>{packItems}</div>;
};

export default Packs;
