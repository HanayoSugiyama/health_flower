'use strict';

//ハンバーガーメニュー
$(function () {
    var $body = $('.gnav-wrapper,.menu-btn');

    //開閉用ボタンをクリックでクラスの切替え
    $('#js_btn').on('click', function () {
        $body.toggleClass('open');
    });

    //メニュー名以外の部分をクリックで閉じる
    $('a').on('click', function () {
        $body.removeClass('open');
    });
});


//モーダル
$(".number").modaal({
    overlay_close:true,//モーダル背景クリック時に閉じるか
    before_open:function(){// モーダルが開く前に行う動作
      $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
    },
    after_close:function(){// モーダルが閉じた後に行う動作
      $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
    }
  });