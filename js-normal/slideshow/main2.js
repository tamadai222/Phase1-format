
const spring = { img: './img/slide1.png', text: '春へ' }
const summer = { img: './img/slide2.png', text: '夏' }
const autumn = { img: './img/slide3.png', text: '秋へ' }
const winter = { img: './img/slide4.png', text: '冬へ' }

const data = [
  { img: './img/slide1.png', text: '春へ' },
  { img: './img/slide2.png', text: '夏へ' },
  { img: './img/slide3.png', text: '秋へ' },
  { img: './img/slide4.png', text: '冬へ' }
]

let imgNum = 0

const pushBtn = document.getElementById("pushBtn")
const viewImg = document.getElementById("viewImg")
pushBtn.textContent = data[imgNum].text
viewImg.setAttribute('src', data[imgNum].img)

pushBtn.addEventListener('click', function(){
  if (imgNum === 3){
    imgNum = 0;
  }else {
    imgNum += 1;
  }
  pushBtn.textContent = data[imgNum].text
  viewImg.setAttribute('src', data[imgNum].img)
})



const skipBtn = document.getElementById("skipBtn")
// let skipNum = 0

skipBtn.addEventListener('click', function(){
  const seasonNum = document.getElementById("seasonNum").value

  imgNum = seasonNum

  pushBtn.textContent = data[imgNum].text
  viewImg.setAttribute('src', data[imgNum].img)
})
