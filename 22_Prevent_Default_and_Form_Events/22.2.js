const checkbox = document.querySelector('input');
const background = document.querySelector('.background')

checkbox.addEventListener('change', function(){
    this.checked ? background.classList.add('display') : background.classList.remove('display');
});