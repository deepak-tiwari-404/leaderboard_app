GameApp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login_path', {
      url: "/login",
      templateUrl: "layouts/login.html",
      controller: "LoginCtrl",
      loginRequired: false,
      title: "Log in with your email account"
    })

    .state('question_path', {
      url: "/questions/:id",
      templateUrl: "layouts/question.html",
      controller: 'QuestionCtrl',
      loginRequired: true,
      title: "Leader Board Trending"
    })

    .state('summary_path', {
      url: "/summary",
      templateUrl: "layouts/summary.html",
      controller: 'SummaryCtrl',
      loginRequired: true,
      title: "Summary"
    })

    .state('signup_path', {
      url: "/signup",
      templateUrl: "layouts/signup.html",
      controller: 'RegistrationCtrl',
      loginRequired: false,
      title: "Register Now"
    })
      // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

}]);
