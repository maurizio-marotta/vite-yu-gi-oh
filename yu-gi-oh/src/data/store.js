import {reactive} from 'vue';

export const store = reactive({
  //apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  cardArray: [],
  cardNumber: 0,
  cardOffset: 0,
  typeMonsterArr: [],
  isLoad: true,
  optionType: null
});