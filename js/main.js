// Маска номера телефона
$("#user-phone").mask("+7(999)999-99-99");

// Карта

function initMap() {
    let myLatlng = new google.maps.LatLng(59.939284, 30.336480);
        myOptions = {
        zoom: 13,
        center: myLatlng
    }
    let map = new google.maps.Map(document.getElementById("map"), myOptions);
        geocoder = new google.maps.Geocoder();

    google.maps.event.addListener(map, 'click', function(event) {
        geocoder.geocode({
            'latLng': event.latLng
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    document.querySelector('#user-address').value = results[0].formatted_address;
                }
            }
        });
    });
}

// Проверка на валидацию
$(document).ready(function() { 
    $("#submit").click(function() { 
        if ($('.user-form')[0].checkValidity()) { 
        $(".modal").fadeIn(); 
        }
    });
});

$(document).ready(function() { 
    $(".modal-close").click(function() { 
        $(".modal").fadeOut(); 
    });
});