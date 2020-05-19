document.querySelector('.search-book').addEventListener('click', getBook);
//const apiKey = 'AIzaSyB1MYJPUGXWOx13zt6fZY0zP4oiElQNezw'

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

function handleClick() {
    clearBox("content");
    document.querySelector('.search-book').addEventListener('click', getBook);
}

function convertHTML(str) {
    newStr = str.replace(/ /g, "+");
    return newStr
}

function getBook() {
    let titleHolder = document.getElementById("title").value;
    if(titleHolder == ""){
        alert("Please provide search term");
        return false;
    }else{
        let title = convertHTML(titleHolder)
        url = `https://www.googleapis.com/books/v1/volumes?q=${title}&projection=full`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let items = data.items;
                for (var i = 0; i < items.length; i++) {
                    // Volume info
                    let item = items[i].volumeInfo;
                    // Author
                    let author = item.authors;
                    // Image link
                    let imgLink = item.imageLinks.thumbnail;
                    // Title
                    let title = item.title;
                    // Publishing Company
                    let publisher = item.publisher;
                    // Published Date
                    let publishedDate = item.publishedDate;
                    // Info Link  Date
                    let infoLink = item.infoLink;
                    document.getElementById("content").innerHTML += '<div class="card"><br>' +
                        '<img src=' + imgLink + '><br>' +
                        author + '<br>' +
                        title + '<br>' +
                        publisher + '<br>' +
                        publishedDate + '<br>' +
                        '<a href=' + infoLink + '>More Info</a></div>';
                }
            })
            .catch(error => {
                console.log(error);
            });
    }  
}