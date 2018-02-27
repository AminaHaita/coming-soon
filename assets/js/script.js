$('#countdown').countdown('2019/01/01').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(
    '<li id="days"><div class="number">%-D</div><div class="label">Days</div></li> '
     + '<li id="hours"><div class="number">%-H</div><div class="label">Hours</div></li> '
     + '<li id="minutes"><div class="number">%M</div><div class="label">Minutes</div></li> '
     + '<li id="seconds"><div class="number">%S</div><div class="label">Seconds</div></li>'));
 }).on('finish.countdown', function(event){
   
   $(location).attr('href', 'form.html')

 });
 
 
 
// $('div#clock').countdown(finalDate, {elapse: true})
//   .on('update.countdown', function(event) {
//     if (event.elapsed) { // Either true or false
//       // Counting up...
//     } else {
//       // Countdown...
//     }
//   });
 
 
 

$('.open-more-info').magnificPopup({
    type:'inline',
    // delegate: 'a',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true 
  });
  
  $('.open-notify').magnificPopup({
    type:'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true 
  });


  $("body").vegas({
    delay: 7000,
    timer: false,
    shuffle: true,
    firstTransition: 'fade',
    firstTransitionDuration: 5000,
    transition: 'zoomOut',
    transitionDuration: 2000,

    slides: [
        { src: "../coming-soon/assets/img/comingsoon-bg1.jpg" },
        { src: "../coming-soon/assets/img/comingsoon-bg2.jpg" },
        { src: "../coming-soon/assets/img/comingsoon-bg3.jpg" }
    ]
});


  function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(33.5725923,-7.6574406); 
    var mapOptions = {center: myCenter, zoom: 9};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({
      position: myCenter,
      animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);

    // Zoom to 9 when clicking on marker
    google.maps.event.addListener(marker,'click',function() {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
    });

  }
  