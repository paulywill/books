document.querySelector('.search-book').addEventListener('click', getBook);
const apiKey = 'AIzaSyB1MYJPUGXWOx13zt6fZY0zP4oiElQNezw'


function convertHTML(str) {
    newStr = str.replace(/ /g, "+");
    return newStr
}

function getBook() {

    let titleHolder = document.getElementById("title").value;
    console.log("titleHolder: " + titleHolder);
    let title = convertHTML(titleHolder)
    console.log("the title: " + title);
    url = `https://www.googleapis.com/books/v1/volumes?q=flower+power&projection=full`
    console.log("url: " + url);



    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Prints result from `response.json()` in getRequest
        })
        .catch(error => console.error(error))
}