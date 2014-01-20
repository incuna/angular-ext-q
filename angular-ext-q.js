(function () {
    'use strict';

    angular.module('angular-ext-q', [])
        .factory('extQ', ['$q', function ($q) {
            var extendDeferredObj = function (deferred, name) {
                var cbs = [];
                deferred[name] = function (data) {
                    angular.forEach(cbs, function (cb) {
                        cb(data);
                    });
                };
                deferred.promise[name] = function (cb) {
                    cbs.push(cb);
                    return deferred.promise;
                };
                return deferred;
            };
            return {
                defer: function (methods) {
                    methods = methods || [];
                    var deferred = $q.defer();
                    angular.forEach(methods, function (method) {
                        extendDeferredObj(deferred, method);
                    });
                    return deferred;
                }
            };
        }]);
}());
