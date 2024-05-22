import React, { useContext } from 'react'
import { CalcContext } from '../Context/CalcContext'

const getStyleName = btn =>{
  const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',

  }

  return className[btn]
}

export const Button = ({ value }) => {
  const { calc, setCalc} = useContext(CalcContext);
  console.log(setCalc);

    // user click comma
    const commaClick = () => {
      setCalc({
        ...calc,
        num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
      });
    }

    // User resetclick
    const resetClick = () =>{
      setCalc({ sign: '', num:0, res: 0})
    }

    // User click number
    const handleClickButton = () => {
      const numberString = value.toString()

      let numberValue;
      if(numberString === '0' && calc.num === 0){
        numberValue = "0"
      }else{
        numberValue = Number(calc.num + numberString)
      }

      setCalc({
        ...calc,
        num: numberValue

      })
    }
    // User Click operation
    const signClick = () => {
      setCalc({
        sign: value,
        res: !calc.res && calc.num ? calc.num : calc.res,
        num: 0

      })
    }
    //User click equals
    const equalsClick = () => {
      if(calc.res && calc.num){
        const Math = (a, b, sign) => {
          const result = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            'x': (a, b) => a * b,
            '/': (a, b) => a / b,
          }
          return result[sign](a, b);
        }
        setCalc({
          res: Math(calc.res, calc.num, calc.sign),
          sign: '',
          num: 0
        })
      } 
      }

      //User Click Percent
      const percentClick = () => {
        setCalc({
          num: (calc.num / 100),
          res: (calc.res / 100),
          sign: ''
        })
      }
      
      //User click invert button
      const invertClick = () =>{
        setCalc({
          num: calc.num ? calc.num * -1 : 0,
          res: calc.res ? calc.res * -1 : 0,
          sign: ''
        })
      }


      const handleBtnClick = () =>{
   
        const result ={
          '.': commaClick,
          'C': resetClick,
          '/': signClick,
          'x': signClick,
          '-': signClick,
          '+': signClick,
          '=': equalsClick,
          '%': percentClick,
          '+-': invertClick,

        }

        if(result[value]){
          return result[value]()
        }else{
          return handleClickButton()
        }
      }
    

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
  }
