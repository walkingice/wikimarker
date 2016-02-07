export default store => next => action => {
  if (action.type === 'SET_CONTENT') {
    console.log('log: set content length', action.htmlText.length);
  } else {
    console.log('log:',  JSON.stringify(action));
  }
  return next(action);
}
