const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const close = document.querySelector('.close');

registerLink.addEventListener('click', () => { wrapper.classList.add('active'); });
loginLink.addEventListener('click', () => { wrapper.classList.remove('active'); });
btnPopup.addEventListener('click', () => { wrapper.classList.add('active-popup'); });
close.addEventListener('click', () => { wrapper.classList.remove('active-popup'); });



let loadMoreBtn = document.querySelector('.load-more');
let currentItem = 3;

loadMoreBtn.onclick = () => {
   let boxes = [...document.querySelectorAll('.container .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++) {
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = 'none';
   }
}
