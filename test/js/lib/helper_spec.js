import {expect} from 'chai';

import {parseDate, randomPick} from '../../../app/js/lib/helper';

describe('helper.jsx', () => {
    describe('func parseDate', () => {
        it('Parse valid date', () => {
            expect(parseDate(new Date('2015-02-07'))).to.equal('February_7');
            expect(parseDate(new Date('2016-02-07'))).to.equal('February_7');
            expect(parseDate(new Date('2015-02-28'))).to.equal('February_28');
            expect(parseDate(new Date('2015-11-01'))).to.equal('November_1');
            expect(parseDate(new Date('2015-05-05'))).to.equal('May_5');
        });
    });

    describe('func randomPick', () => {
        it('without limit for normal list', () => {
            let links = ['aaa', 'b bb', 'ccc', 'ddd', 'eee'
            , 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk'];
            let pick = randomPick(links);
            expect(pick.length).to.equal(10);
        })

        it('with limit for normal list', () => {
            let links = ['aaa', 'b bb', 'ccc', 'ddd', 'eee'
            , 'fff', 'ggg', 'hhh', 'iii', 'jjj', 'kkk'];
            let pick = randomPick(links, 3);
            expect(pick.length).to.equal(3);
        })

        it('without limit for abnormal list', () => {
            let links = ['aaa', 'b bb', 'ccc', 'ddd', 'eee'
            , 'fff', 'ggg', 'hhh', 'iii', 'not_valid_42'];
            let pick = randomPick(links);

            // the last one element should be drop
            expect(pick.length).to.equal(9);
        })

    });
});

