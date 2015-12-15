function init(){
  var canvas = document.getElementById('map');
  var options = {
    center: new google.maps.LatLng(44.5403, -78.5463),
    zoom: 2
  }
  var map = new google.maps.Map(canvas, options);
  console.log(map);
}


init();