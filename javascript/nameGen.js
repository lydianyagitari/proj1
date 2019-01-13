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


// function for random Quotes
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function randomQuote() {
  fetch(endpoint)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      displayQuote(data.message);
    })
    .catch(function () {
      console.log("An error occurred");
    });

}
//function to display Quotes
function displayQuote(quote) {
  const quoteGenius =
    document.querySelector('#quoteGenius');
  quoteGenius.textContent = quote;

}

const quoteButton =
  document.querySelector('#quoteButton');
quoteButton.addEventListener('click', randomQuote);
randomQuote();


//grabbing the user input from html

$("#search").on("click", function (event) {
  event.preventDefault()
  console.log("here")
  var gender = $("#gender").val()
  var nameGenApi;
  var quote = quote;
  var author = author;
  var flag = "true"
  var err;
  if (gender === "") {
    // console.log("no input")
    nameGenApi = "https://uinames.com/api/?gender=male";
    // + '"' + firstName & secondName + '"'


  } else if (gender === "male") {
    console.log("Male Name")
    nameGenApi = "https://uinames.com/api/?gender=male" +
      '"' + firstName & secondName + '"'
  } else if (gender === "female") {
    console.log("Female name")
    nameGenApi = " https://uinames.com/api/?gender=female"
    '"' + firstName & secondName + '"'
  } else {

    //console.log("Unisex: " + name)
    nameGenApi = "https://uinames.com/api/?ext" + '"' + firstName & secondName + '"'
  }
  console.log(nameGenApi)
  result(nameGenApi, err)

})

//function that will take input from html
function nameInput(theName) {
  $('#theName').empty()
  // appends result  
  $('#theName').append()
}
// function that does the names api
function result(nameGenApi, err) {
  console.log("theName")


  $.ajax({
    headers: {
      "access-control-allow-headers": "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type,CORELATION_ID",

      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      contentType: 'application/x-www-form-urlencoded',
    },
    url: "https://uinames.com/api/?names",
    method: "GET"

      ,
    success: function (result) {
      var gender = result.response.gender;
      var region = result.response.gender;
      $('#result').append(gender + ' has ' + region + ' name')
      $('#result').html(gender + ' has ' + region + ' name');
    }

  }).then(function (response) {
    console.log(response.name)
    var theName = $("<p>");
    theName.text(response.name);

    $("#theName").append(theName);





  });






};