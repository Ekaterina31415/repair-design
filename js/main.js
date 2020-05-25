$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
})

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Не менее двух букв"
      },
      userPhone: "Номер телефона обязателен",
      userEmail: {
        required: "Email обязателен",
        email: "Ваш email должен быть формата name@domain.com"
      }
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required"
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Не менее двух букв"
      },
      userPhone: "Номер телефона обязателен"
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      userQuestion: "required"
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Не менее двух букв"
      },
      userPhone: "Номер телефона обязателен",
      userQuestion: "Введите вопрос"
    }
    
  });

  //маска
  $('[type=tel]').mask('+7(000) 000-00-00', { placeholder: "+7 (___) ___-__-__"});

});



