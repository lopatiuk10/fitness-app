import { observable, action, reaction, computed } from 'mobx';
import axios from 'axios';

export interface Program {
  id: number,
  name: string,
  duration: number
}

export class ProgramStore {
  @observable programList: Program[] = []

//   constructor() {
//     reaction(
//       () => this.programList.filter(program => !program.isComplete),
//       incompletedTasks => {
//         if (incompletedTasks.length > 5) {
//           alert("Dude. You've got too much on your plate.")
//         }
//       }
//     )
//   }

  

  @action
  addProgram() {
    axios.get ( "http://localhost:5000/programs" ).then(res=>{
        const programs: Program [] = res.data;
        programs.map(item=>{
            this.programList.push(item);
        })
    })
    
  }

  
}

export const programStore = new ProgramStore()