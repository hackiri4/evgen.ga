const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 380);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 350
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.cssmenu,.cssmenu ul ul li a,.movie-list-title,.history,.history-box,.history-text,.navbar-container,.menu-list a:hover,.timer h1,.timer-counter,.menu-container a,.sidebar,.left-menu-icon,.toggle,.zatemnenie,.okno,.okno1,.close,.zatemnenie1,.okno2,.okno3,.close1"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


























 window.onscroll = () =>{
   avbar.classList.remove('active');
     searchForm.classList.remove('active');
       cartItem.classList.remove('active');
 }
















const yatranslate = {
    /* Original language */
    lang: "ru",
    /* The language we translate into on the first visit */
    /* Язык, на который переводим при первом посещении */
    // langFirstVisit: 'en',
};

document.addEventListener('DOMContentLoaded', function () {
    // Start
    yaTranslateInit();
})

function yaTranslateInit() {

    if (yatranslate.langFirstVisit && !localStorage.getItem('yt-widget')) {
        /* Если установлен язык перевода для первого посещения и в localStorage нет yt-widget */
        /* If the translation language is installed for the first visit and in localStorage no yt-widget */
        yaTranslateSetLang(yatranslate.langFirstVisit);
    }

    // Подключаем виджет yandex translate
    // Connecting the yandex translate widget
    let script = document.createElement('script');
    script.src = `https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=${yatranslate.lang}&widgetTheme=light&autoMode=false`;
    document.getElementsByTagName('head')[0].appendChild(script);

    // Получаем и записываем язык на который переводим
    // We get and write down the language into which we translate
    let code = yaTranslateGetCode();

    // Показываем текущий язык в меню
    // Show the current language in the menu
    yaTranslateHtmlHandler(code);

    // Вешаем событие клик на флаги
    // We hang the event click on the flags
    yaTranslateEventHandler('click', '[data-ya-lang]', function (el) {
        yaTranslateSetLang(el.getAttribute('data-ya-lang'));
        // Перезагружаем страницу
        // Reloading the page
        window.location.reload();
    })
}

function yaTranslateSetLang(lang) {
    // Записываем выбранный язык в localStorage объект yt-widget
    // Writing the selected language to localStorage
    localStorage.setItem('yt-widget', JSON.stringify({
        "lang": lang,
        "active": true
    }));
}

function yaTranslateGetCode() {
    // Возвращаем язык на который переводим
    // Returning the language to which we are translating
    return (localStorage["yt-widget"] != undefined && JSON.parse(localStorage["yt-widget"]).lang != undefined) ? JSON.parse(localStorage["yt-widget"]).lang : yatranslate.lang;
}

function yaTranslateHtmlHandler(code) {
    // Получаем язык на который переводим и производим необходимые манипуляции с DOM
    // We get the language to which we translate and produce the necessary manipulations with DOM
    document.querySelector('[data-lang-active]').innerHTML = `<img class="lang__img lang__img_select" src="./img/lang/lang__${code}.png" alt="${code}">`;
    document.querySelector(`[data-ya-lang="${code}"]`).remove();
}

function yaTranslateEventHandler(event, selector, handler) {
    document.addEventListener(event, function (e) {
        let el = e.target.closest(selector);
        if (el) handler(el);
    });
}
















(function($) {
  $.fn.menumaker = function(options) {

      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) {
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$("#cssmenu").menumaker({
   title: "Menu",
   format: "multitoggle"
});

});
})(jQuery);
