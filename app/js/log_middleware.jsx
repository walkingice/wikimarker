export default store => next => action => {
  if (action.type === 'SET_CONTENT') {
    console.log('log: set content from data:', Object.keys(action.data));
  } else {
    console.log('log:',  JSON.stringify(action));
  }
  return next(action);
}
