const searchEl = document.querySelector('.search'); // 클래스가 search인 요소를 검색해서 그것을 searchEl에 담는다
// const searchInputEl = document.querySelector('.search input'); 
const searchInputEl = searchEl.querySelector('input'); // 위에 코드랑 똑같은 기능이지만 더 효율적임

searchEl.addEventListener('click', function(){
  searchInputEl.focus();  // searchEl를 클릭하면 searchInputEl를 focus하는 함수를 실행한다.
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused'); // searchEl를 가지고 있는 요소에 focused 를 추가하겠다. 
  searchInputEl.setAttribute('placeholder', '통합검색'); // html속성을 attribute라고 한다 -> setAttribute : searchInputEl에 어떤 html 속성을 지정한다.
}); 

searchInputEl.addEventListener('blur', function(){    // focus 반대개념 : blur(focus가 해제되면)
  searchEl.classList.remove('focused'); // searchEl를 가지고 있는 요소에 focused 를 삭제하겠다. 
  searchInputEl.setAttribute('placeholder', ''); // html속성을 attribute라고 한다 -> setAttribute : searchInputEl에 어떤 html 속성을 지정한다.
}); 



const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  // lodash  _.throttle(함수, 시간)
  console.log(window.scrollY);
  if(window.scrollY > 500) {  // scroll 위치가 500 보다 크면?
    // 배지 숨기기
        //gsap.to(요소, 지속시간, 옵션) - gsap 애니메니션 라이브러리 사용
        gsap.to(badgeEl, 0.6, {
          opacity: 0,
          display: 'none'   // 시각적으로뿐 아니라 실제로도 없어야 해서
        });
  } else{
    // 배지 보이기        
        gsap.to(badgeEl, 0.6, {
          opacity: 1,
          display: 'block' 
        });
  }
}, 300));



// 음료 사진 fade-in
const fadeEls = document.querySelectorAll('.visual .fade-in'); 
fadeEls.forEach(function(fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션) - gsap 애니메니션 라이브러리 사용
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  // 첫번째 사진 0.7초 뒤에, 두번째 사진 1.4초 뒤에, 세번째 사진 2.1초 뒤에
    opacity: 1
  });
});



// Slide
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {  // Swiper 라이브러리 함수 실행
  direction: 'vertical',
  autoplay: true,
  loop: true
}); 
