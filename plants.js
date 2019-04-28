/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var showing;

function showFlowerMode(mode) {
    var hiding;
    if(mode) {
        hiding = "basic";
        showing = "full";
    } else {
        showing = "basic";
        hiding = "full";
    }
    $("#flower-" + hiding).add("#flower-" + hiding + "-parts").css({ visibility: 'hidden' });
    $("#flower-" + showing).add("#flower-" + showing + "-parts").css({ visibility: '' });
    if(mode)
        $("#possible-parts").text("stigma, petal, anther, filament, style");
    else
        $("#possible-parts").text("flower, stem, roots, leaf");
}

$(document).ready(function() {
    showFlowerMode(false);
    $(".part-label").val("");
    $("#instructions-dialog").dialog({ modal: true });
    
    $("#check-answers-button").click(function() {
        var isCorrect = true;
        var $parts = $("#flower-" + showing + "-parts").find(".part-label");
        for(var i = 0; i < $parts.length; i++) {
            var el = $parts[i];
            if(el.id !== el.value) {
                if(isCorrect)
                    $("#incorrect-dialog").dialog({ modal: true });
                isCorrect = false;
                $(el).addClass("part-label-incorrect");
            } else
                $(el).removeClass("part-label-incorrect");
        }
        if(isCorrect) {
            $("#correct-dialog").dialog({ modal: true });
        }
    });
});