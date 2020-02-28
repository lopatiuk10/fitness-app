import { ApiServices } from '../services/api-services';
import { ProgramItem } from '../models/programs';
import { types, unprotect } from "mobx-state-tree";

import '../App.css';
import { AthleteItem } from '../models/athlete';

const service: ApiServices = new ApiServices;


export const AthleteList = types.model({
  athletes: types.array(AthleteItem)
})
.actions(self => ({
  async getAthletes ( e ) {
    e.stopPropagation();
    const result = await service.getAthletes();
    debugger;
    self.athletes = result;
  }
}))

export const athleteStore = AthleteList.create({});

unprotect(athleteStore);