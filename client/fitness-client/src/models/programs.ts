import { types } from "mobx-state-tree";
import { ApiServices } from '../services/api-services';

export const ProgramItem = types.model({
    id: types.identifierNumber,
    name: types.string,
    duration: types.number
})
.actions( self =>({
    setName(newName){
        self.name = newName;
        console.log(self.name);
    },
    
    setDuration(newDuration){
        if(newDuration)
        self.duration = JSON.parse(newDuration);
        console.log(self.duration);
    }  
}))




  