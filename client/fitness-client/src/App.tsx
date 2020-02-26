import * as React from 'react'
import { Component } from 'react'
import { Provider } from 'mobx-react'

import { ProgramStore } from './stores/program.store'
import { ProgramAdd } from './stores/program.add'
import { ProgramList } from './stores/program.list'

export class App extends React.Component {
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
export default App;
