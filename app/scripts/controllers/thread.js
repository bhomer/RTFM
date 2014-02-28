'use strict';

angular.module('rtfmApp', ['firebase'])
  .controller('ThreadCtrl', function ($scope, $firebase) {
      
      var threadsRef = new Firebase('http://devmtn-ftfm.firebaseIO.com/threads');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
