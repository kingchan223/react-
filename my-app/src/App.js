import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import Sub from './Sub';

// useRef (디자인)
// dom을 변경할 때 사용

function App() {
  const myRef = useRef(null);
  const [list, setList] = useState(
    { id: 1, name: '누구' },
    { id: 2, name: '모두' },
  );

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef);
          myRef.current.style.backgroundColor = 'red';
        }}
      ></button>
      <div ref={myRef}>박스</div>
    </div>
  );
}
export default App;
