'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

{
	events: {inc:[], dec:[]}
	on: function(key, func){
		events[key].push(func)
	}
	trigger: function(key, ...args) {
		//execute each function asossiated with key
		this.events[key].forEach((func) => {
			func(...args);
		})
	}
}












function EventEmitter() {
	
}

EventEmitter.prototype.on = function(funcName, func) {
	if (this[funcName]) this[funcName].push(func);
	else this[funcName] = [func];
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
	this[funcName].forEach((fun)=> fun(...args))
};

var instance = new EventEmitter();
var counter = 0;
var word = 'hi';
var counter2 = 100;
instance.on('increment', function() {
	counter++;
}); // counter should be 0
instance.on('wordy', function() {
	word = 'hello';
});
instance.on('increment', function(){
	counter2+= 105;
})
instance.trigger('increment'); // counter should be 1
console.log(counter, word,counter2)
instance.trigger('increment'); // counter should be 2
instance.trigger('wordy');
console.log(counter,word,counter2)
console.log(instance.increment.length)
module.exports = EventEmitter;
