var nearbyMapbox = function() {
  // var image = $('#icon').attr('src');
  var myLatlng = new google.maps.LatLng(22.502229, 113.033131);
  var mapOptions = {
    center: myLatlng,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
    scrollwheel: false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    }
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    // icon: image,
    title:"江門長浩進出口有限公司"
  });
  var contentString = "<p>江门市新会区会城镇三和大道北105号1座108</p>"
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

// add Google Map to page
$(window).load(nearbyMapbox);
