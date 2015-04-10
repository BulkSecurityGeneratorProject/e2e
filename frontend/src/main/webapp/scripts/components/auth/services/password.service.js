'use strict';

angular.module('e2eApp')
    .factory('Password', function ($resource, API_URL) {
        return $resource(API_URL + '/account/change_password', {}, {
        });
    });
