const btns = document.querySelectorAll('.button');
// console.log(btns)
const body = document.querySelector('body');

btns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    if (event.target.id == 'grey') body.style.backgroundColor = event.target.id;
    if(event.target.id == 'yellow') body.style.backgroundColor = event.target.id;
    if(event.target.id == 'blue') body.style.backgroundColor = event.target.id;
    if(event.target.id == 'white') body.style.backgroundColor = event.target.id;
  });
});
