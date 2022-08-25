jQuery(function ($) {
    //Scroll mouse to full screen header
    // var $jsHeader = $(".c-header");
    // var $jsHeaderWrap = $(".l-headerwrap");
    // $(window).scroll(function () {
    //   if ($(this).scrollTop() > 10) {
    //     $jsHeader.addClass("is-header");
    //     $jsHeaderWrap.addClass("is-headerwrap");
    //   } else {
    //     $jsHeader.removeClass("is-header");
    //     $jsHeaderWrap.removeClass("is-headerwrap");
    //   }
    // });

    //Click Navigation to open sidenav
    $(".c-header__itemnavbar").click(function(){
      $(".c-header__side").addClass("c-active");
    });

    $(".c-header__btnclose").click(function(){
      $(".c-header__side").removeClass("c-active");
    });

    $(".c-header__terserwrapclose").click(function(){
      $(".c-header__side").removeClass("c-active");
    });

    //Slick slider mainvisual
    $('.c-mainvisual__draggable').slick({
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: false,
      dots: false,
      arrows: false,
      infinite: true
    });

    //Hover and click table news
    var url = "#";
    $('.c-news__table tr').click(function(){
      window.location = url;
    })


    $('.c-pickup__box').slick({
      speed: 800,
      autoplay: false,
      // autoplaySpeed: 2000,
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      prevArrow:'<button class="slick-prev"><img src="./assets/img/icon_prev.png" alt="Icon Slick Prev"></button>',
      nextArrow:'<button class="slick-next"><img src="./assets/img/icon_next.png" alt="Icon Slick Next"></button>',
      responsive: [
        {
          breakpoint: 1600,
          settings: {
              slidesToShow: 4,
          }
      },
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
        }
    },
    
    {
      breakpoint: 600,
      settings: {
          slidesToShow: 2,
      }
  },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        },


       

      
    ]
    });

    //Back to top
    $(".c-backtotop").click(function () {
      $("html, body").animate({
        scrollTop: 0
      },1500);
      return false;
    });

  })

 
 
  