describe( 'aboutController', function(){
    describe( 'isCurrentUrl', function(){
        var appCtrl, $location, $scope;

        beforeEach( module('app'));

        beforeEach(inject(function($controller, _$location_, $rootScope){
            $location = _$location_;
            $scope = $rootScope;
            appCtrl = $controller( 'aboutController', {$location: $location, $scope: $scope});
        }));

        it( 'should pass a dummy test', inject(function(){
            expect(appCtrl).toBeTruthy();
        }))
    });
});