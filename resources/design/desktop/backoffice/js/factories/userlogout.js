/**
 *
 */
App.factory('Userlogout', function ($http, Url) {
    var factory = {};

    /**
     *
     * @returns {*}
     */
    factory.loadData = function () {
        return $http({
            method: 'GET',
            url: Url.get('userlogout/backoffice_userlogout_view/load'),
            cache: false
        });
    };

    /**
     *
     * @param css
     * @returns {*}
     */
    factory.saveEditor = function (css) {
        return $http({
            method: 'POST',
            url: Url.get('userlogout/backoffice_userlogout_view/saveeditor'),
            data: {
                edit: true,
                text: css
            },
            cache: false
        });
    };

    /**
     *
     * @param css
     * @returns {*}
     */
	factory.saveBackoffice = function (css) {
        return $http({
            method: 'POST',
            url: Url.get('userlogout/backoffice_userlogout_view/savebackoffice'),
            data: {
                edit: true,
                text: css
            },
            cache: false
        });
    };
	
    return factory;
});
 