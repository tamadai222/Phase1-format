const buttonClass = document.getElementsByClassName('add-btn');

buttonClass[0].addEventListener('click', function () {
  addElement();
  delElement();
});

const addElement = function () {
  const listText = document.getElementById('add-area');
  const text = document.createTextNode(listText.value);

  // チャレンジ問題

  if (listText.value === '') {
    alert('空です！');
    return;
  }

  // チャレンジ問題 ここまで

  const li = document.createElement('li');
  li.appendChild(text);

  // li要素に完了ボタンを追加
  const trash = document.createElement('button');
  trash.classList.add('trash');
  trash.innerHTML = '完了';
  li.appendChild(trash);

  const lists = document.getElementById('todo');
  lists.appendChild(li);

  // チャレンジ問題
  listText.value = '';
  // チャレンジ問題 ここまで
};

// todoリスト内の削除ボタン
const delElement = function () {
  const trash = document.getElementsByClassName('trash');
  // クリックしたliタグの配列数を取得
  for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener('click', function () {
      // thisはtrash[i]にあたる
      const li = this.parentNode;
      li.remove();
    });
  }
};
