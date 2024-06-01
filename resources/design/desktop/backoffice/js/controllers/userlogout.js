/**
 *
 */
App.config(function ($routeProvider) {
    $routeProvider
		.when(BASE_URL + '/userlogout/backoffice_userlogout_view', {
			controller: 'UserlogoutViewController',
			templateUrl: BASE_URL + '/userlogout/backoffice_userlogout_view/template',
			code: 'view'
		});
}).controller('UserlogoutViewController', function ($scope, $window, Header, Userlogout, $route, Auth, $location, AUTH_EVENTS, $rootScope) {
    angular.extend($scope, {
        header: new Header(),
        content_loader_is_visible: true,
		form: {
        	cssEditor: '',
			cssBackoffice: ''
		}
    });

    $scope.header.loader_is_visible = false;
	

    Userlogout
        .loadData()
		.success(function (data) {
			$scope.header.title = data.title;
			$scope.header.icon = data.icon;
			$scope.form.cssEditor = data.cssEditor;
			$scope.form.cssBackoffice = data.cssBackoffice;
		}).finally(function () {
			$scope.content_loader_is_visible = false;
		});

    /**
	 *
     */
    $scope.saveEditor = function () {
        $scope.content_loader_is_visible = true;
        Userlogout.saveEditor($scope.form.cssEditor)
        	.finally(function () {
                $scope.content_loader_is_visible = false;
			});
	};

    /**
	 *
     */
	$scope.saveBackoffice = function () {
        $scope.content_loader_is_visible = true;
        Userlogout.saveBackoffice()
        	.finally(function (data) {  

        		Auth.logout().success(function() {
		            $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
		            $location.path("/backoffice");
		        });
                $scope.content_loader_is_visible = false;
                
			});
	};
});
