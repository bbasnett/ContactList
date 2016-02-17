(function(){
     angular
        .module("app",[])
        .controller('AppCtrl',function AppCtrl($scope,$http){
            console.log('Hello world from controller');
            
            var refresh = function(){
                $http.get('/contactlist').success(function(response){
                    console.log('I got the data I requested');
                    $scope.contactlist = response;
                    $scope.list = "";
                });
            };
            
            refresh();
            
            $scope.addContact = function(){
                console.log($scope.list);
                $http.post('/contactlist',$scope.list).success(function(response){
                    console.log(response);
                     refresh();
                });
            };
            
            $scope.remove = function(id){
                console.log(id);
                $http.delete('/contactlist/' + id).success(function(response){
                    refresh();
                });
            };
            
            $scope.edit = function(id){
                console.log(id);
                $http.get('/contactlist/' + id).success(function(response){
                    $scope.list = response;
                });
            };
            
            $scope.update = function(){
                console.log($scope.list._id);
                $http.put('/contactlist/' + $scope.list._id,$scope.list).success(function(response){
                    refresh();
                });
            };
            
            $scope.deselect = function(){
                $scope.list = "";
            };
        });
}());