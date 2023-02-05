import React from 'react'
import { SCInput } from './styled'

const Input = ({value, onChange} : {value: string, onChange: (e: any) => void}) => {
  return (
    <div>
        <SCInput type={'text'} value={value} onChange={onChange} placeholder='Filter podcasts...'/>
    </div>
  )
}

export default Input