'use strict';

GameApp.service('questionService', [
  function() {
    this.questions = [
     {id: 1, text: "What is a short, useful, and generally applicable piece of wisdom?"},
     {id: 2, text: "What are some of the most epic photos ever taken?"},
     {id: 3, text: "Why is Dropbox more popular than other programs with similar functionality?"},
     {id: 4, text: "Engineering Management: Why are software development task estimations regularly off by a factor of 2-3?"},
     {id: 5, text: "What are some examples of bad design you have seen?"},
     {id: 6, text: "What is it like to be the smartest person in the room?"},
     {id: 7, text: "What is the most beautiful number and why?"}
    ];

    this.list = function(){
      
      return this.questions;
    }

    this.get = function(id){
      return this.questions[id-1];
    }
  }]);