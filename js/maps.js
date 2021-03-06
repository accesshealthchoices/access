var valleyMassageLocation = new google.maps.LatLng(47.664999, -117.240710);
var secondLocation = new google.maps.LatLng(47.670052, -117.411645);
var centerLocation = new google.maps.LatLng(47.664723, -117.336796);
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

function initialize() {
	var styles = [
		{
			stylers: [
				{ hue: "#00748e" },
				{ saturation: -40 }
			]
		},{
			featureType: "road",
			elementType: "geometry",
			stylers: [
				{ lightness: 100 },
				{ visibility: "simplified" }
			]
		},{
			featureType: "road",
			elementType: "labels",
			stylers: [
				{ visibility: "off" }
			]
		}
	];
	var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
	var mapOptions = {
		center: centerLocation,
		zoom: 12,
		mapTypeId: 'roadmap',
		scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
		// All of the below are set to true by default, so simply remove if set to true:
		panControl:false, // Set to false to disable
		mapTypeControl:false, // Disable Map/Satellite switch
		scaleControl:false, // Set to false to hide scale
		streetViewControl:false, // Set to disable to hide street view
		overviewMapControl:false, // Set to false to remove overview control
		rotateControl:false // Set to false to disable rotate control
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	var image = new google.maps.MarkerImage("../img/marker.png", null, null, null, new google.maps.Size(64,93)); // Create a variable for our marker image.

	var marker = new google.maps.Marker({ // Set the marker
	    position: valleyMassageLocation, // Position marker to coordinates
	    icon: image,
	    map: map, // assign the market to our map variable
	});
	var marker2 = new google.maps.Marker({ // Set the marker
	    position: secondLocation, // Position marker to coordinates
	    icon: image,
	    map: map, // assign the market to our map variable
	});
	map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');

		var infowindow = new google.maps.InfoWindow({ // Create a new InfoWindow
			content:'' +
				'<h6 class="maps-header">Valley Location</h6>' +
				'<p class="maps-para">12121 E Broadway Spokane, Wa 99206<br>' +
				'(509) 921-9800<br>' +
				'<a href="https://www.google.com/maps/place/12121+E+Broadway+Ave/@47.664786,-117.240785,17z/data=!3m1!4b1!4m2!3m1!1s0x549e2013454ad5d1:0x2f25b32122906c67" class="maps-link">Get Directions</a></p>'
		});

		var infowindow2 = new google.maps.InfoWindow({ // Create a new InfoWindow
			content:'' +
				'<h6 class="maps-header">Division Location</h6>' +
				'<p class="maps-para">1315 N Division St Spokane, WA 99202<br>' +
				'(509) 624-0908<br>' +
				'<a href="https://www.google.com/maps/place/1315+N+Division+St/@47.67007,-117.411645,17z/data=!3m1!4b1!4m2!3m1!1s0x549e18ee29ce0f2b:0x2fec734d6c4e49e8" class="maps-link">Get Directions</a></p>'
		});

		google.maps.event.addListener(marker, 'click', function() { // Add a Click Listener to our marker
			infowindow.open(map,marker); // Open our InfoWindow
		});

		google.maps.event.addListener(marker2, 'click', function() { // Add a Click Listener to our marker
			infowindow2.open(map,marker2); // Open our InfoWindow
		});

}

google.maps.event.addDomListener(window, 'load', initialize);