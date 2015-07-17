//Controllers
angularMaterialDemo.controller('homepageController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

    $scope.openLeftSideNav = function () {
        $mdSidenav('leftNavPanel').toggle();
        console.log("SideNav Open/Close!");
    };

}]);
