jQuery(document).ready(function() {

  //WOW js code
    new WOW().init();

    var el = document.getElementsByClassName('menu-item');
      for(var i=0; i<el.length; i++) {
        el[i].addEventListener("mouseenter", showSub, false);
        el[i].addEventListener("mouseleave", hideSub, false);
    }
      function showSub(e) {
        if(this.children.length>1) {
          this.children[1].style.height = "auto";
          this.children[1].style.overflow = "visible";
          this.children[1].style.opacity = "1";
        } else {
          return false;
        }
    }
    function hideSub(e) {
      if(this.children.length>1) {
        this.children[1].style.height = "0px";
         this.children[1].style.overflow = "hidden";
         this.children[1].style.opacity = "0";
      } else {
         return false;
      }
  }





      //this code is for smooth scroll and nav selector
            $(document).ready(function () {
              $(document).on("scroll", onScroll);

              //smoothscroll
              $('a[href^="#"]').on('click', function (e) {
                  e.preventDefault();
                  $(document).off("scroll");

                  $('a').each(function () {
                      $(this).removeClass('active');
                  })
                  $(this).addClass('active');

                  var target = this.hash,
                      menu = target;
                  $target = $(target);
                  $('html, body').stop().animate({
                      'scrollTop': $target.offset().top+2
                  }, 500, 'swing', function () {
                      window.location.hash = target;
                      $(document).on("scroll", onScroll);
                  });
              });
          });

          function onScroll(event){
              var scrollPos = $(document).scrollTop();
              $('.navbar-default .navbar-nav>li>a').each(function () {
                  var currLink = $(this);
                  var refElement = $(currLink.attr("href"));
                  if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                      $('.navbar-default .navbar-nav>li>a').removeClass("active");
                      currLink.addClass("active");
                  }
                  else{
                      currLink.removeClass("active");
                  }
              });
          }


     //this code is for animation nav
     jQuery(window).scroll(function() {
        var windowScrollPosTop = jQuery(window).scrollTop();

        if(windowScrollPosTop >= 150) {
          jQuery(".top-header").css({"background": "#18171D",});
          jQuery(".top-header img.logo").css({"margin-top": "-10px", "margin-bottom": "15px"});
          jQuery(".nav-bar").css({"margin-top": "6px",});
        }
        else{
          jQuery(".top-header").css({"background": "transparent",});
           jQuery(".top-header img.logo").css({"margin-top": "-5px", "margin-bottom": "25px"});
           jQuery(".nav-bar").css({"margin-top": "28px"});

        }
     });

     'use strict';
       var multiItemSlider = (function () {
         return function (selector, config) {
           var
             _mainElement = document.querySelector(selector), // основный элемент блока
             _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
             _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
             _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
             _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
             _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
             _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
             _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
             _positionLeftItem = 0, // позиция левого активного элемента
             _transform = 0, // значение транфсофрмации .slider_wrapper
             _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
             _items = []; // массив элементов
           // наполнение массива _items
           _sliderItems.forEach(function (item, index) {
             _items.push({ item: item, position: index, transform: 0 });
           });

           var position = {
             getMin: 0,
             getMax: _items.length - 1,
           }

           var _transformItem = function (direction) {
             if (direction === 'right') {
               if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
                 return;
               }
               if (!_sliderControlLeft.classList.contains('slider__control_show')) {
                 _sliderControlLeft.classList.add('slider__control_show');
               }
               if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
                 _sliderControlRight.classList.remove('slider__control_show');
               }
               _positionLeftItem++;
               _transform -= _step;
             }
             if (direction === 'left') {
               if (_positionLeftItem <= position.getMin) {
                 return;
               }
               if (!_sliderControlRight.classList.contains('slider__control_show')) {
                 _sliderControlRight.classList.add('slider__control_show');
               }
               if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
                 _sliderControlLeft.classList.remove('slider__control_show');
               }
               _positionLeftItem--;
               _transform += _step;
             }
             _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
           }

           // обработчик события click для кнопок "назад" и "вперед"
           var _controlClick = function (e) {
             if (e.target.classList.contains('slider__control')) {
               e.preventDefault();
               var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
               _transformItem(direction);
             }
           };

           var _setUpListeners = function () {
             // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
             _sliderControls.forEach(function (item) {
               item.addEventListener('click', _controlClick);
             });
           }

           // инициализация
           _setUpListeners();

           return {
             right: function () { // метод right
               _transformItem('right');
             },
             left: function () { // метод left
               _transformItem('left');
             }
           }

         }
       }());

       var slider = multiItemSlider('.slider')


});
