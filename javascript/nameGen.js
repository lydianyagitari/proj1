
  var config = {
    apiKey: "AIzaSyCJWu6_DsEPfreJ2YSeY_9WzI18_7jt3Hg",
    authDomain: "music-playermp3.firebaseapp.com",
    databaseURL: "https://music-playermp3.firebaseio.com",
    projectId: "music-playermp3",
    storageBucket: "music-playermp3.appspot.com",
    messagingSenderId: "622074746789"
  };
  firebase.initializeApp(config);


var firstName =[]
var secondName =[]
var gender =[]


var database = firebase.database()
var a = '/connections_'+ Math.floor(Math.random()*1000)
//console.log("random : " + a)
var connectionRef = database.ref(a);
var connectedRef =  database.ref(".info/connected");
var counter=0;
var result;
var instaName="";


//grabbing the user input from html

$("#add").on("click",function(event){
  event.preventDefault()
  console.log("here")
  var prefLang = $("#prefLang").val()
  var gender = $("#gender").val()
  var nameFakeApi; 
  var carsApi; 
  var flag = 0
  if (prefLang !=== "" && gender === "" ){
    // console.log("no input")
    carsApi = "https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key={your API key}"
    
    
  }
  else if (gender === "male"){
    // console.log("Male Name")
     nameFakeApi = "https://api.name-fake.com/english-united-states/male/:+ '"' + name +'"'
  }
  else if (gender === "female") {
    // console.log("Female name")
     nameFakeApi = "https://api.name-fake.com/english-united-states/female/:+ '"' + name +'"'
  } 
  else {
    
    // console.log("Unisex: " + name)
   nameFakeApi = "https://api.name-fake.com/random/random:"+ '"' + name +'"' }
  //console.log(deezerApi)
 result(nameFakeApi, err)
  
})


// function that does the api
function result(a , err){
 
  

  $.ajax({
    headers : {"Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"},
    url : deezerApi,
    method: "GET"

  }).then(function(response){
    console.log(response)
    if(result == null){
      result = response.data.slice(1);
      counter = 0;
    }else{
      //newCounter = result.length+1;

      result = result.slice(0, counter).concat(response.data.slice(1)).concat(result.slice(counter));
      counter;
      result = result.concat(response.data);
    }
  
  
 
  
};
//function that will take input from html
function music(mp3path){
  $('#nameDiv').empty()
  // appends result  
  $('#nameDiv').append() 
}

//define api values to be pulled
function writeUserData(prefLang,maleName,femaleName){
  connectionRef.push({
  prefLang :prefLan,
   maleName : maleNam,
   femaleName : femaleNam
 
  })
};


  






