//  When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM 
//When the button to remove is clicked, remove each title and rating from the DOM

// **********FUNCTIONS TO EXECUTE*********
//declare variables
let currentId = 0;
let movieList = [];
$(function(){
$('#movie-form').on('submit', function (e){
    e.preventDefault();
    let title = $("#movie-title").val ();
    let rating = $("#rating").val ();

    let movieData = {title, rating, currentId};
    const dataToAppend = createMovieData(movieData);

    currentId++
    movieList.push(movieData);

    $("#movie-listing-body").append(dataToAppend);
    $("#movie-form").trigger("reset");
});
// delete button- when clicked
    //remove specific data from table
    //remove from DOM
    $("tbody").on("click", ".btn.btn-danger", function (evt){
        let movieIndex= movieList.findIndex(movie =>movie.currentId === +$(evt.target).data("deleteId"))

        movieList.splice
        (movieIndex, 1)

        $(evt.target)
            .closest("tr")
            .remove();
    });

//sort A-Z vice versa
    $(".fas").on("click", function(evt){
        let direction = $(evt.target).hasClass ('fa-sort-down')? "down": "up";
        let keyToSort = $(evt.target).attr ('id');
        let sortedMovies = sortBy(movieList, keyToSort, direction);
 
//Empty the table
$("#movie-listing-body").empty();

//loop over sortedMovies and append a new row
for (let movieData of sortedMovies){
    const dataToAppend = createMovieData(movieData);
    $
    ("#movie-listing-body").append (dataToAppend);
}
//toggle the arrow
    $(evt.target).toggleClass("fa-sort-down");
    $(evt.target).toggleClass("fa-sort-up");
});
});

function sortBy(array, keyToSort, direction){
    return array.sort(function(a,b){
        //converting this string to a number 
        if(keyToSort === 'rating'){
            a[keyToSort] = +a [keyToSort];
            b[keyToSort] =+b [keyToSort];
        }
        if(a[keyToSort] > b[keyToSort]){
            return direction === "up" ? 1 : -1;
        }else if (b[keyToSort] > a[keyToSort]){
            return direction === "up" ? -1:1;
        }
        return 0;
        });
        }

    //create data table
    //submit form data to table
    //append table to add data
    //create delete button
    //reset form
function createMovieData(movieData){
    return `
    <tr>
        <td>${movieData.title}</td>
        <td>${movieData.rating}</td>
        <td>
        <button class = "btn btn-danger"
        data-delete-id = ${movieData.currentId}>
        delete movie
        </button>
        </td>
    </tr>
    `;
}




//sort low to high vice versa



