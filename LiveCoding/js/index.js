let savedData = null;

let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=65aaabc0ccc64c9fb10c353ce53b1f38";

let search = function (keyword) {
    let searchUrl = url + `&q=${keyword}`;
    callApi(searchUrl);
}

let showAll = function (){
    document.getElementById("Results").style.display = "grid";
    document.getElementById("SingleResult").style.display = "none";
}

let handleClick = function(elementNum){
    // console.log(elementNum);
    console.log(savedData[elementNum]);
    // I will create a html
    let htmlChunk = "template data";
    document.getElementById("SingleResult").innerHTML = htmlChunk;
    document.getElementById("Results").style.display = "none";
} 

let handleSearch = function () {
    if (event.keyCode == 13) {
        var searchInput = document.getElementById("SearchBox");
        search(searchInput.value);
    }
}

let prepareHTMLFromData = function (dataArr) {
    let finalHTML = '';
    if (dataArr.length == 0) {
        document.getElementById("Results").innerHTML = "No results";
        document.getElementById("ResultCount").innerHTML = ""
        return;
    }
    for (let i = 0; i < dataArr.length; i++) {
        console.log(dataArr[i]);
        let htmlString = `
            <div class="item" onclick="handleClick(${i})">
                <img class="imgStyle" src="${dataArr[i]["urlToImage"]}">
                <div>${dataArr[i]["title"]}</div>
                <div>${dataArr[i]["description"]}</div>
                <div>${dataArr[i]["author"]}</div>
            </div>`;

        finalHTML = finalHTML + htmlString;
        console.log(finalHTML);
    }

    document.getElementById("ResultCount").innerHTML = `Result Count: ${dataArr.length}`
    document.getElementById("Results").innerHTML = finalHTML;

}

let callApi = function (url) {
    let myPromise = fetch(url);
    myPromise.then(function (response) {
        response.json().then(
            function (responseInner) {
                if (responseInner.articles) {
                    savedData = [...responseInner.articles];
                    prepareHTMLFromData(responseInner.articles)
                }
            }
        )
            .catch(function (error) {
                console.log(error);
            });
    }).catch(function (error) {
        console.log(error);
    })
}

callApi(url);

