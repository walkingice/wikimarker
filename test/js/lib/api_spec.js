import {expect} from 'chai';

import {getLinks} from '../../../app/js/lib/api';

describe('api.jsx', () => {
    describe('func getLinks', () => {
        it('Get May 5', () => {
            return getLinks({title: 'May_5'}).then(function (array) {
                // it should fetch fake data
                expect(array.length).to.equal(1276);
                expect(array[0]).to.equal('Wikipedia:Protection policy');
            });
        });
    });

    describe('func getLinks', () => {
        it('Get November 1', () => {
            return getLinks({title: 'November_1'}).then(function (array) {
                // it should fetch fake data
                expect(array.length).to.equal(1124);
                expect(array[0]).to.equal('Wikipedia:Protection policy');
            });
        });
    });

});

