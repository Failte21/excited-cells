const getNeighbors = (state: number[], index: number) => {
  const len = state.length;
  if (index > 0 && index < len - 1) return [state[index - 1], state[index + 1]];
  else if (index === 0) return [state[len - 1], state[index + 1]];
  else return [state[index - 1], state[0]];
};

const updateState = (state: number[]) => {
  const newState = [...Array(state.length).map((_) => 0)];
  state.forEach((value, index) => {
    const [left, right] = getNeighbors(state, index);
    if (left === 1 && right === 1) newState[index] = 0;
    else if (left === 1 || right === 1) newState[index] = 1;
    else newState[index] = 0;
  });
  return newState;
};

const excitedCells = (initialState: number[], nSteps: number) => {
  const finalState = [...Array(nSteps).keys()].reduce((acc, index) => {
    const updatedState = updateState(acc);
    console.log(updatedState);
    return updatedState;
  }, initialState);
  return finalState;
};

export default excitedCells;
