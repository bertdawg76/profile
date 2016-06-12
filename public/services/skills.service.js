angular.module('profile').factory('Skill', function($http, $stateParams){

  var skill = {};

  skill.getAllSkill = function(){
    return $http.get('/api/Skill').success(function(response){
      console.log(response);
      return response.data;
    })
  };

  skill.getOneSkill = function(id){
    return $http.get('/api/Skill/' + id).success(function(response){
      console.log(response);
      return response.data;
    })
  };



  skill.createSkill = function(skill){
    return $http.post('/api/Skill', skill).success(function(data){
      return data;
    })
  };

  skill.updateSkill = function(skill){
    console.log(skill);
    return $http.put('/api/Skill/' + skill._id, skill).success(function(data){
      return data;
    })
  };

  skill.deleteSkill = function(id){
    console.log(id);
    return $http.delete('api/Skill/' + id).success(function(data){
      return data;
    })
  };

  return skill;



});