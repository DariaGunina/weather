
// получить данные о текущем месте по геолокации
if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(result){
        var coords = {
            lat: null,
            lon: null,
        }
        
        coords.lat = result.coords.latitude;
        coords.lon = result.coords.longitude;
        
        // сделать запрос 
        var address = "http://api.openweathermap.org/data/2.5/weather?lat=" + coords.lat + "&lon=" + coords.lon + "&appid=d71e7a35d083106c636c6c3688cecadb&units=metric";
        fetch(address).then(function(result){
            if(result.ok) {
                return result.json();
            }
        }).then(function(result) {
           //Выведи погоду в текущем месте
           var weather = {
               city: result.name,
               temp: Math.round(result.main.temp),
               pic: result.weather[0].icon,
           }

           var localCity = document.querySelector('#localCity');
           var localTemp = document.querySelector('#localTemp');
           var localImg = document.querySelector('#localImg');

           localCity.innerHTML = weather.city;
           localTemp.innerHTML = weather.temp;
           localImg.src = "http://openweathermap.org/img/w/" + weather.pic + ".png"
        })   
    })
}



    