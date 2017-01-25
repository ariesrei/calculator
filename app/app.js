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

//alert("tests s");

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
  		//window("list", listWindowConfig).
        //viewModel("list", listViewModel).
        //model("list", listModel).
        //view(View);




.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});


// .controller('helloCtrl',function($scope){
//     $scope.hello = "Hello there!";
// });