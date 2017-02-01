'use strict';

require(['config'],'./model.js');
require(['config'],'./view.js');

angular.module('app', [])

//.view(View)

.directive('calculator', function(){
    return{
        restrict: 'A',
        scope: {},
        templateUrl : 'template.html'
    };
})

.controller('calculatorCtrl',function($scope){

    $scope.output = "0";
    $scope.newNumber = true; //false

    $scope.x = null;
    $scope.y = null;
    $scope.operation = null;
    $scope.result = null;
    $scope.test = "0";
    //$scope.result = String;

    $scope.updateOutput = function (number) {

        if ($scope.output == "0" || $scope.newNumber) {
            $scope.output = number;
            $scope.newNumber = false;
        } 
        else {
            $scope.output += String(number);
            
        }
        $scope.y = $scope.output;
        $scope.x = toNumber($scope.output);

    };


    $scope.add = function(){
        $scope.x = $scope.output;
        $scope.operation = "+";
        $scope.y = null;
        $scope.output = "0"
    }

    $scope.subtract = function(){
      $scope.x = $scope.output;
      $scope.operation = "-";
      $scope.y = null;
      $scope.output = "0"
    } 

    $scope.multiply = function(){
      $scope.x = $scope.output;
      $scope.operation = "*";
      $scope.y = null;
      $scope.output = "0"
    } 

    $scope.divide = function(){
      $scope.x = $scope.output;
      $scope.operation = "/";
      $scope.y = null;
      $scope.output = "0"
    } 

    $scope.calculate = function(first, operation, second) {
      $scope.output = "0";
      $scope.result = " = " + eval($scope.x + $scope.operation + $scope.y );

    } 

    $scope.clear = function(){
      $scope.output = "0"; 
      $scope.operation = null;
      $scope.x = null;
      $scope.y = null;
      $scope.result = null;
    }

});

  		//window("list", listWindowConfig).
        //viewModel("list", listViewModel).
        //model("list", listModel).
        //view(View);

 
// .controller('PhoneListController', function PhoneListController($scope) {
//   $scope.phones = [
//     {
//       name: 'Nexus S',
//       snippet: 'Fast just got faster with Nexus S.'
//     }, {
//       name: 'Motorola XOOM™ with Wi-Fi',
//       snippet: 'The Next, Next Generation tablet.'
//     }, {
//       name: 'MOTOROLA XOOM™',
//       snippet: 'The Next, Next Generation tablet.'
//     }
//   ];
// });


// .controller('helloCtrl',function($scope){
//     $scope.hello = "Hello there!";
// });