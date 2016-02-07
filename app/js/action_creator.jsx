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

export function setDetail (title) {
  return {
    type: 'SET_DETAIL',
    title
  }
}

export function setContent (text) {
  return {
    type: 'SET_CONTENT',
    htmlText: text
  }
}

export function toggleBookmark (bookmark) {
  return {
    type: 'TOGGLE_BOOKMARK',
    bookmark
  }
}

