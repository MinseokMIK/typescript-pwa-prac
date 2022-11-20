import React from 'react';

type GreetingsProps = {
  name: string;
  mark?: string;
  onClick: (name: string) => void; //아무것도 리턴하지 않는다는 함수
};

const Greetings = ({ name, mark, onClick }: GreetingsProps) => {
  const handleClick = () => {onClick(name)};
  return (
    <div>
      Hello, {name} {mark}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

Greetings.defaultProps = {
  mark: 'ms',
};

export default Greetings;
