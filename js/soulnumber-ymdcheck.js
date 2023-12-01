(function($){
    function formSetDay(){
      var lastday = formSetLastDay($('.js-changeYear').val(), $('.js-changeMonth').val());
       var option = '<option value="0" selected="selected">日</option>'; 
      opriom = '';
      for (var i = 1; i <= lastday; i++) {
        if (i === $('.js-changeDay').val()){
          option += '<option value="' + i + '" selected="selected">' + i + '</option>\n';
        }else{
          option += '<option value="' + i + '">' + i + '</option>\n';
        }
      }
      $('.js-changeDay').html(option);
    }
  
    function formSetLastDay(year, month){
      var lastday = new Array('', 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        lastday[2] = 29;
      }
      return lastday[month];
    }
  
   $('.js-changeYear, .js-changeMonth').change(function(){
      formSetDay();
    });
  })(jQuery);
  