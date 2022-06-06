

class User {
    static count = 0;
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    User.count ++;
  }

  register() {
    console.log(this.username + " is now registered");
  }

  static registeredUser(){
    console.log('The number of users registered are = ' + User.count);
}

}

class Member extends User {
  constructor(username, email, password, memberpackage) {
    super(username, email, password);
    this.package = memberpackage;
    
    let todaysDate = new Date();
    const membershipactivetillYear = todaysDate.getFullYear();
    const membershipactivetillMonth = todaysDate.getMonth();
    const membershipactivetillDay = todaysDate.getDay();
    this.membershipactivetilldate = new Date(
      membershipactivetillYear,
      membershipactivetillMonth,
      membershipactivetillDay
    );
  }

  renewMembership() {
    const membershipactivetillYear = this.membershipactivetilldate.getFullYear();
    const membershipactivetillMonth = this.membershipactivetilldate.getMonth();
    const membershipactivetillDay = this.membershipactivetilldate.getDay();

    this.membershipactivetilldate = new Date(
      membershipactivetillYear,
      membershipactivetillMonth + 1, //just increase the month by 1
      membershipactivetillDay
    );
  }

  subscriptionActiveTill() {
    console.log(
      this.username +
        " is scubscribed to " +
        this.package +
        "uptill" +
        this.membershipactivetilldate
    );
  }

  getPackage() {
    console.log(this.username + " is scubscribed to " + this.package);
  }
}

let vin1 = new User('vinay1', 'vinay@email.com', '12345')
let vin2 = new User('vinay2', 'vinay2@email.com', '123425')

vin1.register()
vin2.register()

User.registeredUser();

const mike = new Member("mike", "abc@gmail.com", "pass123", "Standard Packege");
const mike2 = new Member("mike", "abc@gmail.com", "pass123", "Yearly Packege");

mike.getPackage();

mike.renewMembership();
mike.subscriptionActiveTill();