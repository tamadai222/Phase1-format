const word1 ="ぺっぺー"
const word2 = "斉藤さんだぞ？"

const setBtn2 = function(){
  const foo = Math.random() * 10
  if(foo < 5){
    const result = window.confirm(word1)
    if (result){
      alert(word1)
    }else{
      alert(word2)
    }
  }else{
    const result = window.confirm(word2)
    if(result){
      alert(word2)
    }else{
      alert(word1)
    }
  }

}
