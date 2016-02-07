var _storage;

const _BOOKMARK_KEY = 'ThereIsNoSpoon';

export function setStorage (storage) {
  // for unit test, we might inject mock-storage;
  _storage = storage;
}

export function getStorage () {
  _check();
  return _storage;
}

/* if item not exists, add it. Remove it otherwise*/
export function toggleItem (item) {
  let dict = getBookmarks();
  if (dict[item]) {
    delete dict[item];
  } else {
    dict[item] = 1;
  }
  saveBookmarks(dict);
}

export function getBookmarks () {
  let s = getStorage();
  let item = s.getItem(_BOOKMARK_KEY)
  item = item ? item : '{}';
  return JSON.parse(item);
}

export function saveBookmarks(dict) {
  let s = getStorage();
  s.setItem(_BOOKMARK_KEY, JSON.stringify(dict));
}

function _check() {
  if (!_storage) {
    throw 'no storage to use';
  }
  if (!(_storage.getItem instanceof Function)) {
    throw 'not a valid storage';
  }
}
