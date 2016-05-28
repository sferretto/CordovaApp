/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//author : lucabonfante

var APP = {
    init_leggiCampoText1_click: function () {
        $('#leggiCampoText1').on('click', function ()
        {
            numeroReg = $("#campoText1").val();
            $.ajax(
                    {method: "POST",
                        url: "/alunnoByNumeroReg/",
                        contentType: 'application/json',
                        crossDomain: true,
                        type: "json",
                        data: JSON.stringify({"numeroReg": numeroReg}),
                        dataType: "json",
                        success: function (data) {
                            contenuto = data.numeroReg + " " +
                                        data.nome + " " +
                                        data.cognome + " " +
                                        data.annoNascita;
                            $("#campoText1-div").html(contenuto);
                        },
                        error: function (data) {
                            $("#campoText1-div").html("errore");
                        }
                    });
        });
    },
    init_leggiCampoText2_click: function () {
        $('#leggiCampoTextRegistrazione').on('click', function ()
        {
            numeroReg = $("#campoTextNumReg").val();
            nome = $("#campoTextNome").val();
            cognome = $("#campoTextCognome").val();
            annoNascita = $("#campoTextAnnoNascita").val();
            $.ajax(
                    {method: "POST",
                        url: "/insertAlunnoPOST/",
                        contentType: 'application/json',
                        crossDomain: true,
                        type: "json",
                        data: JSON.stringify({"numeroReg": numeroReg, "nome": nome, "cognome": cognome, "annoNascita": annoNascita}),
                        dataType: "json",
                        success: function (data) {
                            alert("ok");
                        },
                        error: function () {
                            alert("errore");
                        }
                    });
        });
    },
    init_printDizionario_click: function () {
        $('#leggiDizionario').on('click', function () {
            $.ajax(
                    {
                        method: "POST",
                        url: "/leggiDizionario/",
                        contentType: "application/json",
                        crossDomain: true,
                        type: "json",
                        dataType: "text",
                        success: function (data) {
                            $("#campoText3-div").html(data);
                        },
                        error: function () {
                            $("#campoText3-div").html("errore");
                        }
                    });
        });

    },
    init_coordinate_click: function () {
        $('#inviaCoordinate').on('click', function () {
            longitude = $('#longitude').val();
            latitude = $('#latitude').val();
            date = $('#date').val();
            $.ajax(
                    {
                        method: "POST",
                        url: "/insertPosition/",
                        contentType: "application/json",
                        crossDomain: true,
                        type: "json",
                        data: JSON.stringify({"longitude": longitude, "latitude": latitude, "date": date}),
                        dataType: "json",
                        success: function (data) {
                            alert('ok');
                        },
                        error: function () {
                            alert('errore');
                        }
                    });
        });
    },
    init_readPositions_click: function () {
        $("#buttonReadPositions").on('click', function () {
            $.ajax(
                    {
                        method: "POST",
                        url: "/readPositions/",
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
                        url: "/cleanPositions/",
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

    APP.init_leggiCampoText1_click();
    APP.init_leggiCampoText2_click();
    APP.init_printDizionario_click();
    APP.init_coordinate_click();
    APP.init_readPositions_click();
    APP.init_cleanPositions_click();
});


