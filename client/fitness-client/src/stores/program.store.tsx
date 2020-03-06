import { ApiServices } from '../services/api-services';
import { ProgramItem } from '../models/programs';
import { types, unprotect } from "mobx-state-tree";
import { user } from './user.store';

import '../App.css';

const service: ApiServices = new ApiServices;
let targetId = 0;

export const ProgramList = types.model({
  programs: types.array(ProgramItem),
  isVisible: types.optional(types.boolean, false)
})
.actions(self => ({
  async getPrograms () {
    const result = await service.getAllPrograms(user.id);
    if( result === `Not found ${user.id}`)
    return self.programs;
    self.programs = result;
  },

  async createProgram (e, programName, programDuration ) {
    e.stopPropagation();
    e.preventDefault();

    const body = {
      name: programName,
      duration: programDuration,
      coach_:user.id
    }



    const result = await service.createProgram(body);
    self.programs.push(result);
    let form = document.getElementById("create-form")
    form.className = 'hiddenBlock';

  },
  
  async deleteProgram(e, id ) {
    e.stopPropagation();
    const result = await service.deleteProgram(id);
    
    self.programs = result;
    console.log( result );
  },

  showForm( e, id ){
    e.stopPropagation();
    targetId = id;
    // self.isVisible = true;
    // debugger;

    let form = document.getElementById("edit-form")
    form.className = 'displayBlock';
  },

  showCreateForm( e ){
    e.stopPropagation();
    // self.isVisible = true;
    // debugger;

    let form = document.getElementById("create-form")
    form.className = 'displayBlock';
  },

  hideCreateForm ( e ){
    e.preventDefault();
    // self.isVisible = false;

    let form = document.getElementById("create-form")
    form.className = 'hiddenBlock';
  },


  hideForm ( e ){
    e.preventDefault();
    // self.isVisible = false;

    let form = document.getElementById("edit-form")
    form.className = 'hiddenBlock';
  },

  async editProgram( e, inputName, inputDuration){
    e.preventDefault();
    let data = {
      name: inputName,
      duration: inputDuration,
      coach_: user.id
    }

    let result = await service.editProgram(targetId, data);

    self.programs = result;

    let form = document.getElementById("edit-form")

    form.className = 'hiddenBlock';
  }
}))


export const list = ProgramList.create({
});



export const model = ProgramItem.create({
  id: 0,
  name: "",
  duration: 0
})

unprotect(list);





