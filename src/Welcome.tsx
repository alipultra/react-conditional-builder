import * as React from 'react';

type WelcomeProps = {
  lang?: string
}

const Welcome = (props: WelcomeProps) : React.JSX.Element => {
  return (
      <div>Welcome {props.lang}</div>
  );
}
export default Welcome