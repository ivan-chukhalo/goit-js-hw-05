"use strict";
console.log("________________task 5.1________________");

const Account = function(incomeAccountData) {
  this.login = incomeAccountData.login;
  this.email = incomeAccountData.email;
};

Account.prototype.getInfo = function() {
  console.log(`Login is ${this.login} and email is ${this.email}.`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof"
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com"
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
