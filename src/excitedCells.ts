const getNeighbors = (state: number[], index: number, len: number) => {
  if (index > 0 && index < len - 1) return [state[index - 1], state[index + 1]];
  else if (index === 0) return [state[len - 1], state[index + 1]];
  else return [state[index - 1], state[0]];
};

const updateState = (state: number[], len: number) => {
  const newState = [...Array(len).map((_) => 0)];
  state.forEach((_, index) => {
    const [left, right] = getNeighbors(state, index, len);
    if (left === 1 && right === 1) newState[index] = 0;
    else if (left === 1 || right === 1) newState[index] = 1;
    else newState[index] = 0;
  });
  return newState;
};

const excitedCells = (initialState: number[], nSteps: number) => {
  const len = initialState.length;
  const finalState = [...Array(nSteps)].reduce((acc) => {
    const updatedState = updateState(acc, len);
    return updatedState;
  }, initialState);
  return finalState;
};

export default excitedCells;
