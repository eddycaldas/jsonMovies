

$.get('https://jsonmovies.herokuapp.com/movie/')
.then(function(data){
  for(i=1; i<data.length; i++) {
    var filterGenre = data[i].genres;
    
    var animation = (/\Animation/g);
    var animationResult = filterGenre.match(animation)
      if(animationResult !== null) {
    var animationList = data[i].title;
    // console.log(animationList);
   }
 
 
   var romance = (/\Romance/g);
   var romanceResult = filterGenre.match(romance)
     if(romanceResult !== null) {
   var romanceList = data[i].title;
   // console.log(romanceList);
  }
    
    var adventure = (/\Adventure/g);
    var adventureResult = filterGenre.match(adventure)
      if(adventureResult !== null) {
    var adventureList = data[i].title;
    // console.log(adventureList);
   }
     
    var children = (/\Children/g);
    var childrenResult = filterGenre.match(children)
     if(childrenResult !== null) {
    var childrenList = data[i].title;
    // console.log(childrenList);
    }
    
    var comedy = (/\Comedy/g);
    var comedyResult = filterGenre.match(comedy)
     if(comedyResult !== null) {
    var comedyList = data[i].title;
    // console.log(comedyList);
    }
    
    var fantasy = (/\Fantasy/g);
    var fantasyResult = filterGenre.match(fantasy)
     if(fantasyResult !== null) {
    var fantasyList = data[i].title;
    // console.log(fantasyList);
    }
    
    var drama = (/\Drama/g);
    var dramaResult = filterGenre.match(drama)
     if(dramaResult !== null) {
    var dramaList = data[i].title;
    // console.log(dramaList);
    }
    
    var action = (/\Action/g);
    var actionResult = filterGenre.match(action)
     if(actionResult !== null) {
     var actionList = data[i].title;
    console.log(actionList);
    }
    
    var crime = (/\Crime/g);
    var crimeResult = filterGenre.match(crime)
     if(crimeResult !== null) {
    var crimeList = data[i].title;
    // console.log(crimeList);
    }
    
    var thriller = (/\Thriller/g);
    var thrillerResult = filterGenre.match(thriller)
     if(thrillerResult !== null) {
    var thrillerList = data[i].title;
    // console.log(thrillerList);
    }
    
    var horror = (/\Horror/g);
    var horrorResult = filterGenre.match(horror)
     if(horrorResult !== null) {
    var horrorList = data[i].title;
    // console.log(horrorList);
    }
    
    var sciFi = (/\Sci-Fi/g);
    var sciFiResult = filterGenre.match(sciFi)
     if(sciFiResult !== null) {
    var sciFiList = data[i].title;
    // console.log(sciFiList);
    }
    
    var mistery = (/\Mistery/g);
    var misteryResult = filterGenre.match(mistery)
     if(misteryResult !== null) {
    var misteryList = data[i].title;
    // console.log(misteryList);
    }
    
    var documentary = (/\Documentary/g);
    var documentaryResult = filterGenre.match(documentary)
     if(documentaryResult !== null) {
    var documentaryList = data[i].title;
    // console.log(documentaryList);
    }
    
    var imax = (/\IMAX/g);
    var imaxResult = filterGenre.match(imax)
     if(imaxResult !== null) {
    var imaxList = data[i].title;
    // console.log(imaxList);
    }
    
    var war = (/\War/g);
    var warResult = filterGenre.match(war)
     if(warResult !== null) {
    var warList = data[i].title;
    // console.log(warList);
    }
    
    var musical = (/\Musical/g);
    var musicalResult = filterGenre.match(musical)
     if(musicalResult !== null) {
    var musicalList = data[i].title;
    // console.log(musicalList);
    }
  
}  
})
