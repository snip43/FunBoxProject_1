const state = {
  header_text: 'Ты сегодня покормил кота ?',
  packs: [
    {
      id: 1,
      card_imgCatSrc: '../../img/imgCat.svg',
      card_weight: '0,5',
      text_under_pack: `Чего сидишь? Порадуй котэ,купи`,
      card_text_disable: 'Печалька, с курой закончился.',
      info: {
        card_info_subtitle_top: 'Сказочное заморское яство',
        card_info_title: 'Нямушка',
        card_info_subtitle_bottom: 'с фуа-гра',
        card_info_text: '10 порций мышь в подарок',
      },
      isDisable: false,
    },
    {
      id: 2,
      card_imgCatSrc: '../../img/imgCat.svg',
      card_weight: '2',
      text_under_pack: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      card_text_disable: 'Печалька, с курой закончился.',
      info: {
        card_info_subtitle_top: 'Сказочное заморское яство',
        card_info_title: 'Нямушка',
        card_info_subtitle_bottom: 'с рыбой',
        card_info_text: '40 порций 2 мыши в подарок',
      },
      isDisable: false,
    },
    {
      id: 3,
      card_imgCatSrc: '../../img/imgCat.svg',
      card_weight: '5',
      text_under_pack: 'Чего сидишь? Порадуй котэ,купи',
      card_text_disable: 'Печалька, с курой закончился.',
      info: {
        card_info_subtitle_top: 'Сказочное заморское яство',
        card_info_title: 'Нямушка',
        card_info_subtitle_bottom: 'с курой',
        card_info_text: '100 порций 5 мышей в подарок заказчик доволен',
      },
      isDisable: true,
    },
  ],
};

export default state;
