'use strict';

/**
 * Elementlere kolay ulaşmak için taa en baştan seçip tanımlama
 */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//selector all bütün classların olduğu bir array döndürür
const btnsOpenModal = document.querySelectorAll('.show-modal');




/**
 * Bu iki fonskiyon ile hidden class özelliklerini ekleyip çıkaracağız
 */
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


//modal butonlarına fonksiyon özelliklerini kazadırma
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//ekrana veya X işaretine basınca modal windowu kapatma
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


/**
 * burdaki e olayı biraz garip ama özetle:
 * e.key: klavyeden basılan tuşu elde etmeye yaradı
 * kullanıcı esc ye basınca pencere kapanıyopr
 */
document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
