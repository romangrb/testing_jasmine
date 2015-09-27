'use strict';

describe('Main Controller test suite', function() {
    /*
   describe('dialog_controller controller test', function() {
   
   })
    */  
    /*
   describe('logs_controller controller test', function() {
    var $scope;
       
    beforeEach(module('timerApp'));
       
    beforeEach(inject(function($rootScope, $scope, $controller, $timeout, $mdSidenav, $mdUtil, $log) {
      $scope = $rootScope.$new();
      $controller('LeftCtrl', {
        $scope: $scope
      });
    }));
       
       it('', function(){
           expect($scope).toggleLeft().toBe(5);
        });
       
   })
   */
    /* 
   describe('dialog_controller controller test', function() {
        var $scope;
        beforeEach(module('timerApp'));
        beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('LogsController', {
            $scope: $scope
        });
    }));

    it('should return the correct length of pages', function(){
      expect(typeof $scope.showAdvanced).toBe(5);
    });
       
   })
     */ 
    /*
   describe('logs_controller controller test', function() {
      
   })
   */
    
   describe('menu_controller controller test', function() {
    var $scope, page = 'somePage';
       
    beforeEach(module('timerApp'));
       
    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      //$controller takes an object containing a reference to the $scope
      $controller('MenuCtrl', {
        $scope: $scope
      });
    }));
       
    it('should return the correct length of pages', function(){
      expect($scope.menu.pages.length).toBe(5);
    });
    
     describe('checks the methods of controller with spy', function() { 
         
       beforeEach(function() {
         spyOn($scope.menu, 'isPageSelected');
         $scope.menu.isPageSelected();
         $scope.menu.isPageSelected(page);     
       }); 
         
       it("track the spy on isPageSelected method", function(){
         expect($scope.menu.isPageSelected).toHaveBeenCalled();
       });
       it("track the spy was called with argument "+page, function(){
          expect($scope.menu.isPageSelected.calls.argsFor(1)).toEqual([page]);
       });       
       it("track the spy was called with no argument", function(){
          expect($scope.menu.isPageSelected).toHaveBeenCalledWith();    
       });
       it("tracks the number of times the method was called", function() {
          expect($scope.menu.isPageSelected.calls.count()).toEqual(2);
       });
          
     });   
     
     describe('checks the methods of controller with spy with expected return value', function() { 
       var currentPage; 
            
       beforeEach(function() {
         spyOn($scope.menu, 'isPageSelected').and.returnValue(page);
         $scope.menu.isPageSelected();    
         currentPage = $scope.menu.isPageSelected(page)     
       });
       it("track the spy was called with argument "+page, function(){
          expect($scope.menu.isPageSelected).toHaveBeenCalledWith(page);    
       });      
       it("track the return value with the spy was called in function", function(){
          expect(currentPage).toEqual(page);          
       });    
     });
   
   });  
    
   /*  
   describe('left_controller controller test', function() {
   
   })
   */
   /*
   describe('todo_controller controller test', function() {
   
   })
   */
   /*
   describe('tasks_controller controller test', function() {
   
   })
   
    
   describe('archive_controller controller test', function() {
   
   })
   */
   describe('stat_controller controller test', function() {
     describe('check the data for chart in controller stat_controller',                function(){
         var $scope, TasksService;

         beforeEach(module('timerApp'));
        
         beforeEach(inject(function($rootScope, $controller, TasksService ) {
           $scope = $rootScope.$new();
           //$controller takes an object containing a reference to the $scope
           $controller('StatCtrl', {
             $scope: $scope,
           });          
         }));
              
        it(
            'should return true if the data is empty', 
            function(){            
            expect($scope.isDataEmpty)
              .toBeTruthy();
            });      
         /*
        it('should return true if the data is not empty', function(){
            expect($scope.isDataEmpty).not.toBeTruthy();
        });  
         
        it('2', function(){
            expect(typeof $scope.arr).toBeTruthy();
        });
         
        it('3', function(){
            expect(typeof $scope.dataHorizChart).toBe('lala');
        });
         
        it('4', function(){
            expect(typeof TasksService).toBe('Object');
        });
         
         it('5', function(){
            expect(typeof StatCtrl.arr).toBe('lala');
        });
         
       */
    })
   })

});