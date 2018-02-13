const movieApi = 'https://jsonmovies.herokuapp.com/movie/'
$(document).ready(function() {
$.get(movieApi)
.then(function(data){
  for(i=1; i<data.length; i++) {
    var filterGenre = data[i].genres;
    var showMovieId = data[i].movie_id;
    var showMovies = data[i].title;
    var movieItem;
    // get movies by genre------------------------------->
    var animation = (/\Animation/g);
    var animationResult = filterGenre.match(animation)
      if(animationResult !== null) {
    var animationList = data[i].title;
    $('#postAnimation').append(`
       <tr> 
         <td>${animationList}</td>
       </tr>`)
   }
   var romance = (/\Romance/g);
   var romanceResult = filterGenre.match(romance)
     if(romanceResult !== null) {
   var romanceList = data[i].title;
   $('#postRomance').append(`
      <tr> 
        <td>${romanceList}</td>
      </tr>`)
  }  
    var adventure = (/\Adventure/g);
    var adventureResult = filterGenre.match(adventure)
      if(adventureResult !== null) {
    var adventureList = data[i].title;
    $('#postAdventure').append(`
       <tr> 
         <td>${adventureList}</td>
       </tr>`)
   }   
    var children = (/\Children/g);
    var childrenResult = filterGenre.match(children)
     if(childrenResult !== null) {
    var childrenList = data[i].title;
    $('#postChildren').append(`
       <tr> 
         <td>${childrenList}</td>
       </tr>`)
    }  
    var comedy = (/\Comedy/g);
    var comedyResult = filterGenre.match(comedy)
     if(comedyResult !== null) {
    var comedyList = data[i].title;
    $('#postComedy').append(`
       <tr> 
         <td>${comedyList}</td>
       </tr>`)
    }  
    var fantasy = (/\Fantasy/g);
    var fantasyResult = filterGenre.match(fantasy)
     if(fantasyResult !== null) {
    var fantasyList = data[i].title;
    $('#postFantasy').append(`
       <tr> 
         <td>${fantasyList}</td>
       </tr>`)
    }
    var drama = (/\Drama/g);
    var dramaResult = filterGenre.match(drama)
     if(dramaResult !== null) {
    var dramaList = data[i].title;
    $('#postDrama').append(`
        <tr> 
         <td>${dramaList}</td>
       </tr>`)
    }  
    var action = (/\Action/g);
    var actionResult = filterGenre.match(action)
     if(actionResult !== null) {
     var actionList = data[i].title;
     $('#postAction').append(`
        <tr> 
          <td>${actionList}</td>
        </tr>`)
         }    
    var crime = (/\Crime/g);
    var crimeResult = filterGenre.match(crime)
     if(crimeResult !== null) {
    var crimeList = data[i].title;
    $('#postCrime').append(`
       <tr> 
         <td>${crimeList}</td>
       </tr>`)
    }  
    var thriller = (/\Thriller/g);
    var thrillerResult = filterGenre.match(thriller)
     if(thrillerResult !== null) {
    var thrillerList = data[i].title;
    $('#postThriller').append(`
       <tr> 
         <td>${thrillerList}</td>
       </tr>`)
    }
    var horror = (/\Horror/g);
    var horrorResult = filterGenre.match(horror)
     if(horrorResult !== null) {
    var horrorList = data[i].title;
    $('#postHorror').append(`
       <tr> 
         <td>${horrorList}</td>
       </tr>`)
    }
    
    var sciFi = (/\Sci-Fi/g);
    var sciFiResult = filterGenre.match(sciFi)
     if(sciFiResult !== null) {
    var sciFiList = data[i].title;
    $('#postScifi').append(`
       <tr> 
         <td>${sciFiList}</td>
       </tr>`)
    }
    
    var mystery = (/\Mystery/g);
    var mysteryResult = filterGenre.match(mystery)
     if(mysteryResult !== null) {
    var mysteryList = data[i].title;
    $('#postMystery').append(`
       <tr> 
         <td>${mysteryList}</td>
       </tr>`)
    }
    
    var documentary = (/\Documentary/g);
    var documentaryResult = filterGenre.match(documentary)
     if(documentaryResult !== null) {
    var documentaryList = data[i].title;
    $('#postDocumentary').append(`
       <tr> 
         <td>${documentaryList}</td>
       </tr>`)
    }
    
    var imax = (/\IMAX/g);
    var imaxResult = filterGenre.match(imax)
     if(imaxResult !== null) {
    var imaxList = data[i].title;
    $('#postImax').append(`
       <tr> 
         <td>${imaxList}</td>
       </tr>`)
    }
    
    var war = (/\War/g);
    var warResult = filterGenre.match(war)
     if(warResult !== null) {
    var warList = data[i].title;
    $('#postWar').append(`
       <tr> 
         <td>${warList}</td>
       </tr>`)
    }
    
    var musical = (/\Musical/g);
    var musicalResult = filterGenre.match(musical)
     if(musicalResult !== null) {
    var musicalList = data[i].title;
    $('#postMusical').append(`
       <tr> 
         <td>${musicalList}</td>
       </tr>`)
    }
  }   

})
})
// get all movies---------------------------------->
$(document).ready(function() {
  $.get(movieApi)
  .then(showMovie)
});
var $movieItem;
function showMovie(data) {
  data.forEach(function(items) {
    $movieItem = $(`
                    <tr>
                      <td>${items.title}</td>
                      <td><button data-id='${items.id}' class='edit'>&#9998;</button></td>
                      <td><button data-id='${items.id}' class='delete-movie'>X</button></td>
                    </tr>
                  `)
    $movieItem.attr('data-title', items.title)
    $('#list').append($movieItem)
  })
}
$(document).on('click', '.edit', editMovie);
$(document).on('click', '.delete-movie', deleteMovie);

function editMovie(event) {
  const id = event.target.dataset.id;
  window.location = `edit.html?id=${id}`
}
// delete movies---------------------------------->
function deleteMovie(event) {
  const id = event.target.dataset.id;
  $.ajax({
    type: 'DELETE',
    dataType: 'json',
    url: `${movieApi}/${id}`,  
  }).then(result => {
    window.location = `erase.html?id=${id}`;
  });
}
// edit----------------------------------------->
function getIdFromQuery() {
  const parsedParts = window.location.search.split('=');
  const id = parsedParts[1];
  return id;
}
function getOne(id) {
  return $.get(`${movieApi}/${id}`)
}
$(() => {
  const id = getIdFromQuery();
  getOne(id)
    .then(newMovie => {
      $('#editMovieTitle').val(newMovie.title)
      $('#editMovieGenre').val(newMovie.genres);
      $('#btnEditSubmit').attr('href', `index.html?id=${newMovie.id}`)
      $('#btnEditSubmit').click((event) => {
        event.preventDefault();
        $.ajax({
          type: 'PUT',
          dataType: 'json',
          url: `${movieApi}/${id}`,
          data: {
            title: $('#editMovieTitle').val(),
            genres: $('#editMovieGenre').val()
          }
        }).then(result => {
          window.location = `index.html?id=${id}`;
        })
      })
    })
  })
// alert after movie edit
  $(document).ready(function() {
    $("#btnEditSubmit").click(function() {
      $('#myAlert').show('fade')
      setTimeout(function() {
        $("#myAlert").hide('fade');
      }, 2000);
    });
    $("#linkClose").click(function() {
      $("#myAlert").hide('fade')
    });
  });
// post movie----------------------------------------->
$(() => {
$('form').submit((event) => {
  event.preventDefault();
  const title = $('#movieTitle').val();
  const genres = $('#movieGenre').val();
  const newMovie = {
    title,
    genres
  };
  $.post(movieApi, newMovie)
 })
})
// alert message after post
$(document).ready(function() {
  $("#btnSubmit").click(function() {
    $('#myAlert').show('fade')
    setTimeout(function() {
      $("#myAlert").hide('fade');
    }, 2000);
  });
  $("#linkClose").click(function() {
    $("#myAlert").hide('fade')
  });
});


