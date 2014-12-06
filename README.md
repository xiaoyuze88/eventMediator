eventMediator
=============

An tiny 'event' like system works as a mediator that can help you communicate through all your modules in AMD.
Less than 100 lines of code.

##USAGE
    
In one of your module, you can register an `event`, and when it happens, you can do your stuff in the callback
    
    // E.g: Now you have two modules, `PAGE` and `ARTICLE`, you want to show sth when the data in `ARTICLE` changed
    // In `PAGE` module
    require('eventMediator',function(eventMediator) {
        eventMediator.on('update',function(data) {
            
            console.log(data);  //'new stuff'
        });
    });

    // In `ARTICLE` module
    require('eventMediator',function(eventMediator) {
        

        //when data updated
        var newData = 'new stuff';

        // The second parameter is the context of those callbacks
        eventMediator.trigger('update',this,newData);
    });

## METHODS

### on(eventName, handler)

#### eventName(String) : The event name you want to use
#### handler(Function) : The handler that will be called when this event triggered

Register an handler to the eventName, you can register more than one handler to one eventName,
they will be called in the order of your registered them.


### off(eventName,[handler]) 

#### eventName(String) : Same as `on` method
#### handler(Function) : (Optional) 

Remove an handler from an eventName, you can remove a specific handler 
by passing the `handler` param(Should be the same Function as it registered),
if no `handler` are passed in, all handlers under this eventName will be removed.



### trigger(eventName,[context],[param1,param2...])

#### eventName(String) : same as usual
#### context : (Optional) You can set the context of the callback by passing this param
#### param1,param2...: The rest of the arguments will be all passed into to the callback function.


## Have fun :)




