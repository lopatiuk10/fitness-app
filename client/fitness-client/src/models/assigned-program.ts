import { types } from "mobx-state-tree";
import { ApiServices } from '../services/api-services';

export const AssignedProgramItem = types.model({
    id: types.identifierNumber,
})
