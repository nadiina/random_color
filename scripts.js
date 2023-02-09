const text = document.querySelector('.text');
const block = document.querySelector('.block');
const btm = document.querySelector('.btm');

const HEX = '0123456789ABCDEF';


const getRandomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += HEX[Math.floor(Math.random() * 16)];
    }
    return color;
}
btm.addEventListener('click', () => {
    const currentColor = getRandomColor();
    block.style.backgroundColor = currentColor;
    block.style.border = 'none';

    text.textContent = currentColor;

})

$(function(){
    $('a[href=""]').click(function(){
      // убать alert
      alert();
      return false;
    });
  });