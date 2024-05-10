$(document).ready(function () {
    $("#suite").hide();
    $("#read").click(function () {
        $("#suite").toggle();
        if ($("#suite").is(':visible'))
            $("#read").html("Lire moins");
        else
            $("#read").html("Lire plus");
    });
});

