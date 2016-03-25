angular.module("TimeFace.controllers",['TimeFace.servers'])
    .controller("mainCtrl",function($scope){
        $scope.searchOpen = function(e){
            var $evt = $(e.target);
            var length = $evt.closest('.searchbar').length;
            if(length == 0){
                $('.searchbar')
                    .removeClass('searchbar-active')
                    .find('.searchinput-open').removeClass('searchinput-open');

            }
        };

        angular.element(document).bind("scroll",function(){
            var $item = $(".header");
            var top = $item.offset().top;
            if(top > 60){
                $item.addClass("headerBg");
            }else{
                $item.removeClass("headerBg");
            }
        })
    })
    .controller("navbarCtrl",function($scope){})
    .controller("sliderCtrl",function($scope){})
    .controller("bookdivCtrl",function($scope, bookSer){
        bookSer.getData().then(function(res){
            $scope.books = res.data
        })
    })
    .controller("bookfeatureCtrl",function($scope){})
    .controller("showphotosCtrl",function($scope, showpicSer){
        showpicSer.getData().then(function(res){
            $scope.photos = res.data;
        })
    })
    .controller('webinfoCtrl',function($scope){})
