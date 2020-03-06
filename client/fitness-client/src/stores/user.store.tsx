import { ApiServices } from '../services/api-services';
import { ProgramItem } from '../models/programs';
import { types, unprotect } from "mobx-state-tree";
import { Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { User } from '../models/user';
import '../App.css';
import { history } from 'react-router-history';

import React from 'react';
import { isCaughtException } from 'mobx/lib/internal';

//const history = createBrowserHistory();


const service: ApiServices = new ApiServices();

export let userRole;

export const model = User.create({
    id:0,
    name: "",
    lastname: "",
    email: "triviani",
    role:"Coach",
    password: "1234"
});

const AuthorizedUser = types.model({
    id: types.optional( types.number, 0 ),
    email: types.optional( types.string, "" ),
    role: types.optional( types.number, 0 ),
    isAuthorized: types.optional(types.boolean, false),
    isRegistrated: types.optional( types. boolean, false)
})
.actions(self => ({
    async sendUser ( e, userEmail, userPassword ) {
        e.preventDefault();
        
        const data = {
            email: userEmail,
            password: userPassword
        }
        let result = await service.login(data);

        if( result ) {
            self.id = result.id;
            self.email = result.email;
            let role = await service.getRole(self.id);
            self.role = role.role_id;  
            self.isAuthorized = true; 
            debugger;
            window.location.href = '/redirect';
            debugger;
            model.setEmail("");
            model.setPassword("");
            
        }   
        
    },

    async isAuthenticate ( ) {
        let result = await service.isAuthorized();
        if(result){
        self.isAuthorized = true;
        self.id = result.id;
        self.email = result.email;
        let role = await service.getRole(self.id);
        self.role = role.role_id; 
        debugger;
        }
        else{
            self.isAuthorized = false;
            debugger;
        }
    },

    async registration ( e, userName, userLastname, userEmail, userRole, userPassword ) {
        e.preventDefault();
        let roleNumber;
        if(userRole === "Coach"){
            roleNumber = 2;
        }
        else

        roleNumber = 1;

        const data = {
            name: userName,
            lastname: userLastname,
            email: userEmail,
            password: userPassword
        }

        let result = await service.registration( data );
        if(result === 'Registrated'){
            self.isRegistrated = true;
        }
        else {
            const roleData = {
                user_: result.id,
                role_: roleNumber
            }

            let role = await service.setRole(roleData);
            console.log(role);
        }
        window.location.href = '/login';
    },

    async logout (e) {
        e.stopPropagation();
        let result = await service.logout();
        if( result === "Logged out"){
            self.isAuthorized = false;
            //return self.auth;
            //service.isAuthorized();
            window.location.href = '/';
        }
        debugger;


        return result;

    }

}));



export const user = AuthorizedUser.create({

});

unprotect(user);

