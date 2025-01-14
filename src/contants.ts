import { RuleType } from "./types/condition";

export const initialState: RuleType = {
  type: "if",
  condition: {
    type: "condition",
    operator: null,
    conditions: [
      {
        field: "isRegistered",
        operator: "!",
        value: null
      }
    ]
  },
  body: [
    {
      type: "if",
      condition: {
        type: "condition",
        operator: null,
        conditions: [
          {
              field: "isMember",
              operator: null,
              value: null
          }
        ]
      },
      body: [
        {
          type: "declaration",
          name: "login",
          operator: "=",
          value: "true"
        }
      ],
      elseBody: null
    },
    {
      type: "declaration",
      name: "login",
      operator: "=",
      value: "false"
    }
  ],
  elseBody: null
}