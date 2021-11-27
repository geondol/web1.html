 var links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    //   }
    $('a').css('color', color);
    }
  }
  var body = {
    setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setbackgroundcolor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
function nightDayHandler(self){
var target = document.querySelector('body');
if (self.value === 'night'){
body.setbackgroundcolor('black');
body.setColor('white');
self.value = 'day';

links.setColor('red');
}else {
body.setbackgroundcolor('white');
body.setColor('black');
self.value = 'night';

links.setColor('blue');
}
}
