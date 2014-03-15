

/*
    This is the app services module
*/
angular.module('app.services', [])
    .service('appError', function(){
        var errMsg;

        errMsg = '';


        return {
            getErrMsg: function(){
                return errMsg;
            },
            setErrMsg: function(value){
                errMsg = value;
            }
        };
    });

/*
    End app services module
*/
