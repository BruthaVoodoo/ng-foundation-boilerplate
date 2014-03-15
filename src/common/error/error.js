

/*
    This is the error js file.
*/
angular.module('app.error', [
        'ui.router'
    ])
    .config(function config($stateProvider){
        $stateProvider.state('error', {
            url: '/error?reason',
            views: {
                'main': {
                    controller: 'errorController',
                    templateUrl: 'common/error/error.tpl.html'
                }
            },
            data: {
                pageTitle: 'Error'
            }
        });
    })

    .controller('errorController', function ($scope, $stateParams, appError){
        $scope.err = appError.getErrMsg();
        $scope.errMsg = $scope.err.msg;
        $scope.errStatus = $scope.err.data.status;
    });
/*
    End error js file
*/

