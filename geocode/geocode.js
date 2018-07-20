const request=require('request');


var geocodeAddress = (address, callback) =>{
            var encodedaddress = encodeURIComponent(address)
            request({
            //url:'https://maps.googleapis.com/maps/api/geocode/json?address=23353%20arora%20hills%20dr%20md&key=AIzaSyCnuwOex1nuTv5Iklt6EMz7Vibb4SgDwbU',
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}&key=AIzaSyCnuwOex1nuTv5Iklt6EMz7Vibb4SgDwbU`,
            json: true
        }, (error, response, body) => {
            if(error)
            {
                callback('unable to connect to the google servers')                
            }
            else if(body.status != "OK")
            {
                callback("unable to find the address");
            }else if(body.status == "OK")
            {
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitute:body.results[0].geometry.location.lat,
                    logititude:body.results[0].geometry.location.lng                    
                });                    
            }        
        });   
};

module.exports={
    geocodeAddress:geocodeAddress
}