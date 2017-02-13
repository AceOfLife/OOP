function Person(first, last, age, gender, interests, fullname) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.fullname = fullname;
  
  this.fullname = function(){
    return this.name.first + " " + this.name.last;
  };
  this.bio = function() {
    return (this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + this.name.first + ' likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    return "Hi! I'm " + this.name.first + ".";
  };
}

