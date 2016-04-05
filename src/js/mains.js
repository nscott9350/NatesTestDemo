$.ajax({
    type: "GET",
    url: 'http://appb.example.com/RestWebService-1/rest/hello?callback=?',
    jsonpCallback: 'callback',
    dataType: 'jsonp',
    success: function (data) {
        alert('Application ' + data.application + ' is ALIVE!!');
    },
    error: function () {
        alert("Application not found");
    }
})(jQuery);
