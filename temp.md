- 프로젝트 명 : 기초 웹 앱의 기본 구조 익히기

- 제작 기간 : 22/10/20 ~ 10/31

- 사용 기술 : Javascript / Typescript

- 설명 : mealdb의 api를 통한 음식 검색 사이트, 자바스크립트를 통한 웹 앱의 기본 구조 익히기 / 타입스크립트로 리팩토링 해보기

- 주요 기능 : 음식 검색 / api 데이터 처리

- 사용한 기술 : parcel-bundler, sass

- 링크 : https://peppy-jelly-b3ec5f.netlify.app/

# javascript coding

- 라우트 함수 만들기
- 반복 코드 함수 묶어서 관리하기
- template을 통해 html 찍어내기
- 객체 데이터 관리 / 처리

# typescript migration coding

- 변수에 타입 지정
- 함수의 타입 가드
  - type alias , interface
  - 제네릭 : 받을 데이터의 유형이 계속 늘어날 경우, 입력유형도 n개 출력유형도 n개의 유형으로 만들어줄수있다.
- api 클래스화
- view 클래스화
- router 클래스화
- 클래스

  - private : 자기자신에서만 호출 가능 (자식에서도 접근 불가능)
  - protected : 자식도 접근 가능

- 파일 분리

  - core : 공통코드
  - page
  - types : interface
  - config.ts : 설정파일

- store

  - window 전역객체로 접근 가능하게 만드는 방법이 있지만, 모든곳에서 접근 가능한 전역공간이라 안전성이 좋지않음.

- 동기 / 비동기
  - 동기식, 코드 구조상에 맞게 순서대로 처리하지만 데이터를 불러오기전까지 UI가 업데이트되지 않거나 로드되는 동안 아예 멈춰있는 현상이 발생.
  - 비동기식
    - 콜백함수를 이용한 비동기, 콜백함수로 비동기식 구현, 하지만 불러와야하는 api가 많아지면 꼬리에 꼬리를 무는 콜백헬 현상 발생.
    - Xhr, Promise, async/await
