function initMap() {
  var mcm = {lat: 49.3025027, lng: -123.1229269};
  var map = new google.maps.Map(document.getElementById('gmap'), {
    zoom: 13,
    center: mcm
  });
  var marker = new google.maps.Marker({
    position: mcm,
    map: map
  });
}
