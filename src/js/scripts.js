(function (window, document, undefined) {

  'use strict';

  /**
   * Twitter follow
   */
  (function (d,s,id) {
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
      js=d.createElement(s);
      js.id=id;
      js.src='//platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js,fjs);
    }
  })(document,'script','twitter-wjs');

  (function(doc,s) {
    var js, fjs = doc.getElementsByTagName(s)[0];
    var frag = doc.createDocumentFragment();
    var add = function (url, id) {
      if (doc.getElementById(id)) {
        return;
      }
      js = doc.createElement(s);
      js.src = url;
      if (id) {
        js.id = id;
      }
      frag.appendChild(js);
    };
    add('http://platform.twitter.com/widgets.js');
    fjs.parentNode.insertBefore(frag, fjs);
  })(document,'script');

})( window, document);

$(window).scroll(function(){
  this.console.log($(window).scrollTop());
  if ($(window).scrollTop() <= 0) {
    $(".header").css({"box-shadow":"none"});
  }
  else {
    $(".header").css({"box-shadow":"0px 40px 20px rgba(255,255,255,0.8)"});
  }
});