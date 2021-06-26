import axios from "axios";

class Auth {


    user;
    authenticated = false;
    constructor() {
        this.admin = false;
    }

    logIn(data){


        axios.get('http://localhost:60259/api/Users/' + data.username + '/' + data.password).then(response => {
            // this.user = response.data;
            // console.log(this.user);
            // if (response.data.role === "Admin") {
            //     this.admin = true;
            // }
            this.authenticated = true;
            this.user = response.data;
            if(response.data.role === 'Admin'){
                this.admin = true;
            }
        }).catch(error => {
            this.authenticated = false;
            console.log('Nije uspelo');
        })
        return this.authenticated;
        //get neki
        //ako je request uspeo i ima lika u bazi set authenticated u true
    }

    

    getUserId() {
        return this.user.id;
    }

    // login() {
    //     this.authenticated = true;
    //     console.log('you are logged in')
    // }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }

    isAdmin() {
        return this.admin;
    }


}

export default new Auth();