import axios from "axios";

class Auth {


    user;
    constructor() {
        this.admin = false;
        this.getUser();
        this.authenticated = false;
    }

    getUser() {

        axios.get('http://localhost:60259/api/Users/1').then(response => {
            this.user = response.data;
            if (response.data.role === "Admin") {
                this.admin = true;
            }
        }).catch(error => {
            console.log(error);
        })

        return this.user;
    }

    getUserId() {
        return this.user.id;
    }

    login() {
        this.authenticated = true;
        console.log('you are logged in')
    }

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