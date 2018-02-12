// // get all movies---------------------------------->
// $(document).ready(function() {
//   $.get(movieApi)
//   .then(showMovie)
// });
// var $movieItem;
// function showMovie(data) {
//   data.forEach(function(items) {
//     // console.log(items);
//     $movieItem = $(`
//       <tr>
//         <td>${items.movie_id}</td>
//         <td>${items.title}</td>
//         <td><button data-id='${items.id}' class='edit'>Edit Movie</button></td>
//       </tr>
//     `)
//     console.log(items.title);
//     $movieItem.attr('data-movie_id', items.movie_id)
//     // $movieItem.attr('data-title', items.title)
//     $movieItem.attr('data-genres', items.genres)
//     $('#list').append($movieItem)
//   })
// }
// $(document).on('click', '.edit', editMovie)
// function editMovie(event) {
//   const id = event.target.dataset.id;
//   window.location = `edit.html?id=${id}`
// }