
import React from 'react'
import { Component } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'

import { ProgramStore } from './program.store'

interface ProgramAddProps {
  programStore?: ProgramStore
}

@inject('programStore')
@observer
export class ProgramAdd extends Component<ProgramAddProps> {
  @observable private task: string = ''

  handleTaskChange = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => {
    this.task = value
  }

  handleAddProgram = (e) => {
    this.props.programStore.addProgram(this.task)
    this.task = '';
    e.target.disabled=true;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddProgram}>Add</button>
      </div>
    )
  }
}