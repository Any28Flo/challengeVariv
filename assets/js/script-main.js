
var loadPage = () =>{


  var urlApi = "https://sandbox-api.openpay.mx/v1/m9mjv097cj4m57ibfzug/customers"
  console.log(urlApi)
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
    dataCustomer();
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
  const dataCustomer = ()=>{
    const name_value = name.value;
    const lastName_value = lastName.value;
    const email_value = email.value;
    const address_value = address.value;
    const labelZipCode_value = labelZipCode.value;
    const city_value = city.value;
    const state_value =  state.value;
    const zipCode_value= labelZipCode.value;
    const line2_value = line2.value;
    console.log(`${city_value}`)

    const newCustomer = {
      "name":name_value ,
      "email":email_value,
      "last_name":name_value ,
      "address":{
        "city": city_value,
        "state":state_value,
        "line1":address_value,
        "line2":line2_value,
        "postal_code":labelZipCode_value,
        "country_code":"MX"
      },
      "phone_number":"44209087654"
    };



postData(urlApi)
  .then(newCustomer => {
    console.log('complete')
  })
  .catch(error => console.error(error));

    function postData(e) {
      return fetch(urlApi, {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'This is a Test',
          body: 'Some Random Text',
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
    .then(response => response.json())
      .catch(error => console.error(`Fetch Error =\n`, error));
    };


  }



}
$(document).ready(loadPage);
