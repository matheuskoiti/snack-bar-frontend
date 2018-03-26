var request = require('request'); // require in request
var initGet = {uri: 'http://localhost:8181/'};


var apiCaller = function (url, cb) {
    //use request to make the external http call to the JSON api
    request({
      url: url,
      json: true
    }, function (error, response, body) {
  
      if (!error && response.statusCode === 200) {
        cb(body);// Send body/response to callback
      }
    })
};

var getSnacks = function (cb) {
    snacks = apiCaller(initGet.uri + "/snack", cb)
    console.log(snacks);
    return snacks;
}

var getIngredients = function (cb) {
    return apiCaller(initGet.uri + "/ingredient", cb);
}

var getValue = function (lanche, quantidade, cb) {
    return apiCaller(initGet.uri + "/snack/order/value?snacks="+lanche+"&quantities="+quantidade, cb);
}

var getCustomValue = function (ingrediente, quantidade, cb) {
    return apiCaller(initGet.uri + "/snack/custom/value?ingredients="+ingrediente+"&quantities="+quantidade, cb);
}

// Export the functions for external access
module.exports = {
  getSnacks: getSnacks,
  getIngredients: getIngredients,
  getValue : getValue,
  getCustomValue : getCustomValue
};