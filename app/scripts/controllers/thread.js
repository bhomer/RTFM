'use strict';

angular.module('rtfmApp', ['firebase'])
  .controller('ThreadCtrl', function ($scope, $firebase) {
      
      var threadsRef = new Firebase('http://devmtn-ftfm.firebaseIO.com/threads');
      
      $scope.threads = $firebase(threadsRef);
      $scope.currentThread;

      $scope.addThread = function(e) {
        if (e.keyCode !== 13) {
          return;
      }
      
      $scope.threads.$add({name: $scope.newThreadTitle});
      $scope.newThreadTitle = '';
  };