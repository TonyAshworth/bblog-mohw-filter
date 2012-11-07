/**
* MOHW Filter Plugin for BBLog
*
* @author Tony Ashworth
* @version 2.0
* @url http://getbblog.com
*/

BBLog.handle("add.plugin", {

    id : "bblog-mohw-filter",
    name : "MOHW Filter",

    init : function(instance){
        $.each($(".feed-single-item"), function (index, section){
            if(section != null && $(section).html().indexOf('/mohw/') !== -1){
                $(section).hide();
            };
        });
    },

    domchange : function(instance){
        $.each($(".feed-single-item"), function (index, section){
            if(section != null && $(section).html().indexOf('/mohw/') !== -1){
                $(section).hide();
            };
        });
    },
    
    t : function(key){},
    cache : function(key, value){},
    storage : function(key, value){}
});