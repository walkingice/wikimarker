export function setListTitle (title) {
  return {
    type: 'SET_LIST_TITLE',
    listTitle: title
  }
}

export function setList (links) {
  return {
    type: 'SET_LIST',
    links
  }
}
