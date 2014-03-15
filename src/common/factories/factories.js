

/*
    This is the app factories module
*/

angular.module('app.factories', [
    'ui.router'
])

    // wordpressApi factory
    .factory('wordpressFactory', function($q, $http, $state){
        var getInfo, baseUrl;

        baseUrl = 'http://www.jasonvanvuren.com/wordpress/api/';


        // Gets the basic wordpress 'json_api' information.
        getInfo = function(){
            var deferred;

            deferred = $q.defer();


            $http.jsonp( baseUrl + 'info?callback=JSON_CALLBACK')

                .success(function(data, status, headers, config){
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config){
                    deferred.reject(data);
                });


            return deferred.promise;
        };


        // Exposes methods above publicly
        return {
            getInfo: getInfo
        };
    });

/*
    END factories module
*/