const input = document.querySelector('.input');

const button = document.querySelector('#buttonDay1');
const answer = document.querySelector('#answer1');

const button2 = document.querySelector('#buttonDay2');
const answer2 = document.querySelector('#answer2');

button.addEventListener('click', (e)=>{
    e.preventDefault(); 
    answer.innerText = play(input.value.split(' ')) 
})

button2.addEventListener('click', (e)=>{
    e.preventDefault();
    answer2.innerText = newGame(input.value.split(' '));
})
const rules1 = ['A','B','C'];
const rules2 = ['X','Y','Z'];

const play = (string)=>{
  let i = 0;
  let score = 0;
  while(i < string.length){
    if(rules1.indexOf(string[i])-rules2.indexOf(string[i+1]) == 0){
      score += rules2.indexOf(string[i+1])+1+3
    }
    if((rules1.indexOf(string[i])-rules2.indexOf(string[i+1]) == 1) 
    || rules1.indexOf(string[i])-rules2.indexOf(string[i+1]) == -2){
      score += rules2.indexOf(string[i+1])+ 1
    } 
    if(rules1.indexOf(string[i])-rules2.indexOf(string[i+1]) == -1 
     ||rules1.indexOf(string[i])-rules2.indexOf(string[i+1]) == 2 ){
      score += rules2.indexOf(string[i+1])+1+6
    }
    i+=2;
  }
  return score;
}

const newRules = {
  'AX': 0 + 3,
  'AY': 3 + 1,
  'AZ': 6 + 2,
  'BX': 0 + 1,
  'BY': 3 + 2,
  'BZ': 6 + 3,
  'CX': 0 + 2,
  'CY': 3 + 3,
  'CZ': 6 + 1,
}
const newGame = (string)=>{
  let i = 0;
  let score = 0;
  while(i< string.length){
    let test = string[i]+string[i+1]+'';  
    score+=newRules[test];
    i+=2;
  }
  return score;
}

