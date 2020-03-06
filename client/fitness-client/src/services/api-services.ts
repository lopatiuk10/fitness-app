import axios from 'axios';

export class ApiServices{

   private path = "http://localhost:5000";

   public getAllPrograms = async (id) => {
    debugger;
   const results = await axios.get ( `${this.path}/programs/${id}` );
   return results.data;
   }

    public deleteProgram = async (id) => {
        debugger;
       const result = await axios.delete(`${this.path}/programs/${id}`);
       debugger;
       return result.data;
       
    }

    public editProgram = async (id, body) => {
        debugger;
        const result = await axios.patch(`${this.path}/programs/${id}`, body);
        return result.data;
    }

    public getAthletes = async () => {
        const result = await axios.get(`${this.path}/athletes`);
        debugger;
        return result.data;
    }

    public login = async (body) => {
        const result = await axios.post(`${this.path}/login`, body,{ withCredentials: true });
        let userId = await axios.post(`${this.path}/email`, result.data);
        debugger;
        return userId.data;
    }

    public setRole = async ( data ) => {
        const result = await axios.post(`${this.path}/roles`, data);
        return result;
    }

    public getRole = async (id) => {
        const result = await axios.get(`${this.path}/roles/${id}`);
        return result.data;
    }

    public registration = async (user) => {
        const result = await axios.post(`${this.path}/registration`, user);
        return result.data;
    }

    public isAuthorized = async () => {
        const result = await axios.get(`${this.path}/login`,{ withCredentials: true } );
        debugger;
        return result.data;
    }

    public getAthletesPrograms = async (id) => {
        const result = await axios.get(`${this.path}/assigned/${id}`);
        debugger;
        return result.data;
    }

    public createProgram = async (body) => {
        const result = await axios.post(`${this.path}/programs`, body);
        return result.data;
    }

    public logout = async () => {
        const result = await axios.get(`${this.path}/logout`);
        return result.data;
    }
}