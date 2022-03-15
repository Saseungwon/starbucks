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




// FOOTER 연도 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();    //  getFullYear : 2021
    // textContent : 값을 지정하거나 글자 내용들의 값을 알아내줌
