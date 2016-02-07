import {expect} from 'chai';
import MockLocalStorage from 'mock-localstorage';

import {setStorage, getStorage, getBookmarks, toggleItem} from '../../../app/js/lib/storage';

beforeEach(function () {
    setStorage(new MockLocalStorage());
});

describe('storage.jsx', () => {
    describe('func getStorage', () => {
        it('check storage existence', () => {
            expect(getStorage()).to.exist;
        });
    });

    describe('func toggleItem', () => {
        it('add an item into storage', () => {
            expect(getBookmarks()).to.deep.equal({});
            toggleItem('foo');
            expect(getBookmarks()).to.deep.equal({foo: 1});
        });

        it('remove an item into storage', () => {
            toggleItem('foo');
            toggleItem('bar');
            toggleItem('foo');
            expect(getBookmarks()).to.deep.equal({bar: 1});
        });
    });
});

