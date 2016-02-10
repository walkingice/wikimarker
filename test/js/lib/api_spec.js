import {expect} from 'chai';

import {useFakeData, getLinks, buildLinksApi, buildContentApi, buildImgsQueryApi}
    from '../../../app/js/lib/api';

import * as url from 'url';
import * as qs from 'querystring';

beforeEach(function () {
    useFakeData(true);
});

describe('api.jsx', () => {
    describe('func getLinks', () => {
        it('Get May 5', () => {
            return getLinks({page: 'May_5'}).then(function (array) {
                // it should fetch fake data
                expect(array.length).to.equal(1276);
                expect(array[0]).to.equal('Wikipedia:Protection policy');
            });
        });
    });

    describe('func getLinks', () => {
        it('Get November 1', () => {
            return getLinks({page: 'November_1'}).then(function (array) {
                // it should fetch fake data
                expect(array.length).to.equal(1124);
                expect(array[0]).to.equal('Wikipedia:Protection policy');
            });
        });
    });

    describe('func buildLinksApi', () => {
        it('Get Taiwan', () => {
            expect(buildLinksApi({page: 'Taiwan'}))
                .to.equal('https://en.wikipedia.org/w/api.php' +
                    '?action=parse&format=json&prop=links&page=Taiwan');
        });
        it('Get Japan', () => {
            expect(buildLinksApi({page: 'Japan'}))
                .to.equal('https://en.wikipedia.org/w/api.php' +
                    '?action=parse&format=json&prop=links&page=Japan');
        });
    });

    describe('func buildContentApi', () => {
        it('Get Taiwan', () => {
            let parsed = url.parse(buildContentApi({titles: 'Taiwan'}, true));
            let param = qs.parse(parsed.query);
            expect(param).to.deep.equal({
                action: 'query',
                prop: 'extracts|images|categories|imageinfo',
                format: 'json',
                redirects: "",
                clshow: '!hidden',
                iiprop: 'url',
                titles: 'Taiwan'
            });
        });
        it('Get Japan', () => {
            let parsed = url.parse(buildContentApi({titles: 'Japan'}, true));
            let param = qs.parse(parsed.query);
            expect(param).to.deep.equal({
                action: 'query',
                prop: 'extracts|images|categories|imageinfo',
                format: 'json',
                redirects: "",
                clshow: '!hidden',
                iiprop: 'url',
                titles: 'Japan'
            });
        });
    });

    describe('func buildImgsQueryApi', () => {
        it('Query One file', () => {
            let parsed = url.parse(buildImgsQueryApi({titles: 'foo.png'}, true));
            let param = qs.parse(parsed.query);
            expect(param).to.deep.equal({
                action: 'query',
                prop: 'imageinfo',
                format: 'json',
                iiprop: 'url',
                titles: 'foo.png'
            });
        });
        it('Query two files', () => {
            let parsed = url.parse(buildImgsQueryApi({
                titles: 'foo.png|bar.png'}, true));
            let param = qs.parse(parsed.query);
            expect(param).to.deep.equal({
                action: 'query',
                prop: 'imageinfo',
                format: 'json',
                iiprop: 'url',
                titles: 'foo.png|bar.png'
            });
        });
    });
});

