var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -38.974819, lng: -94.683601 },
    zoom: 8
  });
}

// Sticky menu Background
window.addEventListener('scroll', function(){
  if(window.scrollY > 150){
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity =1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){
  if(this.hash!==''){
    event.preventDefault();

    const hash =this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      }, 800
    );
  }
});