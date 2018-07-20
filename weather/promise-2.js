var request=require('request');

var geocodeAddress = (address) =>{
    var encodedaddress = encodeURIComponent(address);

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
           request({
                url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}&key=AIzaSyCnuwOex1nuTv5Iklt6EMz7Vibb4SgDwbU`,
                json: true
           },(error, response, body) =>{

               if(error)
               {
                reject('unable to connect to the google servers')                
            }
            else if(body.status != "OK")
            {
                reject("unable to find the address");
            }else if(body.status == "OK")
            {
                resolve({
                    address: body.results[0].formatted_address,
                    latitute:body.results[0].geometry.location.lat,
                    logititude:body.results[0].geometry.location.lng                    
                });                    
            }        
           });
        },1500);
    });
}
geocodeAddress('20871').then((result) =>{
console.log(JSON.stringify(result))
}).catch((error) =>{
    console.log(error);
});