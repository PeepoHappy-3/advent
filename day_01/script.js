const input = document.querySelector('.input');

const button = document.querySelector('#buttonDay1');
const answer = document.querySelector('#answer1');

const button2 = document.querySelector('#buttonDay2');
const answer2 = document.querySelector('#answer2');

button.addEventListener('click', (e)=>{
    e.preventDefault(); 
    answer.innerText = (getMax(createArray(input.value)))   
})

button2.addEventListener('click', (e)=>{
    e.preventDefault();
    answer2.innerText = createArray(input.value).sort(compare)[0] + createArray(input.value).sort(compare)[1]  + createArray(input.value).sort(compare)[2];
})
function compare(a,b){
  return b - a
}
function createArray(string){
    return string.split('  ').map(a =>{
        return getSum(a.split(' '))
    })
}
function getSum(arr){
    return arr.reduce((sum, el)=> parseInt(parseInt(sum,10) + parseInt(el,10),10), 0
  )
}   
function getMax(arr){  
  return arr.reduce((prev, el)=>{
      return prev > el ? prev : el
  })
}
