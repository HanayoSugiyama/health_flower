/* 
 ソウルナンバー計算
*/    
document.getElementById("button3").onclick = function() {
    var yr1 = document.getElementById("years3").value;
    var yr2 =document.getElementById("inmm3").value;
    var yr3 = document.getElementById("indd3").value;
    if (yr3 == ""){
         yr3 = "0";
    }
    const zoro1 = document.form3.zoro3 ;
    var ele1 = [yr1, yr2, yr3];
    var inymd1 = (ele1.join(''));
    leng1 = inymd1.length;
          /* console.log(leng1); */ 
     var ans31 = inymd1 + "";
    var num2 = 0;    
     var b1 = new Boolean(true);
     /* console.log(b2); */  
     while(b1){
         ans31 = Number(ans31);
                  console.log(zoro1.checked); 
         if((ans31 <= 9 || ans31 == 11 || ans31 == 22 || ans31 == 33 || ans31 == 44 ) && (zoro1.checked)){
             b1 =false;
         }else if(ans31 <= 9 ){
             b1 =false;
              
         } else {
             ans2 = ans31 +'';
                  /* alert(ans2); */
              leng2 =ans2.length;
                  console.log("leng2 = " + leng2); 
              ind2 = 0;
              ans31 = 0;
              num2 = 0;
              while ( leng2 > ind2 ){
                   num2 = ans2.charAt(ind2);
                     console.log("num2 = " + num2); 
                   ans31 = Number(ans31) +  Number(num2);
                   ind2++;
             }
       }         
 }
             console.log("ans31 = " + ans31); 
          
      if( ans31 == 0 ){
          ans31 = "";
     }
     $("#soul-no1").val(ans31);
     
};
