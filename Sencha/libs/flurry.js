if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.flurry) {
    window.plugins.flurry = (function(){
        return {
            logEvent: function(eventName, params, timed){
                cordova.exec(null, null, "Flurry", "logEvent", [eventName, params, timed]);
            }
        };
    }());
}