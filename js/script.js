$(document).ready(function(){
$('.btn1').click(function(){
  $('p').slideUp(1000,function(){
    $('p').css("color","red")
  });
  
})
$('.btn2').click(function(){
$('p').slideDown(1000,function(){
  $('p').css("color","#fff")
});
});
});