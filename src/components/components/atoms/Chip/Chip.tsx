import React from 'react'
import { SCChip } from './styled'

const Chip = ({value}:{value: string}) => {
  return (
    <SCChip>
        {value}
    </SCChip>
  )
}

export default Chip