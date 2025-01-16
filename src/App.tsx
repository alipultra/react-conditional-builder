import { ConditionBuilder } from './components/ConditionBuilder';
import { initialState } from './contants';
import './index.scss';
import * as React from 'react';

const App = () : React.JSX.Element => {
  const [rule, setRule] = React.useState(initialState) 
  return (
    <div className="App">
      <ConditionBuilder rule={rule} />
    </div>
  );
}

export default App