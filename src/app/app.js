

/*
    This is our app js file
*/
angular.module('app', [
    'app-html-templates',
    'common-html-templates',
    'app.factories',
    'app.services',
    'app.error',
    'app.home',
    'app.about',
    'ui.router'
])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
    })

    .controller('appController', function ($scope, $location, wordpressFactory, $state, appError){
        $scope.pageTitle = '';


        $scope.$on('$stateChangeSuccess', function(ev, toState, toParams, fromState, fromParams){
            if(angular.isDefined( toState.data.pageTitle )){
                $scope.pageTitle = toState.data.pageTitle + ' | ngWordpressBoilerplate';
            }
        });


        wordpressFactory.getInfo()
            .then(function(result){
                if(result.status == 'error'){
                    appError.setErrMsg({
                        msg: 'Ooops, we seem to have a problem with wordpress. ( "json_api" )',
                        data: result
                    });
                    $state.go('error');
                }
                console.log(result);
            });
    });
/*
    End app js file
*/
