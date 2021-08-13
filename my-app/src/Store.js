//액션
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = (username) => ({
  type: 'DECREMENT',
  payload: username,
});

//상태
const initstate = {
  username: '',
  number: 1,
};

//액션의 결과를 걸러낸다
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      //return되면 호출한 쪽에서 받는게 아니라, return되는 순간 ui변경
      // -> number+1, username은 인자로 받은 username으로 변경
      return { number: state.number + 1, username: action.payload };
    case 'DECREMENT':
      return { number: state.number - 1, username: action.payload };
    default:
      return state;
  }
};

export default reducer;
