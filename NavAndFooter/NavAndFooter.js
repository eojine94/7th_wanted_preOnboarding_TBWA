// MEMO: nav - 해당 위치로 스크롤 이동
var selectMoveToVideo = document.querySelector('#toVideo');
var selectMoveToFlowerClass = document.querySelector('#toFlowerClass');

var test1 = document.querySelector('.test1');
var test2 = document.querySelector('.test2');

selectMoveToVideo.addEventListener('click', moveToVideo);
selectMoveToFlowerClass.addEventListener('click', moveToFlowerClass);

function moveToVideo() {
  test1.scrollIntoView({ behavior: 'smooth' });
}
function moveToFlowerClass() {
  test2.scrollIntoView({ behavior: 'smooth' });
}

// MEMO: nav - sticky 효과
// .navBarList
// .navStatic
var nav = document.querySelector('.navSticky');
var navBackground = document.querySelector('.stickyBackground');
/* const tmp = nav.cloneNode(true); */
/* tmp.style.visibility = 'hidden'; */
var rectTop = nav.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > rectTop) {
    /* nav.parentNode.appendChild(tmp); */
    nav.style.position = 'fixed';
    /* nav.style.top = 0; */
    nav.style.top = 0;
    // nav.style.paddingTop = '20px';
    nav.style.height = '90px';
    nav.style.borderBottom = 'solid 2px #ffcd32';
    navBackground.style.position = 'fixed';
    navBackground.style.width = '100%';
    navBackground.style.height = '90px';
    navBackground.style.backgroundColor = 'white';
    navBackground.style.borderBottom = 'solid 2px #ffcd32';
    navBackground.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    /* nav.parentNode.appendChild(tmp); */
    nav.style.position = 'fixed';
    nav.style.top = '87px';
    nav.style.border = 'none';
    navBackground.style = 'none';
  }
  // else {
  //   /* nav.parentNode.appendChild(tmp); */
  //   nav.style.position = 'static';
  //   /* nav.style.top = ''; */
  // }
});

// MEMO: footer - 새창으로 열기
var facebookUrl = document.querySelector('.facebookUrl');
var instaUrl = document.querySelector('.instaUrl');
var youtubeUrl = document.querySelector('.youtubeUrl');

facebookUrl.addEventListener('click', moveToFacebook);
instaUrl.addEventListener('click', moveToInsta);
youtubeUrl.addEventListener('click', moveToYoutube);

function moveToFacebook() {
  newPage = window.open('https://ko-kr.facebook.com/kukka.kr/');
}
function moveToInsta() {
  newPage = window.open('https://www.instagram.com/kukkakorea/');
}
function moveToYoutube() {
  newPage = window.open(
    'https://www.youtube.com/channel/UC_zQakXCUPvjcfsU067zyCQ?view_as=subscriber'
  );
}
