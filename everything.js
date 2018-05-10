// 切换active
function pageChange() {
  $('.page a').on('click', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })
}

// goTop
function goTop() {
  $("#gotop").click(function(e) {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
  });
  $(window).scroll(function(e) {
    if ($(window).scrollTop() > 100)
      $("#gotop").fadeIn(200);
    else
      $("#gotop").fadeOut(200);
  });
}
//移动端，调整Fix定位的按钮，使其不超出contanier
function adjustFix() {
    var left = parseFloat($('position-element').offset().left);
    $('.btns .download.fix').css('right', 20 + left + 'px');
    $('#gotop').css('right', 3 + left + 'px');
    $(window).resize(adjustFix);
}

//运动函数
function css(obj, attr) {
  if (obj.currentStyle) { //IE
    return obj.currentStyle[attr];
  } else return Math.ceil(parseFloat(getComputedStyle(obj, false)[attr])); //除IE
}

function move(obj, attr, target) {
  obj.timer && clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var stop = true;
    var cur = parseInt(css(obj, attr));
    speed = (target - cur) / 8;
    speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed);
    if (target != cur) {
      stop = false;
      obj.style[attr] = speed + cur + 'px';
    };
    if (stop) {
      clearInterval(obj.timer);
      obj.timer = null;
    }
  }, 17)//16.7ms原则
}
