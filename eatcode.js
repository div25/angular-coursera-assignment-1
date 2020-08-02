(function(){
  'use strict'
  angular.module('eat',[])
  .controller('MyController' ,MyController)
  MyController.$inject['$scope'];
  function MyController($scope){
  $scope.name='';
  $scope.message='';

  $scope.check=function(){
    if($scope.name.length===0)
      $scope.message='Please enter data first!';
    else{
      var dishes=$scope.name.split(",");
      if(dishes.length<=3)
      $scope.message='Enjoy!';
      else $scope.message='Too much';
    }
  };

}
})();
