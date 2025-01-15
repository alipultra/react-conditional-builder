import * as React from 'react';
import { RulesProps } from '../types/condition';
import { IfStatement } from './IfStatement';


export const ConditionBuilder = (props: RulesProps) : React.JSX.Element => {
  const handleFieldChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    console.log(element.value)
  }
  
  const handleFieldOperatorChange = (event: React.FormEvent<HTMLSelectElement>, index: number) => {

  }
  console.log(props.rule)
  return (
    <>
      { !! props.rule && !! props.rule.condition? (
        <>
          <div>
            <div>IF</div>
            { props.rule.condition.conditions.length > 1 ? 
              (
                  <select name="condition" value={props.rule.condition.operator} onChange={(event) => handleFieldChange(event)}>
                    <option value="&&">And</option>
                    <option value="||">Or</option>
                  </select>
              ) : (<></>) }
            <div>
              <button>Add</button>
            </div>
          </div>
          <div>
            { props.rule.condition.conditions.map((condition, index) => {
              return (
                <div key={index}>
                  <div>{condition.field}</div>
                  <div>
                    { condition.operator === '!' || condition.value === null ? 
                      ( <select name="operator" value={condition.operator || ''} onChange={(event) => handleFieldOperatorChange(event, index)}>
                          <option value="">{ 'True' }</option>
                          <option value="!">{ 'False' }</option>
                        </select> ) : 
                      ( 
                        <select name="operator" value={condition.operator} onChange={(event) => handleFieldOperatorChange(event, index)}>
                          <option value="==">{ '==' }</option>
                          <option value="!=">{ '!=' }</option>
                          <option value=">">{ '>' }</option>
                          <option value=">=">{ '>=' }</option>
                          <option value="<">{ '<' }</option>
                          <option value="<=">{ '<=' }</option>
                        </select>
                      ) 
                    }
                  </div>
                  { condition.value !== null ? 
                    (<>{condition.value}</>) : (<></>) 
                  }
                </div>
              )
            })}
          </div>
          <div>
            <IfStatement rules={props.rule.body} />
          </div>
        </>
      ) : ( <></> )
      }
    </>
  )  
}