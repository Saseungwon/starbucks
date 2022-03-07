#### 개행 문자 설정
~~~cmd
git config --global core.autocrlf input
~~~

#### 사용자 정보
~~~cmd
git config --global user.name 'NAME'
git config --global user.email 'EMAIL'
~~~

#### 구성 확인할
~~~cmd
git config --global --list
~~~

#### 현재 프로젝트에서 변경사항 추적(버전관리)를 시작
~~~cmd
git init
~~~

#### 변경사항을 추적할 특정 파일을 지정
~~~cmd
git add index.html
~~~

#### 모든 파일의 변경사항을 추적하도록 지정
~~~cmd
git add .
~~~

#### 메세지와 함께 버전을 생성
~~~
git commit -m '프로젝트 생성'
~~~

#### origin이라는 별칭으로 원경 저장소를 연결
~~~
git remote add origin https://github.com/Saseungwon/...
~~~

#### origin이란 별칭의 원격 저장소로 버전 내용 전송
~~~
git push origin master
~~~