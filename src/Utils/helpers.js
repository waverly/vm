export const generateKey = pre => {
  return `${pre}_${new Date().getTime()}`;
};

export const stateUpdate = data => {
  // create a new "State" object without mutating
  // the original State object.
  const newState = Object.assign({}, this.state, {
    data
  });

  console.log("inside of stateTest");
  console.log(data);

  // store the new state object in the component's state
  this.setState(newState);
};
