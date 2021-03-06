describe('Unit: Testing Module - app.about', function () {
    var module;

    beforeEach(function () {
        module = angular.module('app.about');
    });

    it('should be registered', function () {
        expect(module).toBeDefined;
    });


    describe('Testing Dependencies', function () {
        var deps, hasModule;


        beforeEach(function () {
            deps = module.value('app.about').requires;
        });

        hasModule = function (m) {
            return deps.indexOf(m) >= 0;
        };


        /*
            Testing for dependencies. List below all the dependencies that this
            module requires.
        */
        it('should have "ui.router" as a dependency', function () {
            expect(hasModule('ui.router')).toEqual(true);
        });
    });
});