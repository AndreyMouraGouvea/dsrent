let map, infoWindow;

var lat;
var long;
var city;
var customers;

function getLocation(){
    if(!navigator.geolocation)
        return null;
    //pegar lat e long do usuario
    navigator.geolocation.getCurrentPosition((pos)=>{
        lat = pos.coords.latitude;
        long = pos.coords.longitude;

        getCustomers();
    })
}

// function getCity(){
//     //Pegar cidade do usuário
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&result_type=administrative_area_level_2&key=AIzaSyDOnGi0UkfIpP1ofZuurWV3r1ggqCJpd28`)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         city = (response.results[0].formatted_address);

//         //procurar nome da cidade na string
//         for(var i = 0; i < city.length; i++) {
//             // console.log(city.substr(i, 1));
//             if(city.substr(i, 1) == "-"){
//                 getCustomers(city.substr(0, i-1));
//             }
//         }
//     });
// }

function getCustomers(){
    //Pegar cidade do customers
    fetch("https://www.chere.com.br/api/customer")
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        customers = response;
        //abrir mapa
        initMap(customers);
    });
}

function initMap(customers) {
    // console.log(customers)
    //abre mapa no centro

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: long },
    zoom: 15,
  });

  for( var i = 0; i < customers.length; i++ ){

    // console.log(customers[i].ds_lat);
    
    const svgMarker = {
        path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "#b900de",
        fillOpacity: 1,
        strokeWeight: 0,
        rotation: 0,
        scale: 2.5,
        anchor: new google.maps.Point(15, 30),
    };

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(customers[i].ds_lat, customers[i].ds_long),
        map: map,
        title: customers[i].nm_customer,
        icon: svgMarker
    });
  }
}

getLocation();