

// $("#test").click(function(event) {
// $(location).attr('href', 'index.html');
// });   

$('body').css('background-color','black');

$('#countdown').countdown('2017/12/18 13:02:00').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(
    '<li id="days"><div class="number">%-D</div><div class="label">Days</div></li> '
     + '<li id="hours"><div class="number">%-H</div><div class="label">Hours</div></li> '
     + '<li id="minutes"><div class="number">%M</div><div class="label">Minutes</div></li> '
     + '<li id="seconds"><div class="number">%S</div><div class="label">Seconds</div></li>'));
 }).on('finish.countdown', function(event){
   
    $(location).attr('href', 'index.html');
   
 });