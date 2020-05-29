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

  next.css('left', prev.width() + 15 + bullets.width() + 15)
  bullets.css('left', prev.width() + 15)

  new WOW().init();

  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      policyCheckbox: "required",
      userPhone: {
        required: true,
        minlength: 17
      },
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Не менее двух символов",
        maxlength: "Максимальная длина имени - 15 символов"
      },
      policyCheckbox: "Подтвердите согласие на обработку персональных данных",
      userPhone: {
        required: "Номер телефона обязателен",
        minlength: "Минимальная длина номера - 11 цифр"
      },
      userEmail: {
        required: "Email обязателен",
        email: "Ваш email должен быть формата name@domain.com"
      }
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      policyCheckbox: "required",
      userPhone: {
        required: true,
        minlength: 17
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Не менее двух символов",
        maxlength: "Максимальная длина имени - 15 символов"
      },
      policyCheckbox: "Подтвердите согласие на обработку персональных данных",
      userPhone: {
        required: "Номер телефона обязателен",
        minlength: "Минимальная длина номера - 11 цифр"
      }
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      policyCheckbox: "required",
      userQuestion: "required"
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Не менее двух символов",
        maxlength: "Максимальная длина имени - 15 символов"
      },
      userPhone: {
        required: "Номер телефона обязателен",
        minlength: "Минимальная длина номера - 11 цифр"
      },
      policyCheckbox: "Подтвердите согласие на обработку персональных данных",
      userQuestion: "Введите вопрос"
    }
    
  });

  //маска
  $('[type=tel]').mask('+7(000) 000-00-00', { placeholder: "Ваш номер телефона"});

});



