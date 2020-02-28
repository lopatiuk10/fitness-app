import axios, { AxiosResponse, AxiosStatic } from 'axios';

export class ApiServices{

   private path = "http://localhost:5000";

   public getAllPrograms = async () => {
   const results = await axios.get ( `${this.path}/programs` );
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
        return result.data;
    }
}