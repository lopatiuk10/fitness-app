import React from 'react'
import { observer, inject } from 'mobx-react'

import { ProgramStore, programStore } from './program.store'
import { ProgramListItem } from './program.list.item'
import '../program.scss';

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
    <tr>
    {programList.map((program, idx) => (
      <ProgramListItem key={idx} program={program} />
    ))}
    </tr>
    </tbody>
    </table>
  </>
)

export const ProgramList = inject('programStore')(observer(ProgramListComponent))