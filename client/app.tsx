import React from 'react'
import { Component } from 'react'
import { Provider } from 'mobx-react'

import { ProgramStore } from './src/program.store'
import { ProgramAdd } from './src/program.add'
import { ProgramList } from './src/program.list'

export class App extends Component {
  private programStore: ProgramStore = new ProgramStore()

  render() {
    return (
      <Provider programStore={this.programStore}>
        <div>
          <ProgramAdd />
          <ProgramList />
        </div>
      </Provider>
    )
  }
}