/**
* MOHW Filter Plugin for BBLog
*
* @author Tony Ashworth
* @version 1.0
* @url http://getbblog.com
*/

var handler = function(){
    $.each($(".feed-single-item"), function (index, section){
        if(section != null && $(section).html().indexOf('common-game-4096-1') !== -1){
            $(section).hide();
        };
    });
};

BBLog.bindDomChange(handler);
handler();