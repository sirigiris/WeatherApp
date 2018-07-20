
const yargs=require('yargs');
const axios=require('axios');

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

 var encodedaddress = encodeURIComponent(argv.address)

var geocodeurl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}&key=AIzaSyCnuwOex1nuTv5Iklt6EMz7Vibb4SgDwbU`

axios.get(geocodeurl).then((response)=>{
    if(response.data.status=="ZERO_RESULTS"){
        throw new Error('unable to find the address');
    }
   // console.log(response.data);
    var lat=response.data.results[0].geometry.location.lat;
    var lng=response.data.results[0].geometry.location.lng;
    var weatherurl=`https://api.darksky.net/forecast/73cc2fc08552db5736cad3ddeb71adb5/${lat},${lng}`
    return axios.get(weatherurl);
}).then((response)=>{
        console.log(response.data.currently.temperature)
        console.log(response.data.currently.apparentTemperature)      
}).catch((e)=>{
    if(e.code =='ENOTFOUND')
    {
        console.log("error");
    }
    else
    {
        console.log(e.message);
    }
    
})