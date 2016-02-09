import {expect} from 'chai';
import MockLocalStorage from 'mock-localstorage';

import {setStorage, getStorage, getBookmarks, saveItem, removeItem} from '../../../app/js/lib/storage';

beforeEach(function () {
    setStorage(new MockLocalStorage());
});

describe('storage.jsx', () => {
    describe('func getStorage', () => {
        it('check storage existence', () => {
            expect(getStorage()).to.exist;
        });
    });

    describe('func saveItem', () => {
        it('add an item into storage', () => {
            expect(getBookmarks()).to.deep.equal({});
            saveItem('foo');
            expect(getBookmarks()).to.deep.equal({foo: []});
        });

        it('remove an item from storage', () => {
            saveItem('foo');
            saveItem('bar');
            removeItem('foo');
            expect(getBookmarks()).to.deep.equal({bar: []});
        });

        it('add item with notes', () => {
            saveItem('foo');
            saveItem('bar', ['foobar']);
            expect(getBookmarks()).to.deep.equal({foo: [], bar: ['foobar']});
        });

    });
});

