export interface Fields {
  field?: string,
  operator: any,
  value: any
}

export interface Declaration {
  type?: string,
  name?: string,
  operator?: string, 
  value: any
}


export interface Condition<F extends Fields = Fields> {
  type?: string,
  operator: any,
  conditions: FieldArray<F>
}

export interface RuleType<C extends Condition = Condition, D extends Declaration = Declaration> {
  type?: string,
  condition?: C,
  body?: RuleTypeArray<RuleType, D>
  elseBody?: D
}

export type FieldArray<F extends Fields> = F[];
export type RuleTypeArray<R extends RuleType, D extends Declaration> = (R | D)[];

export interface RulesProps {
  rule: RuleType,
  updateRule: any
}

export interface BodyRulesProps<D extends Declaration = Declaration> {
  rules: RuleTypeArray<RuleType, D>,
}
