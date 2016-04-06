$.ajax({
    url: 'http://appb.example.com/RestWebService-1/rest/hello',
    type: 'GET',
    dataType: 'json',
    jsonp: 'callback',
    success: function(){
        alert(' is ALIVE!!');
    }
});
