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
