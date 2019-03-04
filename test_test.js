//https://www.googleapis.com/books/v1/volumes?q=flower+power&projection=full&key=AIzaSyB1MYJPUGXWOx13zt6fZY0zP4oiElQNezw

document.querySelector('.search-book').addEventListener('click', getBook);
const apiKey = 'AIzaSyB1MYJPUGXWOx13zt6fZY0zP4oiElQNezw'


function convertHTML(str) {
    newStr = str.replace(/ /g, "+");
    return newStr
}


async function getBook() {

    let titleHolder = document.getElementById("title").value;
    console.log("titleHolder: " + titleHolder);
    let title = convertHTML(titleHolder)
    console.log("the title: " + title);
    url = `https://www.googleapis.com/books/v1/volumes?q=${title}&projection=full&key=${apiKey}`
    console.log("url: " + url);
    
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&projection=full`);
    let data = await response.json()
    .then(data => console.log(data));
}


  