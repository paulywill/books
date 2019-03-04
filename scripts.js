function bookSearch(query) {

    console.log("query: " + query);

    var request = new XMLHttpRequest();
    strAPI_head = "https://www.googleapis.com/books/v1/volumes?q=";
    strAPI_tail = "=full&key=AIzaSyB1MYJPUGXWOx13zt6fZY0zP4oiElQNezw";

    console.log("searchRequest: " + strAPI_head.concat(query, strAPI_tail));

    request.open('GET', strAPI_head.concat(query, strAPI_tail));

    // Begin accessing JSON data here
    var data = JSON.parse(this.request);

    console.log("data: " + data);

    for (var i = 0; i < data.items.length; i++) {
        var item = data.items[i];
        console.log(item.volumeInfo.title);
    }

}