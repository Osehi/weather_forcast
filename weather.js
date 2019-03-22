$(document).ready(function(){
    $('#search').click(function(){
        let city = $('#insert').val();

        if(city != ''){
            $.ajax({
                
                url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&APPID=65709769d200651951c11deaf79819ac',
                type: 'GET',
                dataType: 'jsonp',
                success: function(data){
                    let widget = show(data);
                    $('#output').html(widget);
                }

            });
        } else {
            $('#error').html('Field cannot be empty');
        }
    });
});

function show(data){
    return ` 
        <ul>
            <li>Weather: ${data.weather[0].main}</li>
            <li>Description: ${data.weather[0].description}</li>
        </ul>
    `
}