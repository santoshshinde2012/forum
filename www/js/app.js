// create the module and name it santoshApp
// also include ngRoute for all our routing needs
    var santoshApp = angular.module('santoshApp', ['ui.router',
                                                   'santoshApp.homecontrollers',
                                                   'santoshApp.aboutcontrollers',
                                                   'santoshApp.contactuscontrollers',
                                                   'santoshApp.filters',
                                                   'santoshApp.directives',
                                                   'santoshApp.factory',
                                                   'santoshApp.utils',
                                                   'santoshApp.homeservices'
                                                 ])

    // configure our routes
     .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: '',
                controller: 'AppController'
            })
            // route for the home page
            .state('/home', {
                url : '/home',
                templateUrl : 'templates/home/home.html',
                controller  : 'HomeController'
            })

            // route for the about page
            .state('/about', {
                url : '/about',
                templateUrl : 'templates/about/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .state('/contact', {
                url : '/contact',
                templateUrl : 'templates/contactus/contact.html',
                controller  : 'contactController'
            });

            // Redirect to home page
            $urlRouterProvider.otherwise('/home');

    });
