


function initMap() {
    var image = 'img/icon/map_pin.png';
    var coordinates = {lat: 59.938770, lng: 30.323026},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 16,
        }),
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            animation: google.maps.Animation.DROP,/*маркер падает с верху*/
            icon: image,
        });
}
