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

    .state('setting_path', {
      url: "/settings",
      templateUrl: "layouts/setting.html",
      controller: 'EditUserCtrl',
      loginRequired: true,
      title: "Edit Leader Board Settings"
    })

    .state('users_path', {
      url: "/users",
      templateUrl: "layouts/users.html",
      controller: 'UserIndexCtrl',
      loginRequired: true,
      title: "All Users"
    })
      // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

}]);
