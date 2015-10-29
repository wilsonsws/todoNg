angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.content = '';
$scope.fstatus = '';
$scope.todos = [
{id:1, content:'昨天', fstatus:true },
{id:2, content:'今天天气不错,从北邮骑车到清华需要30分钟，如果不堵车的话',  fstatus:false },
{id:3, content:'明天',  fstatus:false }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 

$scope.editUser = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.content = '';
    $scope.fstatus = false;
	$scope.id = 'new';
    } 
	else {
    $scope.edit = false;
    $scope.content = $scope.todos[id-1].content;
    $scope.fstatus = $scope.todos[id-1].fstatus;
    $scope.id = $scope.todos[id-1].id;	
  }
};

$scope.changeFinish = function(id) {
    $scope.todos[id-1].fstatus = true;
};

$scope.changeRelease = function(id) {
    $scope.todos[id-1].fstatus = false;
};

$scope.updateItem = function(){
  if ($scope.id == 'new'){
    var newid = $scope.todos.length + 1;
    $scope.todos.push ({id:newid, content:$scope.content, fstatus:$scope.fstatus});
	}
  else{
    var newcontent = $scope.content;
	var newid = $scope.id;
	$scope.todos[newid-1].content = newcontent;
  }
};

//$scope.$watch('passw1',function() {$scope.test();});
//$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('content', function() {$scope.test();});
//$scope.$watch('fstatus', function() {$scope.test();});

$scope.test = function() {
  //if ($scope.passw1 !== $scope.passw2) {
  //  $scope.error = true;
  //  } else {
  //  $scope.error = false;
  //}
  $scope.incomplete = false;
  if (!$scope.content.length ||
  !$scope.fstatus.length) {
     $scope.incomplete = true;
  }
};

});