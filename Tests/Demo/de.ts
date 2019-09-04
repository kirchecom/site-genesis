import { Selector } from 'testcafe';
import { HOST } from '../Configuration';

fixture('de').page(HOST);

test('contains proper lang attribute', async t => {
    await t
        .expect(Selector('html').getAttribute('lang'))
        .eql('de')
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
        .eql('Willkommen - kirche.com')
});

test('shows meta menu with language, privacy and imprint links', async t => {
    await t
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(0).getAttribute('href'))
        .eql('/en')
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(0).textContent)
        .eql('English')
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(1).getAttribute('href'))
        .eql('/de/meta/privacy')
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(1).textContent)
        .eql('Datenschutz')
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(2).getAttribute('href'))
        .eql('/de/meta/imprint')
        .expect(Selector('.kirchecom-metamenu').find('.nav-link').nth(2).textContent)
        .eql('Impressum')
});

test('shows main menu with logo and links', async t => {
    await t
        .expect(Selector('.kirchecom-mainmenu').find('.navbar-brand').getAttribute('href'))
        .eql('/')
        .expect(Selector('.kirchecom-mainmenu').find('.navbar-brand').find('svg').exists)
        .ok()
        .expect(Selector('.kirchecom-mainmenu').find('.navbar-toggler').getAttribute('aria-label'))
        .eql('Navigation umschalten')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item').nth(0).find('a').getAttribute('href'))
        .eql('/de/page-1')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item').nth(0).find('a').textContent)
        .eql('Seite 1')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item').nth(1).find('a').getAttribute('href'))
        .eql('/de/page-2')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item').nth(1).find('a').textContent)
        .eql('Seite 2')
});

test('has two stained glass items', async t => {
    await t
        .expect(Selector('main .kirchecom-stainedglasswindow').find('.kirchecom-stainedglass').count)
        .eql(2)
});

test('contains greetings', async t => {
    await t
        .expect(Selector('main .kirchecom-stainedglasswindow').find('.kirchecom-stainedglass').nth(0).find('.card-body').textContent)
        .contains('Herzlich Willkommen 🎉')
});

test('contains Bible verse with link', async t => {
    await t
        .expect(Selector('main .kirchecom-stainedglasswindow').find('.kirchecom-stainedglass').nth(1).find('.card-body').textContent)
        .contains('Befiehl dem HERRN deine Werke, dann werden deine Pläne gelingen.')
        .expect(Selector('main .kirchecom-stainedglasswindow').find('.kirchecom-stainedglass').nth(1).find('.card-body footer a').getAttribute('href'))
        .eql('https://www.bibleserver.com/text/MENG/Sprüche16,3')
});

test('contains footer', async t => {
    await t
        .expect(Selector('footer').find('.text-muted').textContent)
        .contains('Der Footer ist auf allen Seiten gleich.')
});

test('page 1 works', async t => {
    await t
        .click(Selector('.kirchecom-mainmenu').find('.nav-item').nth(0).find('a'))
        .expect(Selector('main').textContent)
        .contains('Diese Seite kannst du löschen oder eigene Inhalte hinzufügen.')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item.active').find('a').textContent)
        .eql('Seite 1')
});

test('page 2 works', async t => {
    await t
        .click(Selector('.kirchecom-mainmenu').find('.nav-item').nth(1).find('a'))
        .expect(Selector('main').textContent)
        .contains('Diese Seite kannst du löschen oder eigene Inhalte hinzufügen.')
        .expect(Selector('.kirchecom-mainmenu').find('.nav-item.active').find('a').textContent)
        .eql('Seite 2')
});

test('privacy page works', async t => {
    await t
        .click(Selector('.kirchecom-metamenu').find('.nav-link').nth(1))
        .expect(Selector('h1').textContent)
        .contains('Datenschutz')
});

test('imprint page works', async t => {
    await t
        .click(Selector('.kirchecom-metamenu').find('.nav-link').nth(2))
        .expect(Selector('h1').textContent)
        .contains('Impressum')
});

test('switch to English version works', async t => {
    await t
        .click(Selector('.kirchecom-metamenu').find('.nav-link').nth(0))
        .expect(Selector('html').getAttribute('lang'))
        .eql('en')
});
