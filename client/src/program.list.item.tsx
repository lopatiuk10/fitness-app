import React from 'react'

import { Program } from './program.store'

interface ProgramListItemProps {
  program: Program
}

export const ProgramListItem = ({ program }: ProgramListItemProps) => 

  <tr>
    <td>{program.id}</td><td>{program.name}</td><td>{program.duration} days</td>
  </tr>
