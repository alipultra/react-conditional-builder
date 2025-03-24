import * as React from 'react';
import { BodyRulesProps } from '../types/condition';
import { ConditionBuilder } from './ConditionBuilder';


export const IfStatement = (props: BodyRulesProps) : React.JSX.Element => {
  console.log(props.rules)
  const updateRule = () => {

  }
  return (
    <>
      { !! props.rules && props.rules.map((rule, index) => {
        return (
          <div key={index}>
            { rule.type === 'if' ? 
              (<ConditionBuilder rule={rule} updateRule={updateRule} />) : (<></>) 
            }
          </div>
        ) 
      })}
    </>
  )  
}