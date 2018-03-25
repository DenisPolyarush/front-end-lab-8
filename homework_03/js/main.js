function Employee(obj) {
  var _name = obj.name;
  var _age = obj.age;
  var _salary = obj.salary;
  var _primarySkill = obj.primarySkill;
  
  var _companyName = ``;
  var _history = ``;
  var _timeWorkInOneCompany = 0;
  var _allTimeWorks = 0;
  var _timerId = null;
  
  this.getSalary = function() {
    return _salary;
  }
  
  this.setSalary = function(val) {
    return _validateSalary(val)
  }
  
  this.getHistory = function() {
    return _history;
  }
  
  this.hire = function(val) {
    return _hire(val)
  }
  
  this.fire = function(){
    return _fire();
  }
  
  this.getWorkTimeInSeconds = function(){
    return _getWorkTimeInSeconds()
  }
    
  this.getName = function(){
    return _name;
  }
   
  this.getAge = function() {
    return _age;
  }
  
  function _getWorkTimeInSeconds(){
    if(_timerId){
     return _timeWorkInOneCompany;
    }else{
     return _allTimeWorks;
    }
  }
  
  function _hire (val){
    var currentDate = new Date();
    _timerId = setInterval(function(){
      _timeWorkInOneCompany++;
    }, 1000);
    _history += `${_name} is hired to ${val} in ${currentDate} \n`;
    _companyName = val;
    return `${_name} starts working at ${val} in ${currentDate} \n`;
  }
  
  function _fire(){
    var currentCompany = _companyName;
    _stop();
    _allTimeWorks += _timeWorkInOneCompany;
    _history += `${_name} is fired from ${_companyName} in ${new Date()} \n`;
    _companyName = '';
    return `${_name} ends working at ${currentCompany} in ${new Date()} \n`;
  }
  
  function _stop(){
    clearInterval(_timerId);
    _timerId = false;
  }
  
  function _validateSalary(val){
    if(val > _salary){
      _history += `change salary from ${_salary} to ${val} \n`;
      return _salary = val;
    }else if(val <= _salary){
      _history += `try to change salary from ${_salary} to ${val} \n`;
      return _salary;
    }else{
      console.log(`Please, set to salary only finite number`)
    }
  }
}

function Company (obj){
  var _name = obj.name;
  var _owner = obj.owner;
  var _maxCompanySize = obj.maxCompanySize;
  
  var _employees = [];
  var _listOfEmployees = ``;
  
  var currentDate = new Date();
  var _history = `${_name} created in ${currentDate} \n`;
  
  this.addNewEmployee = function(employee){
    return _addNewEmployee(employee)
  }
  
  this.removeEmployee = function(num){
    return _removeEmployee(num);
  }
  this.getFormattedListOfEmployees = function (){
    _getFormattedListOfEmployees(_employees);
    return _listOfEmployees;
  }
  this.getAverageSalary = function(){
    return _averageSalary(_employees)
  }
  
  this.getEmployees = function(){
    return _employees;
  }
  
  this.getAverageAge = function(){
    return _averageAge(_employees)
  }
  
  this.getHistory = function(){
    return _history;
  }
  
  function _addNewEmployee(employee){
    if(employee instanceof Employee){
      
      if(_employees.length < _maxCompanySize){
        _employees.push(employee);
        _history += employee.hire(_name);
      }else{
        var index = minSalary(_employees);
        
        _removeEmployee(index);
        _employees.push(employee);
        _history += employee.hire(_name);
      }
    }else{
      console.log(`Please try to add Employee instance`);
    }
  }
  
  function _removeEmployee(num){
    _history += _employees[num].fire();
    _employees.splice(num, 1);
    
  }
  
  function _getFormattedListOfEmployees(val){
    for(var i =0; i < val.length; i++){
      _listOfEmployees += `${val[i].getName()} - works in ${_name} ${val[i].getTimeWorkInOneCompany()} seconds \n`;
    }
    
  }
  
  function _averageAge(arr){
    var res = 0;
    for(var i = 0; i < arr.length; i++){
      res += arr[i].getAge();
    }
    return res / arr.length;
  }
  
  function _averageSalary(arr){
    var res = 0;
    for(var i = 0; i < arr.length; i++){
      res += arr[i].getSalary();
    }
    return res / arr.length;
  }
  
  function minSalary(arr){
    var res = 0;
    var startsNumber = arr[0].getSalary();
    for(var i =0; i < arr.length; i++){
      if(arr[i].getSalary() < startsNumber){
        res = i;
      }
    }
    return res;
  }
}
//код для тестирования


var artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
var vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
var vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
var ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
var orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
var anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

var epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});

epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());

/*
"Epam was created in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time)"
"Artem starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Vova starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Vasyl starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Ivan starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Orest starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Orest ends working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Anton starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
*/
epam.removeEmployee(2);


console.log(vasyl.getHistory());

/*
"Vasyl is hired to Epam in Mon Mar 12 2018 07:45:55 GMT+0200 (FLE Standard Time)"
"Vasyl is fired from Epam in Mon Mar 12 2018 07:45:55 GMT+0200 (FLE Standard Time)"
*/
//
console.log(epam.getAverageSalary()); // -> 2125
console.log(epam.getAverageAge());  // -> 21.25

epam.addNewEmployee(5,6,9,5); // -> Please try to add Employee instance

setTimeout(() => {
   epam.removeEmployee(1);
   console.log(artem.getWorkTimeInSeconds()); // -> 5.5744444444444445
}, 5000);

vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getHistory());
/*
"Vova is hired to Epam in Mon Mar 12 2018 08:08:48 GMT+0200 (FLE Standard Time)"
"try to change salary from 2000 to 900"
"change salary from 2000 to 2200"
*/
  