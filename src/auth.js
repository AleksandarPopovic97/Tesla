import axios from "axios";

class Auth {


    user;
    authenticated = false;
    constructor() {
        this.admin = false;
    }

    async logIn(data){


        await axios.get('http://localhost:60259/api/Users/' + data.username + '/' + data.password).then(response => {
            // this.user = response.data;
            // console.log(this.user);
            // if (response.data.role === "Admin") {
            //     this.admin = true;
            // }
            
            this.user = response.data;
            console.log(response.data);
            if(!this.user.isConfirmed){
                alert('Molimo Vas da sacekate odobrenje od strane admina.');
                return;
            }
            this.authenticated = true;
            if(response.data.role === 'Admin'){
                this.admin = true;
            }
        })
        .catch(error => {
            this.authenticated = false;
            alert('Ne postoji takav korisnik!')
        })
        return this.authenticated;
        //get neki
        //ako je request uspeo i ima lika u bazi set authenticated u true
    }

    getUser(){
        return {
            role: this.user.role,
            username: this.user.username,
            password: this.user.password,
            name: this.user.name,
            lastName: this.user.lastName,
            birthday: this.user.birthday,
            isConfirmed: this.user.isConfirmed,
            crew: this.user.crew,
            image: this.user.image

        };
    }

    getUserId() {
        return this.user.id;
    }

    // login() {
    //     this.authenticated = true;
    //     console.log('you are logged in')
    // }

    logout() {
        this.authenticated = false;
        this.admin = false;
        
    }

    isAuthenticated() {
        return this.authenticated;
    }

    isAdmin() {
        return this.admin;
    }


}

export default new Auth();