import React from 'react'
import { CmpMuiBase } from './components/CmpMuiBase'
import { DarkToggle } from './components/DarkToggle'

export const App: React.FC = () => {
  return (
    <>
      <DarkToggle>Dark/Light Toggle</DarkToggle>
      <h1>Hello World!</h1>
      <CmpMuiBase />
    </>
  )
}
