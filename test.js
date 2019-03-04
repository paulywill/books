
const apiKey = 'AIzaSyB1MYJPUGXWOx13zt6fZY0zP4oiElQNezw'


function handleClick() {
    document.querySelector('.search-book').addEventListener('click', getBook);
}


function convertHTML(str) {
    newStr = str.replace(/ /g, "+");
    return newStr
}

function getBook() {

    let titleHolder = document.getElementById("title").value;
    console.log("titleHolder: " + titleHolder);
    let title = convertHTML(titleHolder)
    console.log("the title: " + title);
    url = `https://www.googleapis.com/books/v1/volumes?q=${title}&projection=full&key=${apiKey}`
    console.log("url: " + url);



    fetch(url)
        .then(response => response.json())
        .then(data => {
            let items = data.items;
            console.log(data.items); 
            for (var i = 0; i < items.length; i++) {
                
                // Volume info
                let item = items[i].volumeInfo;
                console.log("items[i].volumeInfo: " + items[i].volumeInfo);

                // Author
                let author = item.authors;
                console.log("item.authors: " + item.authors);
    
                // Image link
                let imgLink = item.imageLinks.thumbnail;
                console.log("item.imageLinks.thumbnail: " + item.imageLinks.thumbnail);

                // Title
                let title = item.title;
                console.log("item.title: " + item.title);
            }    
        
        })
        .catch(error => {
            console.log(error);
        });

    
         

}