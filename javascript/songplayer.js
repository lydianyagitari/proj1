
  var config = {
    apiKey: "AIzaSyCJWu6_DsEPfreJ2YSeY_9WzI18_7jt3Hg",
    authDomain: "music-playermp3.firebaseapp.com",
    databaseURL: "https://music-playermp3.firebaseio.com",
    projectId: "music-playermp3",
    storageBucket: "music-playermp3.appspot.com",
    messagingSenderId: "622074746789"
  };
  firebase.initializeApp(config);


var playlistId =[]
var playlistURL =[]
var year =[]
var database = firebase.database()
var a = '/connections_'+ Math.floor(Math.random()*1000)
//console.log("random : " + a)
var connectionRef = database.ref(a);
var connectedRef =  database.ref(".info/connected");
var counter=0;
var result;
var currTrack="";
var currArtist="";

//grabbing the artist and song from html

$("#add").on("click",function(event){
  event.preventDefault()
  console.log("here")
  var artist = $("#inputArtist").val()
  var song = $("#inputSong").val()
  var deezerApi; 
  var flag = 0
  if (artist === "" && song === "" ){
    // console.log("no input")
    
  }
  else if (artist === ""){
    // console.log("song only")
     deezerApi = "https://api.deezer.com/search?q=track:"+ '"' + song +'"'

  }
  else if (song === ""){
    // console.log("artist only")
     deezerApi = "https://api.deezer.com/search?q=artist:"+ '"' + artist +'"'
  }
  else {
    // console.log("song & artist")
    // console.log("artist : " + artist)
    // console.log("song : " + song)
   deezerApi = "https://api.deezer.com/search?q=artist:"+ '"' + artist +'"'  +" track:"+ '"' + song +'"' 
  }
  //console.log(deezerApi)
  play(deezerApi, flag)
  
})


// deezer api
function play(a , flag){
 
  
  var deezerApi = a
  console.log("play: " + deezerApi)
  var flag = flag;
  console.log(flag)

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
  
  
    playMusic(result, result[counter].preview)
  // console.log (playlistId)
    //connectionRef.remove()
  })

};

function playMusic(result, mp3Path){  

  music(mp3Path);
  
};
//function that will insert media player into html
function music(mp3path){
  $('#playDiv').empty()
  // the audio control tag and source  
  $('#playDiv').append(
    "<audio id='myAudio' controls autoplay><source src='"+mp3path+"' type='audio/mpeg'></audio>"
  ) 
}

//define api values to be pulled
function writeUserData(playlistURL,trackName,artist,album){
  connectionRef.push({
    playlistURL :playlistURL,
    trackName : trackName,
    artist : artist,
    album : album,
  })
};

//function that plays a track again when play button is clicked
   $('#playAgain').on('click',function(){
    var aud = document.getElementById("myAudio");
    // 
      counter= $(this).data("counter")
      console.log("counter is :" + counter)
      //counter =;
      aud.src=result[counter].preview
  
  })
  






