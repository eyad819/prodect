document.body.classList.add(localStorage.getItem('colorpage' ||'red'))


var le = document.querySelectorAll('.color-switcher li');
var classlist = [];
//loop
for (let i = 0; i < le.length; i++){
  classlist.push(le[i].getAttribute('data-color'))

le[i].addEventListener('click', function () {
  document.body.classList.remove(...classlist);
  document.body.classList.add(this.getAttribute('data-color'));
  localStorage.setItem('colorpage',
    this.getAttribute('data-color'))
})



}



console.log(classlist)