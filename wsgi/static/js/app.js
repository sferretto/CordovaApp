
var APP = {
    
    init_readPositions_click: function () {
        $("#buttonReadPositions").on('click', function () {
            $.ajax(
                    {
                        method: "POST",
                        url: "cordovasite-sferretto.rhcloud.com",
                        contentType: "application/json",
                        crossDomain: true,
                        type: "json",
                        dataType: "text",
                        success: function (data) {
                            $("#campoTextPositions").html(data);
                        },
                        error: function () {
                            $("#campoTextPositions").html("errore");
                        }
                    });
        });
    },
    init_cleanPositions_click: function(){
        $("#buttonCleanPositions").on('click', function(){
            $.ajax(
                    {
                        method: "POST",
                        url: "cordovasite-sferretto.rhcloud.com",
                        contentType: "application/json",
                        crossDomain: true,
                        type: "json",
                        dataType: "text",
                        success: function (data) {
                            alert("cancellato tutto!");
                        },
                        error: function () {
                            alert("errore");
                        }
            });
        });
    }
};
$(document).ready(function () {
    
    APP.init_readPositions_click();
    APP.init_cleanPositions_click();
    
});
