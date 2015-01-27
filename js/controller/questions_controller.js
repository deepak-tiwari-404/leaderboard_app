'use strict';

GameApp.controller('QuestionCtrl', ['$scope', '$state', 'questionService',
  function($scope, $state, questionService) {
    $scope.question = questionService.get($state.params.id);
  }
]);

GameApp.controller('SummaryCtrl', ['$scope', 'questionService',
  function($scope, questionService) {
    $scope.questions = questionService.list();
  }
]);
