$.ajax({
    type: "GET",
    url: 'http://appb.example.com/RestWebService-1/rest/hello',
    jsonpCallback: 'jsonpcallback',
    jsonp: 'callback',
    contentType: "application/javascript",
    dataType: 'jsonp',
    success: function (data) {
        alert('Application ' + data.application + ' is ALIVE!!');
    },
    error: function (e) {
        alert(e.message);
    }
});

function callback(data){
    alert('Application ' + data.application + ' is ALIVE!!');
}

function jsonpcallback(data){
    alert('Application ' + data.application + ' is ALIVE!!');
}
