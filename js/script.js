const arrImg = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];
const eleCarousel = document.querySelector('.carousel');
const eleUp  = document.querySelector('.up');
const eleDown = document.querySelector('.down');

for (let i = 0; i < arrImg.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImg[i];
	eleImg.classList.add('carousel-img');
	if (i === 0) {
		eleImg.classList.add('show');
	}
   	eleCarousel.append(eleImg);
    
}
const listEleImg = document.querySelectorAll('.carousel-img'); 
let showIndex = 0;
eleUp.addEventListener('click', function () {
    if (showIndex = arrImg.length){
        showIndex-- 
    }
   	listEleImg[showIndex].classList.remove('show');
	showIndex ++;
	listEleImg[showIndex].classList.add('show');
	eleUp.classList.remove('hidden');
	if (showIndex === listEleImg.length - 1) {
		eleUp.classList.add('hidden');
	}
   
});

eleDown.addEventListener('click', function () {
    if (showIndex = arrImg.length){
         showIndex--
    }
	listEleImg[showIndex].classList.remove('show');
	showIndex--;
	listEleImg[showIndex].classList.add('show');
	eleDown.classList.remove('hidden');
	if (showIndex === listEleImg.length + 1) {
		eleDown.classList.add('hidden');
	}
    
    
});
