function requestMovies() {
  return {
    type: "REQUEST-MOVIES",
  };
}



export function fetchAllMovies(url) {
  return function (dispatch) {
    var httpRequest = new XMLHttpRequest();

    dispatch(requestMovies());

    httpRequest.onreadystatechange = function () {

      switch (httpRequest.readyState) {
        case XMLHttpRequest.UNSENT:
          console.log("request not sent yet");
          break; 
        case XMLHttpRequest.LOADING:
          console.log("receiving some data");
          break;
        case XMLHttpRequest.DONE:
          console.log("loading finished");
          console.log(httpRequest.responseText);

      }
    };

    httpRequest.open("GET", url, true);
    httpRequest.send();

  };
}

// fetchMovies;