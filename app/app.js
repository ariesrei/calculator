'use strict';

//require("./model.js");
//require("./model.js");

//import Model from './model.js';
//require('./view.js');
//require('./view-model.js');
//require('./model.js');

//import View from "./view.js";
//import Model from "./model.js";

//require("./view.js");
//var View = require('view.js');

alert("tests s");

angular.module('app', [])


.directive('test', function(){
    return{
        restrict: 'A',
        scope: {
            //holiday: '='
        }
        //template : '<input type="text" value=""/>'
    };
})

.controller('Ctrl',function($scope){
    $scope.output = "0";

    $scope.newNumber = true;

    $scope.pendingOperation = null;

    $scope.pendingValue = null;

    $scope.pendingNewValue = null;

    $scope.result = String;

    $scope.clear = function(){
       $scope.output = "0"; 
    }



    $scope.updateOutput = function (btn) {
        if ($scope.output == "0" || $scope.newNumber) {
            $scope.output = btn;
            $scope.newNumber = false;
        } else {
            $scope.output += String(btn);
        }
        $scope.pendingValue = toNumber($scope.output);
    };


    $scope.add = function(){

        $scope.pendingValue = $scope.output;

        $scope.pendingOperation = "+";

        $scope.output += String("+");

        $scope.newNumber = true;

        //$scope.result = String($scope.output);
        //$scope.pendingValue = toNumber($scope.output);
        //alert($scope.pendingValue);
        //$scope.pendingValue = $scope.updateOutput();
    }

    $scope.minus = function(number){
      if ($scope.output == "0" || $scope.newNumber) {

      }
      else{

      }
         $scope.output += String("-");
       

    } 


      $scope.subtract = function () {
        if ($scope.pendingValue) {
            if ($scope.runningTotal && ($scope.pendingOperation == SUBTRACT)) {
                $scope.runningTotal -= $scope.pendingValue;
            } else if ($scope.runningTotal && $scope.pendingOperation == ADD) {
                $scope.runningTotal += $scope.pendingValue;
            } else {
                $scope.runningTotal = $scope.pendingValue;
            }
        }
        setOperationToken(SUBTRACT);
        setOutput(String($scope.runningTotal));
        $scope.pendingOperation = SUBTRACT;
        $scope.newNumber = true;
        $scope.pendingValue = null;
    };
    

    $scope.multiply = function(){
        $scope.output += String("*");

    } 

    $scope.divide = function(){
       $scope.output += String("/");

    } 

    $scope.calculate = function() {
        //$scope.result = $scope.output;
        //$scope.result = {{ $scope.output }};
        //$scope.output += $scope.output;
        //alert($scope.pendingValue )
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