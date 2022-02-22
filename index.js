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

//FlowerClass
var FLOWER_CLASS_DATA = [
  {
    id: 0,
    name: '들꽃 화병꽂이(1/10~1/16)',
    imageUrl: '/images/FlowerClass1.jpg',
    price: '82000',
    showroom: [
      { id: 1, dataId: 398, engName: 'gwang', korName: '광화문점' },
      { id: 2, dataId: 399, engName: 'jam', korName: '잠실점' },
      { id: 3, dataId: 400, engName: 'wolgye', korName: '월계점' },
      { id: 4, dataId: 401, engName: 'guro', korName: '구로점' },
    ],
  },
  {
    id: 1,
    name: '오아시스 리스(2/21~2/27)',
    imageUrl: '/images/FlowerClass2.jpg',
    price: '79000',
    showroom: [
      { id: 1, dataId: 398, engName: 'gwang', korName: '광화문점' },
      { id: 2, dataId: 399, engName: 'jam', korName: '잠실점' },
      { id: 3, dataId: 400, engName: 'wolgye', korName: '월계점' },
      { id: 4, dataId: 401, engName: 'guro', korName: '구로점' },
      { id: 5, dataId: 402, engName: 'songpa', korName: '송파점' },
      { id: 6, dataId: 403, engName: 'dongrae', korName: '부산동래점' },
    ],
  },
  {
    id: 2,
    name: '클래식 핸드타이드(2/28~3/6)',
    imageUrl: '/images/FlowerClass3.jpg',
    price: '95000',
    showroom: [
      { id: 1, dataId: 399, engName: 'jam', korName: '잠실점' },
      { id: 2, dataId: 400, engName: 'wolgye', korName: '월계점' },
      { id: 3, dataId: 401, engName: 'guro', korName: '구로점' },
      { id: 4, dataId: 402, engName: 'songpa', korName: '송파점' },
      { id: 5, dataId: 403, engName: 'dongrae', korName: '부산동래점' },
    ],
  },
];

function formatingNumber(num) {
  const resultNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return resultNumber + '원';
}

var rightBtn = document.querySelector('.rightBtn');
var leftBtn = document.querySelector('.leftBtn');

var imgPc = document.querySelector('.img_pc');
var imgFirstAtag = document.querySelector(
  '.is_first .category_product_detail .detail .thumnail .link '
);
var imgFirstBg = document.querySelector(
  '.is_first .category_product_detail .detail dt.thumnail a.link span.image '
);
var imgSecondAtag = document.querySelector(
  '.is_second .category_product_detail .detail .thumnail .link '
);
var imgSecondBg = document.querySelector(
  '.is_second .category_product_detail .detail dt.thumnail a.link span.image '
);

var nameFirst = document.querySelector(
  '.is_first .category_product_detail .detail .summary .name_2 '
);
var nameSecond = document.querySelector(
  '.is_second .category_product_detail .detail .summary .name_2 '
);

var priceFirst = document.querySelector(
  '.is_first .category_product_detail .detail .summary .discount .price '
);
var priceSecond = document.querySelector(
  '.is_second .category_product_detail .detail .summary .discount .price '
);

var showRoomFirst = document.querySelector(
  '.is_first .category_product_detail .detail .summary .showroom '
);
var showRoomSecond = document.querySelector(
  '.is_second .category_product_detail .detail .summary .showroom '
);

var classLength = FLOWER_CLASS_DATA.length;
var classCount = 0;

function handleRightBtn() {
  if (classCount !== classLength - 1) {
    classCount += 1;
  } else {
    classCount = 0;
  }

  var eventClass = FLOWER_CLASS_DATA.filter(
    el => el.id === classCount % classLength
  );
  var specialClassFirst = FLOWER_CLASS_DATA.filter(
    el => el.id === (classCount + 1) % classLength
  );
  var specialClassSecond = FLOWER_CLASS_DATA.filter(
    el => el.id === (classCount + 2) % classLength
  );

  var showRoomFirstHtml = specialClassFirst[0].showroom.map(el => {
    return (
      '<a href="/" class="off ' +
      el.engName +
      '" data-offline="true" data-id="' +
      el.dataId +
      '">' +
      el.korName +
      '</a>'
    );
  });

  var showRoomSecondHtml = specialClassSecond[0].showroom.map(el => {
    return (
      '<a href="/" class="off ' +
      el.engName +
      '" data-offline="true" data-id="' +
      el.dataId +
      '">' +
      el.korName +
      '</a>'
    );
  });

  imgPc.src = 'http://127.0.0.1:5500' + eventClass[0].imageUrl;
  imgFirstAtag.style.backgroundImage =
    'url("..' + specialClassFirst[0].imageUrl + '")';
  imgFirstBg.style.backgroundImage =
    'url("..' + specialClassFirst[0].imageUrl + '")';
  imgSecondAtag.style.backgroundImage =
    'url("..' + specialClassSecond[0].imageUrl + '")';
  imgSecondBg.style.backgroundImage =
    'url("..' + specialClassSecond[0].imageUrl + '")';

  nameFirst.innerHTML = specialClassFirst[0].name;
  nameSecond.innerHTML = specialClassSecond[0].name;

  priceFirst.innerHTML = formatingNumber(specialClassFirst[0].price);
  priceSecond.innerHTML = formatingNumber(specialClassSecond[0].price);

  showRoomFirst.innerHTML = showRoomFirstHtml.toString().replaceAll(',', '');
  showRoomSecond.innerHTML = showRoomSecondHtml.toString().replaceAll(',', '');
}

function handleLeftBtn() {
  if (classCount !== 0) {
    classCount -= 1;
  } else {
    classCount = classLength - 1;
  }

  var eventClass = FLOWER_CLASS_DATA.filter(
    el => el.id === classCount % classLength
  );
  var specialClassFirst = FLOWER_CLASS_DATA.filter(
    el => el.id === (classCount + 1) % classLength
  );
  var specialClassSecond = FLOWER_CLASS_DATA.filter(
    el => el.id === (classCount + 2) % classLength
  );

  var showRoomFirstHtml = specialClassFirst[0].showroom.map(el => {
    return (
      '<a href="/" class="off ' +
      el.engName +
      '" data-offline="true" data-id="' +
      el.dataId +
      '">' +
      el.korName +
      '</a>'
    );
  });

  var showRoomSecondHtml = specialClassSecond[0].showroom.map(el => {
    return (
      '<a href="/" class="off ' +
      el.engName +
      '" data-offline="true" data-id="' +
      el.dataId +
      '">' +
      el.korName +
      '</a>'
    );
  });

  imgPc.src = 'http://127.0.0.1:5500' + eventClass[0].imageUrl;
  imgFirstAtag.style.backgroundImage =
    'url("..' + specialClassFirst[0].imageUrl + '")';
  imgFirstBg.style.backgroundImage =
    'url("..' + specialClassFirst[0].imageUrl + '")';
  imgSecondAtag.style.backgroundImage =
    'url("..' + specialClassSecond[0].imageUrl + '")';
  imgSecondBg.style.backgroundImage =
    'url("..' + specialClassSecond[0].imageUrl + '")';

  nameFirst.innerHTML = specialClassFirst[0].name;
  nameSecond.innerHTML = specialClassSecond[0].name;

  priceFirst.innerHTML = formatingNumber(specialClassFirst[0].price);
  priceSecond.innerHTML = formatingNumber(specialClassSecond[0].price);

  showRoomFirst.innerHTML = showRoomFirstHtml.toString().replaceAll(',', '');
  showRoomSecond.innerHTML = showRoomSecondHtml.toString().replaceAll(',', '');
}

rightBtn.addEventListener('click', handleRightBtn);
leftBtn.addEventListener('click', handleLeftBtn);

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

//carousel

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

var slideImages = ['../images/Banner1.png', '../images/Banner2.png'];

function startSlideShow() {
  if (slideIndex === 0) {
    document.getElementById('images').src = slideImages[slideIndex];
    slideBar[slideIndex].classList.add(YELLOW);
  }
}
startSlideShow();
// 오른쪽 버튼 눌렀을 때 사진 오른쪽으로 넘어가기
function slidingRight() {
  if (slideIndex < endIndex) {
    slideIndex++;
    document.getElementById('images').src = slideImages[slideIndex];
  }
  if (slideIndex === endIndex) {
    slideIndex = 0;
    document.getElementById('images').src = slideImages[slideIndex];
  }
  coloringSlideBarRight();
}
rightButton.addEventListener('click', slidingRight);
// 왼쪽 버튼 눌렀을 때 사진 왼쪽으로 넘어가기
function slidingLeft() {
  if (slideIndex >= 0) {
    slideIndex--;
    document.getElementById('images').src = slideImages[slideIndex];
  }
  if (slideIndex < 0) {
    slideIndex = endIndex - 1;
    document.getElementById('images').src = slideImages[slideIndex];
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
      document.getElementById('images').src = slideImages[slideIndex];
    }
  });
}

// slideStoryTitle.textContent = '꾸까 브랜드 이야기';
// slideStoryDes.textContent =
//   '꽃으로 라이브스타일을 만들어가는 \n kukka의 문화를 소개해요.';
