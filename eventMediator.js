/**
 *----------------------------------------------
 *                event mediator
 *----------------------------------------------
 *
 *   By Xiao Yuze (https://github.com/xiaoyuze88/eventMediator)
 *
 *   All modual can communicate through this mediator.
 *   It works like the event system, has `on`, `off`, `trigger` methods.
 *
 */


(function(factory) {

    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(factory);
    } else {
        // Browser globals:
        this.eventMediator = factory;
    }
})(function() {

    var mediator = (function() {

        var eventsList = {};

        function on(eventName, handler) {

            if (!eventsList.hasOwnProperty(eventName)) {
                eventsList[eventName] = [];
            }

            eventsList[eventName].push(handler);
        };

        function off(eventName, handler) {

            if (!eventsList.hasOwnProperty(eventName)) {
                return;
            }

            var index;

            // If have specific handler, remove it from event list
            if (handler) {
                if ((index = eventsList[type].indexOf(handler)) > -1) {
                    eventsList[type].splice(index, 1);
                }
            }
            // If not, clear the event handler list of this event
            else {
                eventsList[type].length = 0;;
            }
        };

        function trigger(eventName, context) {

            if (!eventsList.hasOwnProperty(eventName)) {
                return;
            }

            var argus, res;

            // Set the context of the callbacks
            // If no context param passed, context set to the global environment,
            context = context || this;

            // If more than the number of `arguLen`'s params are passed, 
            // they will be passed to the callbacks
            if (arguments.length > 2) {
                argus = Array.prototype.slice.call(arguments);
                argus.splice(0, 2);
            }

            eventsList[eventName].forEach(function(fn, index) {
                if (typeof fn === 'function') {
                    // debugger
                    res = fn.apply(context, argus);
                }
            });

            // If the callback has return value of BOOLEAN type false, 
            // then the return value will be `false`,
            // otherwise, it will return `true`
            return (res !== undefined && res === false) ? res : true;
        };


        return {
            on: on,
            off: off,
            trigger: trigger
        }
    })();

    return mediator;
});
