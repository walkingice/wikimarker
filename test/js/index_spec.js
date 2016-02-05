import {expect} from 'chai';

import {foo} from '../../app/js/index';

describe('index.js', () => {
    it('First case', () => {
        expect(foo).to.equal('bar');
    })
});

