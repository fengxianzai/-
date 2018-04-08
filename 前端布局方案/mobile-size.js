/*
比如，我们拿到的设计稿是750px，那就设置成当屏幕宽度是750的时候，
html的font-size就是100px（当然这个100px你可以随意设置的，
我设置成100px只是方便我计算），然后就根据当前屏幕的宽度 / 750 * 100，
就得到了当前屏幕宽度的font-size值。
*/



//当前屏幕宽度 / 750 = 当前屏幕宽度的font-size / 100
//代码如下
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
   
    if (!doc.addEventListener) return;
       win.addEventListener(resizeEvt, recalc, false);
       doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);