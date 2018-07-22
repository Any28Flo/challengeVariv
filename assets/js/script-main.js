
var loadPage = () =>{
  const url="https://sandbox-api.openpay.mx/v1/";
  var Openpay = require('openpay');
  var openpay = new Openpay('m9mjv097cj4m57ibfzug ', ' sk_e5c54b6f2baf44ddbdc58212f542619d', [ isProduction ]);


  const name = document.getElementById("inputName");
  const lastName = document.getElementById("inputLastName");
  const email = document.getElementById("inputEmail");
  const address = document.getElementById("line1");
  const labelZipCode = document.getElementById('zipCode');

  const line2= document.getElementById("line2");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  // Buttons

  const buttonAddClient=document.getElementById('addClient');
  const buttonSeeClient = document.getElementById("seeClients");
  const buttonCreatingClient = document.getElementById("creatingCustomer");

  $(buttonAddClient).click( ()=>{
    window.location.href= "root/newClient.html"
  })

  $(buttonSeeClient).click(()=>{
    window.location.href= "root/seeClients.html"
  })
  $(buttonCreatingClient).click(()=>{
    newCustomer();
  })
  // Method zip code


  $(labelZipCode).keyup(function(){
    const zipCode= labelZipCode.value;
    const ulrZipCode = "https://api-codigos-postales.herokuapp.com/v2/codigo_postal/" + zipCode ;
    detailZipCode(zipCode);
  })


  const detailZipCode = (zipCode) =>{

    const ulrZipCode = "https://api-codigos-postales.herokuapp.com/v2/codigo_postal/" + zipCode ;

    $.getJSON (ulrZipCode ,function(data){

        var colonias = data.colonias;
        for(let i= 0 ; i< colonias.length ; i++){
          $(line2).append('<option >'+colonias[i]+'</option>')

        }

        $(city).val(data.municipio);
        $(state).val(data.estado);




    });
  }
  // Creating a customer
  const newCustomer = ()=>{
    const name_value = name.value;
    const lastName_value = lastName.value;
    const email_value = email.value;
    const address_value = address.value;
    const labelZipCode_value = labelZipCode.value;
    const city_value = city.value;
    const state_value =  state.value;
    const zipCode_value= labelZipCode.value;

    console.log(`${city_value}`)
    var newCustomer = {
      "name":"John",
      "email":"johndoe@example.com",
      "last_name":"Doe",
      "address":{
        "city":"Queretaro",
        "state":"Queretaro",
        "line1":"Calle Morelos no 10",
        "line2":"col. san pablo",
        "postal_code":"76000",
        "country_code":"MX"
      },
      "phone_number":"44209087654"
    };
    var customerRequest = {
   'name': name_value,
   'email': email_value,
   'requires_account': false
   };

   openpay.customers.create(customerRequest, function(error, customer) {
  // ...
  });

  }

}
$(document).ready(loadPage);
