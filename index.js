// modal
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.closeBtn');
var todayCloseBtn = document.querySelector('.todayCloseBtn');

function closeModal() {
  modal.style.display = 'none';
  document.body.classList.remove('stopScroll');
}

function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie =
    name + '=' + value + '; path=/; expires=' + todayDate.toUTCString() + ';';
}

function closeTodayModal() {
  setCookie('popUpToday', 'close', 1);
  closeModal();
}

closeBtn.addEventListener('click', closeModal);
todayCloseBtn.addEventListener('click', closeTodayModal);

window.onload = function () {
  if (document.cookie != 'popUpToday=close') {
    modal.style.display = 'block';
    document.body.classList.add('stopScroll');
  } else {
    return;
  }
};

// MEMO: nav - 해당 위치로 스크롤 이동
var selectMoveToVideo = document.querySelector('#toVideo');
var selectMoveToFlowerClass = document.querySelector('#toFlowerClass');

var toVideo = document.querySelector('.ytContainer');
var toFlowerClass = document.querySelector('.home_contents_class');

selectMoveToVideo.addEventListener('click', moveToVideo);
selectMoveToFlowerClass.addEventListener('click', moveToFlowerClass);

function moveToVideo() {
  toVideo.scrollIntoView({ behavior: 'smooth' });
}
function moveToFlowerClass() {
  toFlowerClass.scrollIntoView({ behavior: 'smooth' });
}

// MEMO: nav - sticky 효과
var nav = document.querySelector('.navSticky');
var navBackground = document.querySelector('.stickyBackground');
var rectTop = nav.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > rectTop) {
    nav.style.position = 'fixed';
    nav.style.top = 0;
    nav.style.height = '90px';
    nav.style.borderBottom = 'solid 2px #ffcd32';
    navBackground.style.position = 'fixed';
    navBackground.style.width = '100%';
    navBackground.style.height = '90px';
    navBackground.style.backgroundColor = 'white';
    navBackground.style.borderBottom = 'solid 2px #ffcd32';
    navBackground.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.position = 'fixed';
    nav.style.top = '80px';
    nav.style.border = 'none';
    navBackground.style = 'none';
  }
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
