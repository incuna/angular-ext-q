angular-ext-q

An extension to angular's `$q` which provides easy ways to get extended
deferred/promise objects.

Usage: `extQ.defer(['custom', 'method', 'names'])`

The promise will be extended with a callback-collection method named
according to the options passed. The callbacks can be triggered by using the
method of the same name on the deferred object.

Complete example:

```javascript
function getLongList() {
    var deferred = extQ.defer(['update']);
    var all = [];
    while(notLoaded()) {
        var new = getNext();
        all.push(new);
        deferred.update(new);
    }
    deferred.resolve(all);
    return deferred.promise;
}

getLongList().update(function (object) {
    renderObject(object);
    updateProgressBar();
}).then(
    removeProgressBar();
);
```
