export default store => next => action => {
  console.log('log: ' + JSON.stringify(action));
  return next(action);
}
