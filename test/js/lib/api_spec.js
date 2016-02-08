import {expect} from 'chai';

import {useFakeData, getLinks, getLinksApi, getContentApi} from '../../../app/js/lib/api';

beforeEach(function () {
    useFakeData(true);
});

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

    describe('func getLinksApi', () => {
        it('Get Taiwan', () => {
            expect(getLinksApi({title: 'Taiwan'}))
                .to.equal('https://en.wikipedia.org/w/api.php' +
                    '?action=parse&prop=links&format=json&page=Taiwan');
        });
        it('Get Japan', () => {
            expect(getLinksApi({title: 'Japan'}))
                .to.equal('https://en.wikipedia.org/w/api.php' +
                    '?action=parse&prop=links&format=json&page=Japan');
        });
    });

    describe('func getContentApi', () => {
        it('Get Taiwan', () => {
            expect(getContentApi({title: 'Taiwan'}))
                .to.equal('https://en.wikipedia.org/w/api.php' +
                    '?action=parse&section=0&prop=text&format=json&page=Taiwan');
        });
        it('Get Japan', () => {
            expect(getContentApi({title: 'Japan'}))
                .to.equal('https://en.wikipedia.org/w/api.php' +
                    '?action=parse&section=0&prop=text&format=json&page=Japan');
        });
    });
});

