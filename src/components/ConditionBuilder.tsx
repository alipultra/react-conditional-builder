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
  
  const handleAddRule = () => {
    // let newParam = { field: variables[0].name, operator: '!', value: null }
    console.log('add rule')
  }

  return (
    <>
      { !! props.rule && !! props.rule.condition? (
        <>
          <div className="Row">
            <div className="statement-col">IF</div>
            { props.rule.condition.conditions.length > 1 ? 
              (
                  <select name="condition" value={props.rule.condition.operator} onChange={(event) => handleFieldChange(event)}>
                    <option value="&&">And</option>
                    <option value="||">Or</option>
                  </select>
              ) : (<></>) }
            <div className="Col">
              <button onClick={(event) => handleAddRule() }>+ Rule</button>
            </div>
          </div>
          <div className="Row">
            <div className="statement-col"></div>
            <div className="Col">
              { props.rule.condition.conditions.map((condition, index) => {
                return (
                  <div key={index}>
                    <div className="content-statement">
                      <div className="Row">
                        <div className="Col">{condition.field}</div>
                        <div className="Col">
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
                      <div className="Col">
                        <button onClick={(event) => handleAddRule() }>x</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="Row">
            <div className="statement-col"></div>
            <div className="Col">
              <IfStatement rules={props.rule.body} />
            </div>
          </div>
        </>
      ) : ( <></> )
      }
    </>
  )  
}