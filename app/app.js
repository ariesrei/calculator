'use strict';

var app = angular.module('app', []);


app.directive('calculator', function(){
    return{
        restrict: 'A',
        scope: {},
        templateUrl: 'template.html',
        controller: 'calculatorCtrl',
        controllerAs: 'Ctrl'
    };
});


app.controller('calculatorCtrl', function(){

    var vm = this;

    vm.output = "0";
    vm.newNumber = true; //false

    vm.x = null;
    vm.y = null;
    vm.operation = null;
    vm.result = null;

    vm.updateOutput = updateOutput;
    vm.add = add;
    vm.subtract = subtract;
    vm.multiply = multiply;
    vm.divide = divide;
    vm.calculate = calculate;
    vm.clear = clear;

    function updateOutput(number){
       //alert('Clicked ' + number);
       if (vm.output == "0" || vm.newNumber) {
            vm.output = number;
            vm.newNumber = false;
        } 
        else {
            vm.output += String(number);
            
        }
        vm.y = vm.output;
        vm.x = toNumber(vm.output);
    }


    function add(){
      vm.x = vm.output;
      vm.operation = "+";
      vm.y = null;
      vm.output = "0"
    }

    function subtract(){
      vm.x = vm.output;
      vm.operation = "-";
      vm.y = null;
      vm.output = "0"
    } 

    function multiply(){
      vm.x = vm.output;
      vm.operation = "*";
      vm.y = null;
      vm.output = "0"
    } 

    function divide(){
      vm.x = vm.output;
      vm.operation = "/";
      vm.y = null;
      vm.output = "0"
    } 

    function calculate(first, operation, second) {
      vm.output = "0";
      vm.result = " = " + eval(vm.x + vm.operation + vm.y );

    } 

    function clear(){
      vm.output = "0"; 
      vm.operation = null;
      vm.x = null;
      vm.y = null;
      vm.result = null;
    }

});