#### 1. BEM(Block Element Modifier)
- HTML 클래스 속성의 작명법
  - 요소__일부분 : Underscore 기호로 요소의 일부분을 표시
  - 요소--상태 : Hyphen 기호로 요소의 상태를 표시

<br>

1. 요소__일부분

    - 중복될 수 있는 상태
      ~~~js
      <div class="container">
        <div class="name"></div>      // name
        <div class="item">
          <div class="name"></div>    // name
        </div>
      </div>
      ~~~

    - BEM 으로 중복 안 되도록 방지 **(요소의 일부분)**
      ~~~js
      <div class="container">
        <div class="container__name"></div> // container__name
        <div class="item">
          <div class="item__name"></div>    // item__name
        </div>
      </div>
      ~~~

  <br>

2. 요소--상태

    - 중복될 수 있는 상태
      ~~~js
      <div class="btn primary"></div>
      <div class="btn success"></div>
      <div class="btn error"></div>
      ~~~

    - BEM 으로 중복 안 되도록 방지 **(요소의 상태)**
      ~~~js
      <div class="btn btn--primary"></div>
      <div class="btn btn--success"></div>
      <div class="btn btn--error"></div>
      ~~~


