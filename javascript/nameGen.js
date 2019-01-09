
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPssIPl_CcSfCeFF9o4-CfONy-crMhj24",
    authDomain: "namegen-c9357.firebaseapp.com",
    databaseURL: "https://namegen-c9357.firebaseio.com",
    projectId: "namegen-c9357",
    storageBucket: "",
    messagingSenderId: "421971603291"
  };
  firebase.initializeApp(config);


var firstName = []
var secondName = []
var gender = []


var database = firebase.database()
var a = '/connections_' + Math.floor(Math.random() * 1000)
//console.log("random : " + a)
var connectionRef = database.ref(a);
var connectedRef = database.ref(".info/connected");
var counter = 0;
var result;
var instaName = "";


//grabbing the user input from html

$("#search").on("click", function (event) {
  event.preventDefault()
  console.log("here")
  var prefLang = $("#prefLang").val()
  var gender = $("#gender").val()
  var nameFakeApi;
  var flag = "true"
  var err;
  if (prefLang === "" && gender === "") {
     console.log("no input")
    nameFakeApi = "https://uinames.com/api/?gender=male" + '"' + firstName&secondName + '"'


  } else if (gender === "male") {
    console.log("Male Name")
    nameFakeApi = "https://uinames.com/api/?gender=male" + '"' + name + '"'
  } else if (gender === "female") {
    console.log("Female name")
    nameFakeApi =" https://uinames.com/api/?gender=female"
    + '"' +firstName&secondName  + '"'
  } else {

    // console.log("Unisex: " + name)
    nameFakeApi = "https://uinames.com/api/?ext" + '"' + firstName&secondName+ '"'
  }
  console.log(nameFakeApi)
  result(nameFakeApi, err)

})

// function that does the api
function result(nameFakeApi, err) {



  $.ajax({
      headers: {
        "access-control-allow-headers":"Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        contentType: 'application/x-www-form-urlencoded',
      },
      url: "https://uinames.com/api/?ext",
      method: "GET",
      success: function(result)
      {
        var gender = result.response.any;
        var prefLang = result.response.gender;
        $('#result').append(gender+ ' has ' + prefLang + ' name');
    }

    }).then(function (response) {
        console.log(response)
        if (result == null) {
          result = response.data.slice(1);
          counter = 0;
        } else {
          //newCounter = result.length+1;

          result = result.slice(0, counter).concat(response.data.slice(1)).concat(result.slice(counter));
          counter;
          result = result.concat(response.data);
        }




      });
      //function that will take input from html
      function nameInput(nameDiv) {
        $('#nameDiv').empty()
        // appends result  
        $('#nameDiv').append()
      }

      //define api values to be pulled
      function writeUserData(prefLang, male, female) {
        connectionRef.push({
          prefLang: prefLang,
          maleName: male,
          femaleName: female

        })
       // function for Random Quotes 
    function quote() {
      $.ajax({
        url: "https://api.forismatic.com/api/1.0/",
        jsonp: "jsonp",
        dataType: "jsonp",
        data: {
          method: "getQuote",
          lang: "en",
          format: "jsonp"
        },
        success: function (response) {
          $('#quote').html(response.quoteText)
          $('#author').html("<br/>&dash; " + response.quoteAuthor)

        }
      });
    }

    $("#quoteButton").on("click", function () {

      quote();
    });

    // end
  }

      };