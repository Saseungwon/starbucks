const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

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
    // 버튼 보이기
        gsap.to(toTopEl, .2, {
          x: 0
        });
  } else{
    // 배지 보이기        
        gsap.to(badgeEl, 0.6, {
          opacity: 1,
          display: 'block' 
        });
    // 버튼 숨기기!
        gsap.to(toTopEl, .2, {
          x: 100
        });
  }
}, 300));


// 맨위로
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0   // 0.7초 동안 맨위로 올려준다.
  });
});


// 음료 사진 fade-in
const fadeEls = document.querySelectorAll('.visual .fade-in'); 
fadeEls.forEach(function(fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션) - gsap 애니메니션 라이브러리 사용
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  // 첫번째 사진 0.7초 뒤에, 두번째 사진 1.4초 뒤에, 세번째 사진 2.1초 뒤에
    opacity: 1
  });
});



/**
 * 슬라이드 요소 관리
 */
 new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
});


/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHidePromotion = !isHidePromotion
  // 요소를 숨겨야 하면,
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  // 요소가 보여야 하면,
  } else {
    promotionEl.classList.remove('hide')
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 유튜브 영상에 떠있는 공 애니메이션
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션); https://greensock.com/docs/v3/GSAP/gsap.to()
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1,
      yoyo: true, 
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEls){
  new ScrollMagic
    .Scene({
      triggerElement: spyEls,  // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8          // 뷰포트 0.8 지점에 걸리면 어떠한 내용이 실행됨
    })          
    .setClassToggle(spyEls, 'show')
    .addTo(new ScrollMagic.Controller());         // 메소드 체이닝
});


