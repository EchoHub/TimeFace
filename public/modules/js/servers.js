
angular.module('TimeFace.servers',[])
    .factory('bookSer',function($http){
        return {
          getData:function(){
              return $http.get('/mock/books.json')
                  .success(function(mockData){
                      mockData = angular.forEach(mockData,function(data){
                          data.url = 'images/book/' + data.url;
                          return data;
                      })
                      return mockData
                  })
          }
        };
    })
    .factory('showpicSer', function($http){
        return{
            getData:function(){
                return $http.get('/mock/showpic.json').success(function(mockdata){
                    var path = 'images/showpic/';
                    mockdata = angular.forEach(mockdata,function(data){
                        data.url = path + data.url;
                        return data;
                    })
                    return mockdata;
                });
            }
        }
    })


