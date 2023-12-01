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
