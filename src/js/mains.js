$.ajax({
    dataType: 'JSON',
    url: 'http://localhost:8080/RestWebService/rest/hello',
    type: "GET",
    success: function (data) {
        alert('Application ' + data.application + ' is ALIVE!!');
    },
    error: function () {
        alert("Application not found");
    }
});
