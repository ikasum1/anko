(function ($) {
  'use strict';


  // スムーズスクロール
  // #で始まるアンカーをクリックした場合にスムーススクロール
  $('a[href^="#"]').on('click', function() {
    var speed = 500;
    // アンカーの値取得
    var href= $(this).attr('href');
    // 移動先を取得
    var target = $(href == '#' || href == '' ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;

    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  function fadeAnime(){
    // ふわっ
    $('.js-maskImg_mask').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeMask');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
        $(this).removeClass('fadeMask');// 画面外に出たらfadeUpというクラス名を外す
      }
    });
  }
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });


  // スクロール
  /*luxy.init({
    wrapper: '#luxy',
    targets : '.luxy-el',
    wrapperSpeed:  1
  });*/

})(jQuery);
