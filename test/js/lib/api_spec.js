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
            expect(getLinksApi({page: 'Taiwan'}))
                .to.equal('https://en.wikipedia.org/w/api.php' +
                    '?action=parse&format=json&prop=links&page=Taiwan');
        });
        it('Get Japan', () => {
            expect(getLinksApi({page: 'Japan'}))
                .to.equal('https://en.wikipedia.org/w/api.php' +
                    '?action=parse&format=json&prop=links&page=Japan');
        });
    });

    describe('func getContentApi', () => {
        it('Get Taiwan', () => {
            expect(getContentApi({page: 'Taiwan'}))
                .to.equal('https://en.wikipedia.org/w/api.php' +
                    '?action=parse&format=json&section=0&prop=text&page=Taiwan');
        });
        it('Get Japan', () => {
            expect(getContentApi({page: 'Japan'}))
                .to.equal('https://en.wikipedia.org/w/api.php' +
                    '?action=parse&format=json&section=0&prop=text&page=Japan');
        });
    });
});

