import * as React from 'react';
import { RulesProps } from '../types/condition';
import { IfStatement } from './IfStatement';
import { ThemeContext } from '../ThemeContext';


export const ConditionBuilder = (props: RulesProps) : React.JSX.Element => {
  const { theme } = React.useContext(ThemeContext)
  
  const handleFieldChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    console.log(element.value)
  }
  
  const handleFieldOperatorChange = (event: React.FormEvent<HTMLSelectElement>, index: number) => {

  }
  
  const handleAddRule = () => {
    let newParam = { field: 'isRegistered', operator: '!', value: null }
    const conditions = [...props.rule.condition.conditions, newParam]
    const operator = props.rule.condition.conditions.length > 0 ? '&&' : null
    // console.log(conditions, operator)
    const condition = {...props.rule.condition, conditions, operator }
    props.updateRule(condition)
    // console.log('add rule', condition)
  }

  const removeRule = (index) => {
    let conditions = [...props.rule.condition.conditions]
    conditions.splice(index, 1)

    let operator = props.rule.condition.operator
    const type = props.rule.condition.type
    if (conditions.length <= 1) {
      operator = null
    }

    const condition = {...props.rule.condition, conditions, operator }
    props.updateRule(condition)
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
              <button className={theme} onClick={(event) => handleAddRule() }>+ Rule</button>
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
                        <button onClick={(event) => removeRule(index) }>x</button>
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
          <div className="Row">
            <div className="statement-col">ELSE</div>
            <div></div>
          </div>
        </>
      ) : ( <></> )
      }
    </>
  )  
}