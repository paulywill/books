
document.querySelector('.search-book').addEventListener('click', getBook() );

function convertHTML(str) {
    newStr = str.replace(/ /g, "+");
    return newStr
}

function getBook(){
    const apiKey = 'AIzaSyB1MYJPUGXWOx13zt6fZY0zP4oiElQNezw'
    let titleHolder = document.getElementById("title").value;
    let title = convertHTML(titleHolder)
    console.log("the title: " + title);
    url = `https://www.googleapis.com/books/v1/volumes?q=${title}:keyes&key=${apiKey}`
    console.log("url: " + url);
    
    
    
    fetch(url)        
        .then(function (res) {
                 return res.json();
             })
        .then(function (data) {
            console.log(data.items);
            let items = data.items;
            for (var i = 0; i < items.length; i++) {
                // Volume info
                let item = items[i].volumeInfo;
                console.log(item.title)
                
            }    
        });
   
}

/*
bQuery = 'https://www.googleapis.com/books/v1/volumes?q=flowers&projection=lite&key=AIzaSyB1MYJPUGXWOx13zt6fZY0zP4oiElQNezw';
fetch(bQuery)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    });
*/