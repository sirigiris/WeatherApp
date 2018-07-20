
const yargs=require('yargs');
const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather.js');


const argv=yargs
.options({
    a:{
        demand:true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv

var encodedaddress=geocode.geocodeAddress(argv.address, (errorMessage,result) =>{
    if(errorMessage){
        console.log(errorMessage);
    }
    else
    {
        console.log(`--------------`);
        console.log(result.address);
        weather.getWeather(result.latitute,result.logititude, (error,weatherResult) => {
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log(`Temperature: ${weatherResult.temperature}`);
            console.log(`ApparentTemperature: ${weatherResult.apparentTemperature}`);
        }
        });
    }
});




