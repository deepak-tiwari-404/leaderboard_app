'use strict';

GameApp.controller('QuestionCtrl', ['$scope', '$state', 'questionService', 'userService',
  function($scope, $state, questionService, userService) {
  	initialize();

    $scope.updateScore = function(){
    	$scope.questionScore.userId = $scope.currentUser().email;
    	$scope.questionScore.questionId = $scope.question.id;
      questionService.addScore($scope.questionScore);
      $scope.hideForm();
      $state.go("question_path",{id: $scope.question.id}, {reload: true});
    }

    $scope.addScore = function(){
    	$scope.editEnabled = true;
    	$scope.questionScore = {
        score: $scope.scoreRange.min
      };
    }

    $scope.hideForm = function(){
      $scope.editEnabled = false; 
    }

    function initialize(){
      $scope.question = questionService.get($state.params.id);
      $scope.editEnabled = false;
      $scope.topNUsers = questionService.listTopNUsers($scope.currentUser(), $scope.question.id);
      $scope.topN1N2Users = questionService.listTopN1N2Users($scope.currentUser(), $scope.question.id);
      $scope.userSetting = userService.getSetting($scope.currentUser().email);
      $scope.myScore = questionService.getUserScore($scope.currentUser().email, $scope.question.id);
    }
  }
]);

GameApp.controller('SummaryCtrl', ['$scope', 'questionService',
  function($scope, questionService) {
    $scope.questions = questionService.list();
  }
]);
