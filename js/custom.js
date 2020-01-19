jQuery(document).ready(function() {

  //WOW js code
    new WOW().init();

  //Выпадающее меню
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
     //this code is for animation nav
     jQuery(window).scroll(function() {
        var windowScrollPosTop = jQuery(window).scrollTop();

        if(windowScrollPosTop >= 150) {
          jQuery(".top-header").css({"background": "#000",});
          jQuery(".top-header img.logo").css({"margin-top": "-10px", "margin-bottom": "15px"});
          jQuery(".nav-bar").css({"margin-top": "6px",});
        }
        else{
          jQuery(".top-header").css({"background": "transparent",});
           jQuery(".top-header img.logo").css({"margin-top": "-5px", "margin-bottom": "25px"});
           jQuery(".nav-bar").css({"margin-top": "28px"});

        }
     });
  


});
