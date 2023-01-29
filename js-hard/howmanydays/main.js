let timer
const body = document.querySelector('body')
const text = document.createElement('h2')
body.appendChild(text)

const birthdayDoraemon = moment('2112-09-03 12:00') //.format('YYYY年 MM月 DD日 dddd HH:mm:ss');

const count = function () {
  const today = moment() //.format('YYYY年 MM月 DD日 dddd HH:mm:ss');
  const secondLeft = birthdayDoraemon.diff(today, 'second') % 60 //％60の元の単位は？？
  const minuteLeft = birthdayDoraemon.diff(today, 'minute') % 60 //元の単位は？？
  const hourLeft = birthdayDoraemon.diff(today, 'hour') % 24
  const dayLeft = birthdayDoraemon.diff(today, 'day')

  text.textContent = `ドラえもんが生まれるまで後 ${dayLeft}日 ${hourLeft}時間 ${minuteLeft}分 ${secondLeft}秒
`
}
count()

timer = setInterval('count()', 1000)
