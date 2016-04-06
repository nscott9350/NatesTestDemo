$.ajax({
    url: 'http://appb.example.com/RestWebService-1/rest/hello',
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'callback',
    success: function(data){
        alert('Application ' + data.application + ' is ALIVE!!');
    }
});
