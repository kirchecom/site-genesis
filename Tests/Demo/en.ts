import { Selector } from 'testcafe';
import { HOST } from '../Configuration';

fixture('en').page(`${HOST}/en`);

test('contains proper lang attribute', async t => {
    await t
        .expect(Selector('html').getAttribute('lang'))
        .eql('en')
});

test('has charset set correctly', async t => {
    await t
        .expect(Selector('meta[charset="UTF-8"]').exists)
        .ok()
});

test('specifies correct viewport settings', async t => {
    await t
        .expect(Selector('meta[name="viewport"]').getAttribute('content'))
        .eql('width=device-width, initial-scale=1, shrink-to-fit=no')
});

test('sets page title correctly', async t => {
    await t
        .expect(Selector('title').textContent)
        .eql('Welcome - kirche.com')
});

test('shows meta menu with language, privacy and imprint links', async t => {
    await t
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(0).getAttribute('href'))
        .eql('/')
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(0).textContent)
        .eql('Deutsch')
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(1).getAttribute('href'))
        .eql('/en/meta/privacy')
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(1).textContent)
        .eql('Privacy')
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(2).getAttribute('href'))
        .eql('/en/meta/imprint')
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(2).textContent)
        .eql('Imprint')
});

test('shows main menu with logo and links', async t => {
    await t
        .expect(Selector('.kirchecom-mainmenu').find('.navbar-brand').getAttribute('href'))
        .eql('/en')
        .expect(Selector('.kirchecom-mainmenu').find('.navbar-brand').find('svg').exists)
        .ok()
        .expect(Selector('.kirchecom-mainmenu').find('.navbar-toggler').getAttribute('aria-label'))
        .eql('Toggle navigation')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item').nth(0).find('a').getAttribute('href'))
        .eql('/en/page-1')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item').nth(0).find('a').textContent)
        .eql('Page 1')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item').nth(1).find('a').getAttribute('href'))
        .eql('/en/page-2')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item').nth(1).find('a').textContent)
        .eql('Page 2')
});

test('has two stained glass items', async t => {
    await t
        .expect(Selector('main .kirchecom-stainedglasswindow').find('.kirchecom-stainedglass').count)
        .eql(2)
});

test('contains greetings', async t => {
    await t
        .expect(Selector('main .kirchecom-stainedglasswindow').find('.kirchecom-stainedglass').nth(0).find('.card-body').textContent)
        .contains('Welcome 🎉')
});

test('contains Bible verse with link', async t => {
    await t
        .expect(Selector('main .kirchecom-stainedglasswindow').find('.kirchecom-stainedglass').nth(1).find('.card-body').textContent)
        .contains('Commit your deeds to the Lord, and your plans shall succeed.')
        .expect(Selector('main .kirchecom-stainedglasswindow').find('.kirchecom-stainedglass').nth(1).find('.card-body footer a').getAttribute('href'))
        .eql('https://www.bible.com/bible/1209/PRO.16')
});

test('contains footer', async t => {
    await t
        .expect(Selector('footer').find('.text-muted').textContent)
        .contains('The footer is always the same on any page.')
});

test('page 1 works', async t => {
    await t
        .click(Selector('.kirchecom-mainmenu').find('.nav-item').nth(0).find('a'))
        .expect(Selector('main').textContent)
        .contains('Please remove this page or insert your own content.')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item.active').find('a').textContent)
        .eql('Page 1')
});

test('page 2 works', async t => {
    await t
        .click(Selector('.kirchecom-mainmenu').find('.nav-item').nth(1).find('a'))
        .expect(Selector('main').textContent)
        .contains('Please remove this page or insert your own content.')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item.active').find('a').textContent)
        .eql('Page 2')
});

test('privacy page works', async t => {
    await t
        .click(Selector('.kirchecom-metamenu').find('.nav-link').nth(1))
        .expect(Selector('h1').textContent)
        .contains('Privacy Policy')
});

test('imprint page works', async t => {
    await t
        .click(Selector('.kirchecom-metamenu').find('.nav-link').nth(2))
        .expect(Selector('h1').textContent)
        .contains('Imprint')
});

test('switch to German version works', async t => {
    await t
        .click(Selector('.kirchecom-metamenu').find('.nav-link').nth(0))
        .expect(Selector('html').getAttribute('lang'))
        .eql('de')
});
