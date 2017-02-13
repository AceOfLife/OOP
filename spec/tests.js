 // var myTest = require('../spec/datatypespec');

(function() {
  'use strict';

describe("OOP test cases", function() {

    it("The person should be called 'Bob Smith' if when firstname  and last name are passed as parameters", function() {
      var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
      expect(function(){ (person1.fullname).toEqual('Bob Smith')});

    });

    it("The person should be 29 years old when age is passed as parameters", function() {
      var person2 = new Person('Adam', 'Johnson', 29, 'male', ['Basketball', 'Coding']);
      expect(function(){ (person1.age).toEqual('Bob Smith')});

    });

    it("The person's should be 'Hi! I\'m Adamu.' if when first name  is Adamu", function() {
      var person1 = new Person('Adamu', 'Musa', 45, 'male', ['music', 'skiing']);
      expect(function(){ (person1.first).toEqual('Hi! I\'m Adamu.')});

    });

    it("it should be say 'female' if when gender  is female", function() {
      var person1 = new Person('Pat', 'Anderson', 12, 'female', ['singing', 'styling']);
      expect(function(){ (person1.gender).toEqual('female')});

    });

    it("it should be say 'male' if when gender  is male", function() {
      var person1 = new Person('John', 'Okoro', 86, 'male', ['singing', 'stylist']);
      expect(function(){ (person1.gender).toEqual('male')});

    });

    it("it should be say 'Pat Anderson is 32 years old. Pat likes singing and styling.' to read full bio", function() {
      var person1 = new Person('Pat', 'Anderson', 12, 'female', ['singing', 'styling']);
      expect(function(){ (person1.bio).toEqual('female')});

    });

    it("it should be return 'Mark' as last name", function() {
      var person1 = new Person('David', 'Mark', 56, 'male', ['Reading', 'Politics']);
      expect(function(){ (person1.last).toEqual('Mark')});

    });

});
})()