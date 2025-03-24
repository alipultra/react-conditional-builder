import { ConditionBuilder } from './components/ConditionBuilder';
import { initialState } from './contants';
import './index.scss';
import * as React from 'react';
import { ThemeProvider } from './ThemeContext';

const App = () : React.JSX.Element => {
  const [rule, setRule] = React.useState(initialState)

  const updateRule = (condition) => {
    setRule(prevState => ({
      ...prevState,
      condition,
    }))
  }

  return (
    <ThemeProvider>
      <ConditionBuilder rule={rule} updateRule={updateRule} />
    </ThemeProvider>
  );
}

export default App