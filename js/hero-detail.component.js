(function(){
  angular
    .module('heroDetail', [])
    .component('heroDetail', {
      template: 'TBD: Detail view for <span>{{$ctrl.heroId}}</span>',
      controller: ['$routeParams',
        function heroDetailController($routeParams) {
          this.heroId = $routeParams.heroId;
        }
      ]
    });
  })();
