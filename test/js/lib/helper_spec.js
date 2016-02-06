import {expect} from 'chai';

import {parseDate} from '../../../app/js/lib/helper';

describe('helper.jsx', () => {
    it('Test parseDate', () => {
        expect(parseDate(new Date('2015-02-07'))).to.equal('February_7');
        expect(parseDate(new Date('2016-02-07'))).to.equal('February_7');
        expect(parseDate(new Date('2015-02-28'))).to.equal('February_28');
        expect(parseDate(new Date('2015-11-01'))).to.equal('November_1');
        expect(parseDate(new Date('2015-05-05'))).to.equal('May_5');
    })
});

