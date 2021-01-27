README.md  

App  
┠── ad.html "저점에서 사서 고점에서 팔기" 홍보 html  
└── ad.css: "저점에서 사서 고점에서 팔기" 홍보 css  
└── ad-script.js: "저점에서 사서 고점에서 팔기" 홍보 js  

┠── company.html 회사 소개  
┠── contact7.html 지원 커뮤니티 | 게시판, FAQ, 연락  
│ └──board_read.html 지원 커뮤니티 | 게시판> 게시물 읽기  
│
┠── example.html 플랫폼 사용법: 백엔드에서 로그인 시 기존 DB 주소, 로그인이 안 되어 있을 시에 회원가입으로 넘어가게끔 script.js에서 구현 필요  
┠── index.html 홈(첫 화면)  
┠── join.html 가입하기  
│ └── findpwd.html 비밀번호 찾기  
│
┠── pros-3.html EGLEO DB 플랫폼  
┠── service.html 서비스 소개  
┠── subscribe6.html 상품안내: 백엔드에서 로그인 시 "구독하기 버튼", 로그인이 안 되어 있을 시에 가입하기 버튼 뜨게 구현 필요  
┠── stocking.html 스톡킹 서비스 소개  
┠── tailor8.html 테일러 서비스 소개   
┠── script.js: 리뉴얼용으로 커스터마이즈한 js  
┠── style.css: 리뉴얼에 필요한 이글레오 맞춤형 css  

/partials 모든 페이지에 공통으로 쓰이는 코드. 프레임웍에서 재 사용 추천.  
┠── head:백엔드에 동일하게 적용 가능할 것으로 예상. 기존 css 디렉토리 포함해 놨음 : 카카오톡 공유 썸네일 정보를 바꿀 수 있음  
┠── footer 리뉴얼에 필요한 js만 있음. 기존 script는 필요에따라 embed할 것  
┠── header.html 메뉴바  
