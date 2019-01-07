var pageModal = document.querySelector('.page-modal');
var buttonOrder = document.querySelector('.promo__button-order');
var modalSubmit = pageModal.querySelector('.page-modal__submit');
var videoButtonOrder = document.querySelector('.video-production__button-order');

function onModalOpen () {
  pageModal.classList.remove('page-modal--hidden');
};

function onModalClose () {
  pageModal.classList.add('page-modal--hidden');
};

buttonOrder.addEventListener('click', function () {
  pageModal.classList.remove('page-modal--hidden');
});

videoButtonOrder.addEventListener('click', function () {
  pageModal.classList.remove('page-modal--hidden');
});

modalSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();

  pageModal.classList.add('page-modal--hidden');
});
