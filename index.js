const countryList = document.getElementById('answer')
const countryListS = document.getElementById('answer_2')
const countryListC = document.getElementById('answer_3')
const countryListL = document.getElementById('answer_4')
const countryListLP = document.getElementById('answer_5')




let totalScore=0;

function addCountry(countryName){
  if(countryName === 'Sweden'){
    ++totalScore

    const newP = document.createElement('p')
     newP.innerText = 'Yes! Sweden is correct!-over 220,000'
     countryList.appendChild(newP)

  }else{
    const newP = document.createElement('p')
     newP.innerText = 'Incorrect!'
     countryList.appendChild(newP)
}
}

function addSCountry(countryName){
  if(countryName === 'The Vatican'){
    ++totalScore

    const newP = document.createElement('p')
     newP.innerText = 'Yes! The Vatican is correct!'
     countryListS.appendChild(newP)

  }else{
    const newP = document.createElement('p')
     newP.innerText = 'Incorrect!'
     countryListS.appendChild(newP)
}
}

function addCCountry(countryName){
  if(countryName === 'Ottawa'){
    ++totalScore

    const newP = document.createElement('p')
     newP.innerText = 'Yes! Ottawa is correct!'
     countryListC.appendChild(newP)

  }else{
    const newP = document.createElement('p')
     newP.innerText = 'Incorrect!'
     countryListC.appendChild(newP)
}
}

function addLCountry(countryName){
  if(countryName === 'The Andes'){
    ++totalScore

    const newP = document.createElement('p')
     newP.innerText = 'Yes! The Andes is correct!– 7000km long; 6962m high'
     countryListL.appendChild(newP)

  }else{
    const newP = document.createElement('p')
     newP.innerText = 'Incorrect!'
     countryListL.appendChild(newP)
}
}

function addLPCountry(countryName){
  if(countryName === 'The Mariana Trench'){
    ++totalScore

    const newP = document.createElement('p')
     newP.innerText = 'Yes! The Mariana Trench is correct!– 11,034m'
     countryListLP.appendChild(newP)

  }else{
    const newP = document.createElement('p')
     newP.innerText = 'Incorrect!'
     countryListLP.appendChild(newP)
}
}

function myScore() {
  document.getElementById("demo").innerHTML = `${totalScore}`;
}




