
// Click events
var buttonAddClient=document.getElementById('addClient');
var buttonSeeClient = document.getElementById("seeClients");

$(buttonAddClient).click(function (){
  var URLactual = window.location;
alert(URLactual);
window.location.href= "root/newClient.html"
})

$(buttonSeeClient).click(function(){
  window.location.href= "root/seeClients.html"
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
