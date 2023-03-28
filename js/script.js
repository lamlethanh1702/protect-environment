var placePinCuList = [
    {
        position: { lat: 10.78162, lng: 106.68231 },
        title: "82 Bà Huyện Thanh Quan, P.9, Q.3",
        icon: 'images/bluemarker.png'
    },
    {
        position: { lat: 10.78061, lng: 106.67569 },
        title: "419/17 Cách Mạng Tháng 8, P12, Q10",
        icon: 'images/bluemarker.png'
    },
    {
        position: { lat: 10.77711, lng: 106.70017 },
        title: "42 Lý Tự Trọng, phường Bến Nghé, Q1",
        icon: 'images/bluemarker.png'
    },
    {
        position: { lat: 10.80883, lng: 106.59435 },
        title: "144 Đường số 1A, Bình Hưng Hoà B, Bình Tân",
        icon: 'images/bluemarker.png'
    },
    {
        position: { lat: 10.80078, lng: 106.74324 },
        title: "Thu gom pin tái chế",
        icon: 'images/bluemarker.png'
    },
    {
        position: { lat: 10.75339, lng: 106.70823 },
        title: "38 Tôn Thất Thuyết, P16, Q4",
        icon: 'images/bluemarker.png'
    },
    {
        position: { lat: 10.79275, lng: 106.78089 },
        title: "4D, 59 Bình Trưng Đông, Q2",
        icon: 'images/bluemarker.png'
    },
    {
        position: { lat: 10.77978, lng: 106.68650 },
        title: "260A Điện Biên Phủ, Võ Thị Sáu, Q3",
        icon: 'images/bluemarker.png'
    },
    {
        position: { lat: 10.78936, lng: 106.69743 },
        title: "3B Nguyễn Thành Ý, Đa Kao, Quận 1",
        icon: 'images/bluemarker.png'
    },
];

var placeNhuaList = [
    {
        position: { lat: 10.79226, lng: 106.70328 },
        title: "Thu chai nhựa",
    },
    {
        position: { lat: 10.76316, lng: 106.65675 },
        title: "Thu chai nhựa",
    },
    {
        position: { lat: 10.75226, lng: 106.67503 },
        title: "Thu chai nhựa",
    },
    {
        position: { lat: 10.83828, lng: 106.67138 },
        title: "Thu chai nhựa",
    },
];
var map; // Khởi tạo các biến global mã mình sẽ sử dụng.
var markers = [];
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13, //default là 6
        center: { lat: 10.770453164657011, lng: 106.62284849397435 }, // Center the map on hcm
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    markAll();
}

function markAll() {
    for (const place of placePinCuList) {
        var marker = new google.maps.Marker(place);
        //Add marker vào map
        marker.setMap(map);
        markers.push(marker);
    }

    for (const place of placeNhuaList) {
        var marker = new google.maps.Marker(place);

        //Add marker vào map
        marker.setMap(map);
        markers.push(marker);
    }

}

// const inputRadioList = document.querySelectorAll('[type=radio]');
// for (const inputRadio of inputRadioList) {
//     inputRadio.onclick = function () {
//         // Xoa tat ca cac marker
//         for (const deleteMarker of markers) {
//             deleteMarker.setMap(null);
//         }
//         const value = inputRadio.value;
//         if (value == 'nhuacu') {
//             for (const place of placeNhuaList) {
//                 var marker = new google.maps.Marker(place);
//                 //Add marker vào map
//                 marker.setMap(map);
//                 markers.push(marker);
//             }
//         }
//         else if (value == 'pincu') {
//             for (const place of placePinCuList) {
//                 var marker = new google.maps.Marker(place);
//                 //Add marker vào map
//                 marker.setMap(map);
//                 markers.push(marker);
//             }
//         }
//         else {
//             markAll();
//         }
//     }
// }

const buttonList = document.querySelectorAll('button');
for (const buttonEl of buttonList) {
    buttonEl.onclick = function () {
        for (const deleteMarker of markers) {
            deleteMarker.setMap(null);
        }
        const activeButton = document.querySelector('button.active');
        activeButton.classList.remove('active');
        this.classList.add('active');
        const dataValue = this.getAttribute('data');
        if (dataValue == 'nhuacu') {
            for (const place of placeNhuaList) {
                var marker = new google.maps.Marker(place);
                //Add marker vào map
                marker.setMap(map);
                markers.push(marker);
            }
        }
        else if (dataValue == 'pincu') {
            for (const place of placePinCuList) {
                var marker = new google.maps.Marker(place);
                //Add marker vào map
                marker.setMap(map);
                markers.push(marker);
            }
        }
        else {
            markAll();
        }
    }
}








