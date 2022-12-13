const dogg= document.getElementById('dogimg')
const dogbutton=document.getElementById('DOGBUTTON')

const getNewDog= () =>{
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {console.log(json.message)
  dogg.innerHTML= `<img src='${json.message}' height=450 width=450/>`})
}


dogbutton.onclick = () => getNewDog()