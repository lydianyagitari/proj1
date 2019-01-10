//Pseudocode
//PICKING BABY NAMES FOR COUPLES/NEW MUMS/NEW PARENTS
//HELP PEOPLE WHO ARE LOOKING FOR NICKNAMES HAVE FUN
//PARENTS GET TO PICK NAMES FOR THEIR BABIES AND SOLVES COUPLES ARGUING ABOUT NAMES TO GIVE THEIR KIDS
//GIVES USERS A DAILY QUOTE
//Author Lydia Nyagitari

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
  var region = $("#region").val()
  var gender = $("#gender").val()
  var nameGenApi;
  var quote = quote;
  var author = author;
  var flag = "true"
  var err;
  if (region === "" && gender === "") {
    // console.log("no input")
    nameGenApi = "https://uinames.com/api/?gender=male" ;
    // + '"' + firstName & secondName + '"'


  } else if (gender === "male") {
    // console.log("Male Name")
    nameGenApi = "https://uinames.com/api/?gender=male" 
    // + '"' + firstName & secondName + '"'
  } else if (gender === "female") {
    // console.log("Female name")
    nameGenApi = " https://uinames.com/api/?gender=female" 
      // '"' + firstName & secondName + '"'
  } else {

    // console.log("Unisex: " + name)
    nameGenApi = "https://uinames.com/api/?ext" + '"' + firstName & secondName + '"'
  }
  //console.log(nameGenApi)
  result(nameGenApi, err)

})

//function that will take input from html
function nameInput(nameDiv) {
  $('#nameDiv').empty()
  // appends result  
  $('#nameDiv').append()
}
// function that does the names api
function result(nameGenApi, err) {



  $.ajax({
    headers: {
      "access-control-allow-headers": "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type,CORELATION_ID",

      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      contentType: 'application/x-www-form-urlencoded',
    },
    url: "https://uinames.com/api/?names",
    method: "GET"
    
    // ,
    // success: function (result) {
    //   var gender = result.response.gender;
    //   var region = result.response.gender;
    //   $('#result').append(gender + ' has ' + region + ' name')
    //   $('#result').html(gender + ' has ' + region + ' name');
    // }

  }).then(function (response) {
    console.log(response.name)
    var theName = $("<p>");
    theName.text(response.name);

    $("#theName").append(theName);
    // if (result == null) {
    //   result = response.data.slice(1);
    //   counter = 0;
    // } else {
    //   //newCounter = result.length+1;

    //   result = result.slice(0, counter).concat(response.data.slice(1)).concat(result.slice(counter));
    //   counter;
    //   result = result.concat(response.data);
    // }




  });


  //define api values to be pulled
  function writeUserData(region, maleName, femaleName) {
    connectionRef.push({
      region: region,
      maleName: maleName,
      femaleName: femaleName

    })
    // function for Random Quotes 
    //GIVES USERS A DAILY QUOTE

    $('#quotebutton').click(function() {
      $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
        .done(update)
        .fail(handleErr);
    });
    
    $('#quotebutton').click(function() {
      $.ajax({
          url: "https://api.forismatic.com/api/1.0/",
          jsonp: "jsonp",
          dataType: "jsonp",
          data: {
            method: "getQuote",
            lang: "en",
            format: "jsonp"
          }
        })
        .done(update)
        .fail(handleErr);
    });
    
    function update(response) {
      $('#logquote').prepend('<pre>' + $('#respond').html() + '</pre>');
    
      $('#respond').html(JSON.stringify(response));
    }
    
    function handleErr(jqxhr, textStatus, err) {
      console.log("Request Failed: " + textStatus + ", " + err);
    }
  }
};