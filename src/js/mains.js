$.ajax({
    dataType: 'jsonp',
    url: 'http://appb.example.com/RestWebService-1/rest/hello',
    type: "GET",
    success: function (data) {
        alert('Application ' + data.application + ' is ALIVE!!');
    },
    error: function () {
        alert("Application not found");
    },
    jsonp: 'jsonp'
});
