import React, { Children, createContext, useState } from 'react'

export const CalcContext = createContext()

export const CalcProvider = ({children}) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const ProviderValue = {
    calc, setCalc
  }







  return (
    <CalcContext.Provider value={ProviderValue}>
      {children}
    </CalcContext.Provider>
  )
}
