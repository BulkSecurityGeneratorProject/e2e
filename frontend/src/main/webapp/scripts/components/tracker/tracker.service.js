'use strict';

angular.module('e2eApp')
    .factory('Tracker', function ($rootScope, API_URL) {
        var stompClient = null;
        function sendActivity() {
            console.log('tracker.service.js: sendActivity() API_URL ' + API_URL)
            stompClient
                .send(API_URL + '/websocket/activity',
                {},
                JSON.stringify({'page': $rootScope.toState.name}));

        }
        return {
            connect: function () {
                console.log('tracker.service.js: connect(): API_URL ' + API_URL)
                var socket = new SockJS(API_URL + '/websocket/activity');
                stompClient = Stomp.over(socket);
                stompClient.connect({}, function(frame) {
                    sendActivity();
                    $rootScope.$on('$stateChangeStart', function (event) {
                        sendActivity();
                    });
                });
            },
            sendActivity: function () {
                if (stompClient != null) {
                    sendActivity();
                }
            },
            disconnect: function() {
                if (stompClient != null) {
                    stompClient.disconnect();
                    stompClient == null;
                }
            }
        };
    });
