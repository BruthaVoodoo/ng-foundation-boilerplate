describe('Unit: Testing Module - app', function(){
    var module;

    beforeEach(function() {
        module = angular.module('app');
    });

    it('should be registered', function(){
        expect(module).toBeDefined;
    });


    describe('Unit: Testing Dependencies', function(){
        var deps, hasModule;


        beforeEach(function(){
            deps = module.value('app').requires;
        });

        hasModule = function(m){
            return deps.indexOf(m) >= 0;
        };


        /*
            Testing for dependencies. List below all the dependencies that this
            module requires.
        */
        it('should have "app-html-templates" as a dependency', function(){
            expect(hasModule('app-html-templates')).toEqual(true);
        });

        it('should have "common-html-templates" as a dependency', function(){
            expect(hasModule('common-html-templates')).toEqual(true);
        });

        it('should have "app.factories" as a dependency', function(){
            expect(hasModule('app.factories')).toEqual(true);
        });

        it('should have "app.services" as a dependency', function(){
            expect(hasModule('app.services')).toEqual(true);
        });

        it('should have "app.error" as a dependency', function(){
            expect(hasModule('app.error')).toEqual(true);
        });

        it('should have "app.home" as a dependency', function(){
            expect(hasModule('app.home')).toEqual(true);
        });

        it('should have "app.about" as a dependency', function(){
            expect(hasModule('app.about')).toEqual(true);
        });

        it('should have "ui.router" as a dependency', function(){
            expect(hasModule('ui.router')).toEqual(true);
        });
    });

    describe('Unit: Testing Controller', function(){
        var scope, controller;

        beforeEach(inject(function ($rootScope){
            scope = $rootScope.$new();
            controller = module.controller('appController', {$scope: scope});
        }));


        // Test to make sure we have scope and controller
        it('should have "scope" and "controller" defined', function(){
            expect(scope).toBeDefined;
            expect(controller).toBeDefined;
        });

        it('should have properties', function(){
            expect(controller.pageTitle).toBeDefined;
        })
    });
});