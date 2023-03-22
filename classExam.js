class Person {
        constructor(email, password, birthYear) {
            this.email = email;
            this.password = password;
            this.birthYear = birthYear;
            this.book = 'Javascript';
    }
    present() {
      return 'I have a ' + this.carname;
    }
    read() {
        return "I love to read this " + this.book;
    }
  }
  
  class User extends Person {
    constructor(email, password, mobileNumber) {
      super(email, password);
      this.mobileNumber = mobileNumber;
    }
   
    login() {
        return `I can login this website by using email : ${this.email} , password : ${this.password} and mobileNumber :  ${this.mobileNumber}`;
    }
  }
  
  let user = new User('somboon@gmail.com', 'abcdef', '0123456');
  // console.log(user.login());
  document.getElementById("demo").innerHTML = user.login();