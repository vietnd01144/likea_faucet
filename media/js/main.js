var main = {
  GLOBAL: {},

  CONSTS: {},

  SELECTORS: {
    all_progress: ".all-progress",
    item_progress: ".item-progress",
    icon_close : ".icon-close",
    icon_message_circle: ".icon-message-circle"
  },

  init: function () {
    main.progressBar();
    main.itemProgressBar();
    main.clickCloseChat();
    main.clickOpenChat();
    setInterval(function () {
      main.countDown();
    }, 1000);
  },

  clickCloseChat : function() {
    $(main.SELECTORS.icon_close).on('click', function() {
      $(".chat-main").css("display", "none");
      $(".icon-message-circle").css("display","block")
    }) 
  },
  clickOpenChat : function() {
    $(main.SELECTORS.icon_message_circle).on('click', function() {
      $(".chat-main").css("display", "block");
      $(".icon-message-circle").css("display","none")
    }) 
  },


  countDown: function () {
    var currDate = new Date();
    var endTime = new Date(
      currDate.getFullYear(),
      currDate.getMonth(),
      currDate.getDate(),
      17,
      0,
      0
    );
    // endTime.setTime(currTime.getTime() + (2 * 60 * 1000));
    var now = new Date();
    endTime = Date.parse(endTime) / 1000;
    now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours > 8) {
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
    if (hours < "17") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#hour").html(hours);
    $("#minute").html(minutes);
    $("#second").html(seconds);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
  },

  progressBar: function () {
    $(main.SELECTORS.all_progress).simple_progressbar();
  },

  itemProgressBar: function () {
    $(main.SELECTORS.item_progress).simple_progressbar();
  },
};

$(function () {
  main.init();
});
