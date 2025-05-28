// adding text over the image banner with hover

const imgBanner1 = document.querySelector('.img-banner-container-one');
const imgBanner2 = document.querySelector('.img-banner-container-two');
const imgBanner3 = document.querySelector('.img-banner-container-three');

const imgTxt1 = document.querySelector('.img-banner-txt-one');
const imgTxt2 = document.querySelector('.img-banner-txt-two');
const imgTxt3 = document.querySelector('.img-banner-txt-three');

imgBanner1.addEventListener('mouseover', ()=> {
  imgTxt1.classList.add('img-banner-txt-appear');
});
imgBanner2.addEventListener('mouseover', ()=> {
  imgTxt2.classList.add('img-banner-txt-appear');
});
imgBanner3.addEventListener('mouseover', ()=> {
  imgTxt3.classList.add('img-banner-txt-appear');
});

imgBanner1.addEventListener('mouseout', ()=> {
  imgTxt1.classList.remove('img-banner-txt-appear');
});
imgBanner2.addEventListener('mouseout', ()=> {
  imgTxt2.classList.remove('img-banner-txt-appear');
});
imgBanner3.addEventListener('mouseout', ()=> {
  imgTxt3.classList.remove('img-banner-txt-appear');
});