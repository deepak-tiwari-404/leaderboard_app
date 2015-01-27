// Define a new module. This time we declare a dependency on
// the ui.router module
'use strict';

var GameApp = angular.module("GameApp", ['ui.router']);

GameApp.constant("AppConstants",{
  defaultSetting: {n: 4, n1: 2, n2: 2},
  scoreRange: {min: 1, max: 10},
  settingRange: {min: 1, max: 10},
  questions: [
     {id: 1, text: "What is a short, useful, and generally applicable piece of wisdom?"},
     {id: 2, text: "What are some of the most epic photos ever taken?"},
     {id: 3, text: "Why is Dropbox more popular than other programs with similar functionality?"},
     {id: 4, text: "Engineering Management: Why are software development task estimations regularly off by a factor of 2-3?"},
     {id: 5, text: "What are some examples of bad design you have seen?"},
     {id: 6, text: "What is it like to be the smartest person in the room?"},
     {id: 7, text: "What is the most beautiful number and why?"}
    ],
  users:{
    "micheal@example.com": {name: "Micheal Hartel", email: "micheal@example.com", password: "12345"},
    "susan@example.com": {name: "Susan Clark", email: "susan@example.com", password: "12345"},
    "brandon@example.com": {name: "Brandon Clark", email: "brandon@example.com", password: "12345"},
    "joffery@example.com": {name: "Joffery Baratheon", email: "joffery@example.com", password: "12345"},
    "robert@example.com": {name: "Robert Baratheon", email: "robert@example.com", password: "12345"},
    "ned@example.com": {name: "Ned Clark", email: "ned@example.com", password: "12345"},
    "tyrion@example.com": {name: "Tyrion Lannister", email: "tyrion@example.com", password: "12345"},
    "snow@example.com": {name: "Snow Clark", email: "snow@example.com", password: "12345"},
  },
  scores: {
    1: [
        {userId: "micheal@example.com", score: 80},
        {userId: "robert@example.com", score: 70},
        {userId: "snow@example.com", score: 60},
        {userId: "ned@example.com", score: 50},
        {userId: "susan@example.com", score: 40}
      ],
    2: [
        {userId:"susan@example.com", score: 50},
        {userId: "snow@example.com", score: 50},
        {userId: "ned@example.com", score: 48},
        {userId: "tyrion@example.com", score: 45},
        {userId: "robert@example.com", score: 45}
      ],
    3: [
        {userId: "tyrion@example.com", score: 100},
        {userId: "brandon@example.com", score: 95},
        {userId: "susan@example.com", score: 95},
        {userId: "micheal@example.com", score: 95},
        {userId: "joffery@example", score: 90}
      ]
  }
});

GameApp.run(["$rootScope", "$state", "authService", function ($rootScope, $state, authService) {
  $rootScope.error = false;
  $rootScope.title = false;
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    $rootScope.error = false;
    $rootScope.isLoggedIn = authService.loggedIn();
    $rootScope.title = toState.title;
    if(toState.loginRequired && !$rootScope.isLoggedIn){
      event.preventDefault();
      $state.go("login_path");
    }
  });
}]);



