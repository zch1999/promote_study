import React, { useState } from 'react'
import { Counter } from './App'

function Parent() {
  const [ state, setState ] = useState('loading')
  function onSuccess() {
    setState('success')
  }

  retrun (
    <div>
      {state}
      <Counter onSuccess={onSuccess}/>
    </div>
  )
}