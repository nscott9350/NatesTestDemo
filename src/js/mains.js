$.ajax({
    type: "GET",
    url: 'http://appb.example.com/RestWebService-1/rest/hello',
    jsonp: 'callback',
    dataType: 'jsonp',
    success: function (data) {
        alert('Application ' + data.application + ' is ALIVE!!');
    },
    error: function (e) {
        alert(e.message);
    }
});
