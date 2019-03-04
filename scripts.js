/*

document.getElementById(".search-book").addEventListener("click", bookSearch);
var titleValue = document.querySelector('.title');

console.log('titleValue: ' + titleValue);

const apiKey = "AIzaSyB1MYJPUGXWOx13zt6fZY0zP4oiElQNezw"


function convertHTML(str) {
    newStr = str.replace(" ", "+");
    return newStr
}

function bookSearch(query) {
    console.log("query: " + query);
    strQry_head = "https://www.googleapis.com/books/v1/volumes?q=";
    strQry_tail = "=full&key=AIzaSyB1MYJPUGXWOx13zt6fZY0zP4oiElQNezw";
    console.log("convertHTML: " + convertHTML(query));
    bQuery = "'" + strQry_head.concat(convertHTML(query), strQry_tail) + "'";
    console.log("bQuery: " + bQuery);

     fetch(bQuery)
         .then(function (response) {
             return response.json();
         })
         .then(function (myJson) {
             console.log(JSON.stringify(myJson));
         });

}


*/
