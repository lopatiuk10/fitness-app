import { ApiServices } from '../services/api-services';
import { ProgramItem } from '../models/programs';
import { types, unprotect } from "mobx-state-tree";

import '../App.css';

const service: ApiServices = new ApiServices;
let targetId = 0;

export const ProgramList = types.model({
  programs: types.array(ProgramItem),
  isVisible: types.optional(types.boolean, false)
})
.actions(self => ({
  async getPrograms ( e ) {
    e.stopPropagation();
    const result = await service.getAllPrograms();
    self.programs = result;
  },
  
  async deleteProgram(e, id ) {
    e.stopPropagation();
    debugger;
    const result = await service.deleteProgram(id);
    
    self.programs = result;
    debugger;
    console.log( result );
  },

  showForm( e, id ){
    e.stopPropagation();
    targetId = id;
    let form = document.getElementById("edit-form")
    form.className = 'displayBlock';
  },

  async editProgram( e, inputName, inputDuration){
    e.preventDefault();
    let data = {
      name: inputName,
      duration: inputDuration,
      coach_:45
    }
    debugger;
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





