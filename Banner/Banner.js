var rightButton = document.querySelector('.btn_right');
var leftButton = document.querySelector('.btn_left');

var slideBar = document.querySelectorAll('.slide');
var slideStoryTitle = document.querySelector('.slide_story_title');
var slideStoryDes = document.querySelector('.slide_story_des');

var HIDDEN_CLASS = 'hidden';
var YELLOW = 'yellow';
var TRANSPARENT = 'transparent';

var endIndex = 2;
var slideIndex = 0;

var slideImages = ['./images/Banner1.png', './images/Banner2.png'];

function startSlideShow() {
  if (slideIndex === 0) {
    document.getElementById('slide_images').src = slideImages[slideIndex];
    slideBar[slideIndex].classList.add(YELLOW);
  }
}
startSlideShow();
// 오른쪽 버튼 눌렀을 때 사진 오른쪽으로 넘어가기
function slidingRight() {
  if (slideIndex < endIndex) {
    slideIndex++;
    document.getElementById('slide_images').src = slideImages[slideIndex];
  }
  if (slideIndex === endIndex) {
    slideIndex = 0;
    document.getElementById('slide_images').src = slideImages[slideIndex];
  }
  coloringSlideBarRight();
}
rightButton.addEventListener('click', slidingRight);
// 왼쪽 버튼 눌렀을 때 사진 왼쪽으로 넘어가기
function slidingLeft() {
  if (slideIndex >= 0) {
    slideIndex--;
    document.getElementById('slide_images').src = slideImages[slideIndex];
  }
  if (slideIndex < 0) {
    slideIndex = endIndex - 1;
    document.getElementById('slide_images').src = slideImages[slideIndex];
  }

  coloringSlideBarLeft();
}
leftButton.addEventListener('click', slidingLeft);
// 오른쪽으로 사진 넘어갈때 마다 해당 순번의 슬라이드 바에 색상 넣어주기
function coloringSlideBarRight() {
  for (var j = 0; j < endIndex; j++) {
    if (slideIndex < endIndex && slideIndex !== 0) {
      slideBar[slideIndex].classList.add(YELLOW);
      slideBar[slideIndex - 1].classList.remove(YELLOW);
    } else if (slideIndex === 0) {
      slideBar[slideIndex].classList.add(YELLOW);
      slideBar[slideBar.length - 1].classList.remove(YELLOW);
    }
  }
}
// 왼쪽으로 사진 넘어갈때 마다 해당 순번의 슬라이드 바에 색상 넣어주기
function coloringSlideBarLeft() {
  for (var j = 0; j < endIndex; j++) {
    if (
      slideIndex < endIndex &&
      slideIndex !== 0 &&
      slideIndex !== endIndex - 1
    ) {
      slideBar[slideIndex].classList.add(YELLOW);
      slideBar[slideIndex + 1].classList.remove(YELLOW);
    } else if (slideIndex === 0 && slideIndex !== endIndex - 1) {
      slideBar[slideIndex].classList.add(YELLOW);
      slideBar[slideIndex + 1].classList.remove(YELLOW);
    } else if (slideIndex === endIndex - 1) {
      slideBar[0].classList.remove(YELLOW);
      slideBar[slideIndex].classList.add(YELLOW);
    }
  }
}
// 화살표 버튼 말고 슬라이드 바 눌렀을 때 해당 순번의 이미지 보이게 하기 & 슬라이드 바에 색상 넣어주기
for (let k = 0; k < endIndex; k++) {
  slideBar[k].addEventListener('click', function () {
    var markingSlideBar = document.querySelector('.yellow');
    slideIndex = k;
    this.classList.add(YELLOW);

    if (markingSlideBar) {
      markingSlideBar.classList.remove(YELLOW);
      document.getElementById('slide_images').src = slideImages[slideIndex];
    }
  });
}

// slideStoryTitle.textContent = '꾸까 브랜드 이야기';
// slideStoryDes.textContent =
//   '꽃으로 라이브스타일을 만들어가는 \n kukka의 문화를 소개해요.';
