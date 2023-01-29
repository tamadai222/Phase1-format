let timer2
const searchBtn = document.getElementById('dateSearch');
const leftDate = document.getElementById('diffTime');
// 検索した日付を変数setTimeに入れることで、searchBtnクリックした時と、count2 functionの両方で使える。
const setTime = document.getElementById('dateSet');

// 検索ボタン押したときの関数
searchBtn.addEventListener('click', function () {
  if (setTime.value === '') { //空欄の時アラート
    alert('日付を入力してください。')
    return;
  } else {
    timer2 = setInterval('count2()', 1000)
  };
});

// 今日と指定日までの日数を換算する関数
const count2 = function () {
  const dateText = setTime.value; //カレンダーの日付を取得
  const dateMoment = moment(dateText);
  const today = moment() //現在の日付

  const dayLeft = dateMoment.diff(today, 'days');
  const hourLeft = dateMoment.diff(today, 'hour') % 24;
  const minuteLeft = dateMoment.diff(today, 'minute') % 60;
  const secondLeft = dateMoment.diff(today, 'second') % 60;

  leftDate.textContent = `${dateText} まであと ${dayLeft}日 ${hourLeft}時間 ${minuteLeft}分 ${secondLeft}秒`;

};


/* js.moment diffの使い方（参照：https://cpoint-lab.co.jp/article/202108/20776/）

const dateFrom = moment('比較したい日付（過去）');
const today = moment();  // 今日の日付
const elapsedDate = dataFrom.diff(today, 'days');
           = 比較する日付.diff(現在, '単位');
*/
