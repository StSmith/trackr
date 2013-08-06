'use strict';


function HomeCtrl($scope){

	var setLocal = function (name, data){
  		localStorage.setItem(name, JSON.stringify(angular.copy(data)));
  	}

  	var getLocal = function (name){
		var retrievedObject = localStorage.getItem(name);
		return JSON.parse(retrievedObject);
  	}	

  	$scope.incomeItems = [
  		{name: 'Example', amount: 100}
  	];

  	$scope.expenseItems = [
  		{name: 'Example', amount: 100}
  	];

    var localIncome = getLocal('incomeItems');
    var localExpense = getLocal('expenseItems');

    if(!localIncome){
      setLocal('incomeItems', $scope.incomeItems);
    }

    if(!localIncome){
      setLocal('expenseItems', $scope.expenseItems);
    }

  	$scope.incomeItems = getLocal('incomeItems');

  	$scope.expenseItems = getLocal('expenseItems');

  	$scope.addIncomeItem = function(){
  		var newIncome = {};
  		newIncome.name = angular.copy($scope.newIncomeName);
  		newIncome.amount = angular.copy($scope.newIncomeAmount);
  		if(newIncome.amount && newIncome.name){
	  		$scope.incomeItems.push(newIncome);
	  		setLocal('incomeItems', $scope.incomeItems);
	  		$scope.newIncomeName = '';
  			$scope.newIncomeAmount = '';
        document.getElementById("incomeName").focus();
	  	}else{
	  		alert('Your new income item must have a name and amount (the amount must only contain numbers)');
	  	}

  		
  	}

  	$scope.deleteIncomeItem = function(incomeItem){
  		var index=$scope.incomeItems.indexOf(incomeItem)
  		$scope.incomeItems.splice(index,1); 
  		setLocal('incomeItems', $scope.incomeItems);  
  	}

  	$scope.addExpenseItem = function(){
  		var newExpense = {};
  		newExpense.name = angular.copy($scope.newExpenseName);
  		newExpense.amount = angular.copy($scope.newExpenseAmount);
  		if(newExpense.amount && newExpense.name){
  			$scope.expenseItems.push(newExpense);
  			setLocal('expenseItems', $scope.expenseItems);
  			$scope.newExpenseName = '';
  			$scope.newExpenseAmount = '';
        document.getElementById("expenseName").focus();
  		}else{
  			alert('Your new expense amount must have a name and amount (the amount must only contain numbers)')
  		}
  		
  	}

  	$scope.deleteExpenseItem = function(expenseItem){
  		var index=$scope.expenseItems.indexOf(expenseItem)
  		$scope.expenseItems.splice(index,1); 
  		setLocal('expenseItems', $scope.expenseItems);  
  	}

  	$scope.totalIncome = function(){
		var sum = 0;
		for( var t=0; t < $scope.incomeItems.length; t++) { sum += parseFloat($scope.incomeItems[t].amount) }
		return sum.toFixed(0);
	}		

	$scope.totalExpense = function(){
		var sum = 0;
		for( var t=0; t < $scope.expenseItems.length; t++) { sum += parseFloat($scope.expenseItems[t].amount) }
		return sum.toFixed(0);
	}

	$scope.netFlow = function(){
		var balance = $scope.totalIncome() - $scope.totalExpense();
		return balance.toFixed(0);
	}
}

function SettingsCtrl($scope){
	$scope.settings = {};
}