import React from 'react'
import { observer, inject } from 'mobx-react'

import { ProgramStore, Program } from './program.store'
import { ProgramListItem } from './program.list.item'
import '../App.css';


interface ProgramListProps {
  programStore?: ProgramStore
}

const ProgramListComponent = ({ programStore: { programList } }: ProgramListProps) => (
  <>
  <table className="programs">
    <caption>Programs</caption>
    <thead>
      <tr>
        <td>ID</td><td>Name</td><td>Duration</td>
      </tr>
    </thead>
    <tbody>
    {programList.map((program, idx) => (
      <ProgramListItem key={idx} program={program} />
    ))}
    </tbody>
    </table>
  </>
)

export const ProgramList = inject('programStore')(observer(ProgramListComponent))