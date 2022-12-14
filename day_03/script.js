const input = document.querySelector('.input');

const button = document.querySelector('#buttonDay1');
const answer = document.querySelector('#answer1');

const button2 = document.querySelector('#buttonDay2');
const answer2 = document.querySelector('#answer2');

button.addEventListener('click', (e)=>{
    e.preventDefault(); 
    answer.innerText = countScore(getString(input.value.split(' ')).split(''))
})

button2.addEventListener('click', (e)=>{
    e.preventDefault();   
    answer2.innerText = countScore(tripleCheck(input.value.split(' ')).split(''))
})
const rules1 = ['A','B','C'];
const rules2 = ['X','Y','Z'];

const lp = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getString = (string)=>{    
  let result = ''
  string.forEach(str=>{ 
    const s = str.split('')  
    let found = false; 
    for(let i = 0; i < s.length/2; i++){      
      let ew = s[i]
      for(let j = s.length/2; j < s.length; j++){           
        if(ew === s[j]){         
          result += ew;
          found = true; 
          break;                
        }
      }
      if(found){
        break;
      }
    }     
  })
  return result; 
}

const tripleCheck = (string)=>{
  let result = ''
  let s = 0;
  while(s < string.length){
    let found = false;
    let ew;
    for(let i =0; i < string[s].length; i++){
      for(let j = 0; j < string[s+1].length; j++){
        if(string[s][i] === string[s+1][j]){            
          for(let l = 0; l < string[s+2].length; l++){
            if(string[s][i]===string[s+2][l]){
              result += string[s][i];
              found = true;
              break;
            }
          }         
        }         
        if(found){
          break;
        }
      }
      if (found){
        break;
      }
    }
    s += 3;
  }
  return result;
}
const countScore = (string) =>{
    return (string.reduce((prev, str)=>{ 
      prev+=lp.indexOf(str) + 1;
      return prev;
  }, 0))
}