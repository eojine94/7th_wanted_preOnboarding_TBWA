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
var nav = document.querySelector('.navBar');
var rectTop = nav.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > rectTop) {
    nav.classList.add('fixedNav');
  } else {
    nav.classList.remove('fixedNav');
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
