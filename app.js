'use strict';
//global vars
var storeOpenHours = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function generateTable() {
  var table = document.createElement('table');
  table.setAttribute('id', 'store-table');
  document.body.appendChild(table);

  //store in a variable (create, set content, set attribute, put on page)
  return table;
}

//constructor function
function Store(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.name = name;
  // this.storeOpen = 1;
  // this.storeClose = 16;
  this.totalCookiesSold = 0;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.hourlyCookieData = [];
  //we want this to be invoked because every time we instantiate a new Store we will want the hourly data
  this.generateHourlyData();
}

Store.prototype.generateHourlyData = function() {
  //maxCustPerHour-minCustPerHour gives us the total number of customers we can have in an hour between min and max
  var custPerHourRange = this.maxCustPerHour - this.minCustPerHour;
  //vars for for loop
  var numCustomers, numCookiesSold;
  //for(var i = this.storeOpen; i < this.storeClose; i++)
  //run for loop for each hour in the storeOpenHours array
  for(var i = 0; i < storeOpenHours.length; i++)
  //multiply random number by custPerHourRange to find out how many custPerHour there were and add minCust so there will be at least the min.
    numCustomers = Math.random() * custPerHourRange + this.minCustPerHour;
    //multiply the numberOfCustomers by the avg cookies per customer to determine how many cookies were sold
    //then round down to get rid of decimals and assign to numCookiesSold
  numCookiesSold = Math.floor(numCustomers * this.avgCookiesPerCust);
  //combine the number of cookies to find the total to display in the table
  this.totalCookiesSold += numCookiesSold;
  //push the number of cookies sold into the hourlyCookieData array for use in the table
  this.hourlyCookieData.push(numCookiesSold);
};

var pike = new Store('pike', 23, 65, 6.3);
