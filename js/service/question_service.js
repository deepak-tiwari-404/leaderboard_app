'use strict';

GameApp.service('questionService', ['dbStore', 'userService',
  function(dbStore, userService) {
    this.list = function(){
      return dbStore.get('Questions');
    }

    this.get = function(id){
      return dbStore.get('Questions')[id-1];
    }

    this.getUserScore = function(userId, questionId){
      var questionScores = dbStore.get("Scores")[questionId] || [];
      for(var i = 0; i < questionScores.length; i++){
        if(questionScores[i].userId == userId){
          return questionScores[i].score;
        }
      }
      return 0;
    }

    this.addScore = function(data){
      var allScore = dbStore.get("Scores");
      var questionScores = allScore[data.questionId] || [];
      var userScore = null;
      for(var i = 0; i < questionScores.length; i++){
        if(questionScores[i].userId == data.userId){
          userScore = questionScores[i];
          userScore.score += data.score;
          questionScores[i] = userScore;
          break;
        }
      }

      if(!userScore){
        userScore = {
          userId: data.userId,
          score: data.score
        };
        questionScores.push(userScore);
      }
      // sorting the array in descending order of question score and save
      questionScores = questionScores.sort(function(a,b){ return b.score - a.score});
      allScore[data.questionId] = questionScores;
      dbStore.set("Scores", allScore);
    }

    this.listTopNUsers = function(user, questionId){
      var questionScores = dbStore.get("Scores")[questionId] || [];
      var allUsers = userService.listUsers();
      var userSetting = userService.getSetting(user.email);
      var result = [];
      for(var i=0; i< userSetting.n && i< questionScores.length; i++){
        result.push({
          user: allUsers[questionScores[i].userId],
          score: questionScores[i].score
        });
      }
      return result;
    }

    this.listTopN1N2Users = function(user, questionId){
      var questionScores = dbStore.get("Scores")[questionId] || [];
      var allUsers = userService.listUsers();
      var userSetting = userService.getSetting(user.email);
      var pos = -1;
      for(var i = 0; i< questionScores.length; i++){
        if(questionScores[i].userId == user.email){
          pos = i;
          break;
        }
      }
      if(pos == -1)
        return [];

      var result = [];
      var start = pos - userSetting.n1 > 0 ? pos - userSetting.n1 : 0;
      var end = pos + userSetting.n2 < questionScores.length ? pos + userSetting.n2 : questionScores.length - 1;

      for(var i=start; i < pos && i >= 0; i++){
        result.push({
          user: allUsers[questionScores[i].userId],
          score: questionScores[i].score
        });
      }

      for(var i = pos; i <= end; i++){
        result.push({
          user: allUsers[questionScores[i].userId],
          score: questionScores[i].score
        });
      }
      return result;
    }
  }]);