

var buttonAddClient=document.getElementById('addClient'); //returns a HTML DOM Object
var buttonSeeClient = document.getElementById("seeClients");

$(buttonAddClient).click(function (){
  window.location.href =
  "../../newClient.html";
})

$(buttonSeeClient).click(function(){
  window.location.href= "../../seeClients.html"
})


// Redirec another page



// var newCustomer = {
//   "name":"John",
//   "email":"johndoe@example.com",
//   "last_name":"Doe",
//   "address":{
//     "city":"Queretaro",
//     "state":"Queretaro",
//     "line1":"Calle Morelos no 10",
//     "line2":"col. san pablo",
//     "postal_code":"76000",
//     "country_code":"MX"
//   },
//   "phone_number":"44209087654"
// };
//
// openpay.customers.create(newCustomer, function(error, body) {
//     error;    // null if no error occurred (status code != 200||201||204)
//     body;     // contains the object returned if no error occurred (status code == 200||201||204)
// });
