import { ApiServices } from '../services/api-services';
import { types, unprotect } from "mobx-state-tree";
import { user } from './user.store';

import '../App.css';
import { AssignedProgramItem } from '../models/assigned-program';

const service: ApiServices = new ApiServices;
let targetId = 0;

export const AssignedProgramList = types.model({
  assignedPrograms: types.array(AssignedProgramItem),
})
.actions(self => ({
  async getMyPrograms () {
    const result = await service.getAthletesPrograms(user.id);
    if( result === `Not found ${user.id}`)
    return self.assignedPrograms;
    else{
        self.assignedPrograms = result;
    }
  }

})
)

export const assignedProgramStore = AssignedProgramList.create({
});

unprotect(assignedProgramStore);
