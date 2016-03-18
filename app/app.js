(function () {
    'use strict';

    var app = angular.module("krzychapp", ['ngRoute', 'ngMaterial', 'facebook']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'src/auth/view/login.html',
                controller  : 'AuthController'
            })
            .when('/main', {
                templateUrl : 'src/main/view/main.html',
                controller: 'MainController'
            })
            .otherwise('/', {
                templateUrl : 'src/auth/view/login.html',
                controller  : 'AuthController'
            });
    })

    .config([
            'FacebookProvider',
            function(FacebookProvider) {
                var myAppId = '604046539746695';

                // You can set appId with setApp method
                FacebookProvider.setAppId('myAppId');

                /**
                 * After setting appId you need to initialize the module.
                 * You can pass the appId on the init method as a shortcut too.
                 */
                FacebookProvider.init(myAppId);

            }
        ]);

}());
