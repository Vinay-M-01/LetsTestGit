class User{
    static count = 0;
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
        User.count ++;
        
    }
    
    static countUsers(){
        console.log('There are 50 User');
    }
    register(){
        console.log(this.username + ' is now registered')
    }
    
    static registeredUser(){
        console.log('The number of users registered are = ' + User.count);
    }
}

let vin1 = new User('vinay1', 'vinay@email.com', '12345')
let vin2 = new User('vinay2', 'vinay2@email.com', '123425')

vin1.register()
vin2.register()
User.countUsers()
User.registeredUser();

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage; 
    }

    getPackage(){
        console.log(this.username + ' is subscribed to the '+ this.package + ' package');
    }
}

let mike =  new Member('mike', 'mike@gmail.com', '123', 'standard');

mike.getPackage();
mike.register();


