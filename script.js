'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay')
const btn=document.querySelector('.close-modal')
const btns=document.querySelectorAll('.show-modal')
//console.log(btns);


const openModal=function(){
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
const closeModal=function(){
modal.classList.add('hidden')
overlay.classList.add('hidden')
}


for(let i=0; i<btns.length; i++){
  btns[i].addEventListener('click', openModal)
  //  console.log('Btn clicked')
    // modal.classList.remove('hidden')
    // overlay.classList.remove('hidden')

// btn.addEventListener('click', function(){
//   modal.classList.add('hidden')
//   overlay.classList.add('hidden')
// })
// overlay.addEventListener('click', function(){
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// })
btn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

//global events are keyboard events, and we listen whole document
//big object and includes events
document.addEventListener('keydown', function(e){ //e stands for event
  console.log(e.key)
  if (e.key==='Escape' && !modal.classList.contains('hidden')){
    // if(!modal.classList.contains('hidden')){
    //   closeModal();
    // }
    closeModal()
  } 
}) 
}

