const request=require('request');


var getWeather =(lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/73cc2fc08552db5736cad3ddeb71adb5/${lat},${lng}`,
        json:true
    },(error,response,body)=>{

        if(error)
        {
            callback('Unable to connect to google server');
        }else if(response.statusCode == 400)
        {
            callback('unable to get temperature');
        }else if(response.statusCode == 200)
        {
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });

        }
            //console.log(`${body.currently.temperature}`);
    });
};

module.exports={
    getWeather: getWeather
};