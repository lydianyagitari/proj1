
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

$("#add").on("click", function (event) {
  event.preventDefault()
  console.log("here")
  var prefLang = $("#prefLang").val()
  var gender = $("#gender").val()
  var nameFakeApi;
  var carsApi;
  var flag = 0
  if (prefLang === "" && gender === "") {
    // console.log("no input")
    carsApi = "https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key={your API key}"


  } else if (gender === "male") {
    // console.log("Male Name")
    nameFakeApi = "http://www.babynamemap.com/api" + '"' + name + '"'
  } else if (gender === "female") {
    // console.log("Female name")
    nameFakeApi = "https://api.name-fake.com/english-united-states/female/:" + '"' + name + '"'
  } else {

    // console.log("Unisex: " + name)
    nameFakeApi = "https://www.nameapi.org/en/register/4de764b05c46126f8ac0786b1e02db9d-user1" + '"' + name + '"'
  }
  //console.log(nameFakeApi)
  result(nameFakeApi, err)

})


// function that does the api
function result(nameFakeApi, err) {



  $.ajax({
      headers: {
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
      },
      url: "https://www.nameapi.org/en/register/",
      method: "GET",
      success: function(results){
        var gender = results.response.any;
        var prefLang = results.response.any;
        $('#results').append(gender+ ' has ' + prefLang + ' name.');
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
      function nameInput(searchName) {
        $('#nameDiv').empty()
        // appends result  
        $('#nameDiv').append()
      }

      //define api values to be pulled
      function writeUserData(prefLang, maleName, femaleName) {
        connectionRef.push({
          prefLang: prefLang,
          maleName: maleName,
          femaleName: femaleName

        })
      }};