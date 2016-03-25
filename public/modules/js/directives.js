var _path = "/modules/tmpl/";
angular.module("TimeFace.directives",[])
    .directive("maincontainer",function(){
        return{
            templateUrl: _path + "main.html",
            controller:'mainCtrl',
            link:function(scope, ele, attr, ctrl){
            }
        }
    })
    .directive("index",function(){
        return{
            templateUrl: _path + "main/index.html",
            controller:'mainCtrl',
            link:function(scope, ele, attr, ctrl){
            }
        }
    })
    .directive("navbar",function(){
        return{
            templateUrl: _path + "/main/navbar.html",
            controller:'navbarCtrl',
            link:function(scope, ele, attr, ctrl){
                scope.openList = false;
                scope.showList= function(){
                    scope.openList = true;
                }
                scope.hideList= function(){
                    scope.openList = false;
                }
                scope.showSearchBar = function(event){
                    var $target = $(event.target);
                    $target.addClass('searchinput-open');
                    $target.closest('.searchbar')
                        .addClass('searchbar-active');
                }
            }
        }
    })
    .directive("slider",function(){
        return{
            templateUrl: _path + "/main/slider.html",
            controller:'sliderCtrl',
            link:function(scope, ele, attr, ctrl){
                scope.changeSlider = function(event){
                     var $item = $(event.target);
                     var $sliderC = $item.parent('li');
                    var index = $sliderC.index();
                    $(".slider-circle").removeClass("circle-active");
                    $item.addClass("circle-active");
                    $(".imgDiv").removeClass("slide-active")
                        .eq(index).addClass("slide-active");
                }
            }
        }
    })
    .directive("bookdiv",function(){
        return{
            templateUrl: _path + "/main/bookdiv.html",
            controller:'bookdivCtrl',
            link:function(scope, ele, attr, ctrl){
                scope.bookContentShow = function(event){
                    var $item = $('.bookshelf-item-more-show.show_active');
                    var length = $item.length;
                    if(length < 1){
                        $(event.target).find('.bookshelf-item-more').addClass('bookshelf-item-more-show').addClass('show_active');
                    }else{
                        $item.removeClass('bookshelf-item-more-show');
                        $(event.target).find('.bookshelf-item-more').addClass('bookshelf-item-more-show').addClass('show_active')
                    }
                }
                scope.bookContentHide = function(event){
                    $(event.target).closest('.show_active').removeClass('bookshelf-item-more-show')
                }

            }
        }
    })
    .directive("bookfeature",function(){
        return{
            templateUrl: _path + "/main/bookfeature.html",
            controller:'bookfeatureCtrl',
            link:function(scope, ele, attr, ctrl){
                scope.showFeature = function(event){
                    $('.feature-content').removeClass('detail');
                    var $evt = $(event.target);
                    var $content = $evt.find('.feature-content');
                    var $content2 = $evt.closest('.feature-li').find('.feature-content');
                    var length1 = $content.length;
                    var length2 = $content2.length;
                    if(length1 == 1){
                        $content.addClass('detail');
                    }else if(length2 == 1){
                        $content2.addClass('detail');
                    }

                }

            }
        }
    })
    .directive("showphotos",function(){
        return{
            restrict:"E",
            controller:"showphotosCtrl",
            templateUrl:_path + "/main/showphotos.html",
            replace:true,
            link:function(scope, ele, attr, ctrl){
                scope.showPcIntro = function(event){
                    $('.ft-col-md-4').removeClass('showPic-active');
                    console.log(event.target)
                    var $e = $(event.target);
                    var $ft = $e.find('.ft-col-md-4');
                    var length = $ft.length
                    var $ft2 = $e.closest('.ft-col-md-4');
                    var length2 = $ft2.length;
                    if(length == 1){
                        $ft.addClass('showPic-active');
                    }else if(length2 == 1){
                        $ft2.addClass('showPic-active');
                    }
                }
            }
        }
    })
    .directive("webinfo",function(){
        return{
            restrict:"E",
            templateUrl:_path + "main/webinfo.html",
            replace: true,
            controller:"webinfoCtrl",
            link:function(scope, ele, attr){

            }
        }
    })