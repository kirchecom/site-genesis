import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Molecule.StainedGlass';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('shows title and text', async t => {
    await t
        .expect(Selector('.kirchecom-stainedglass').find('.card-body').find('.card-title').innerText)
        .eql('A Stained Glass Element')
        .expect(Selector('.kirchecom-stainedglass').find('.card-body').find('.card-text').innerText)
        .eql('This is a simple stained glass element containing a StainedGlassBody with title and text set.')
});

test.page(getUrlFor(PROTOTYPE_NAME, 'Color'))('renders in color', async t => {
    await t
        .expect(Selector('.kirchecom-stainedglass').hasClass('bg-kirchecom-color-42'))
        .ok()
        .expect(Selector('.kirchecom-stainedglass').getStyleProperty('background-color'))
        .eql('rgb(19, 207, 107)')
});

test.page(getUrlFor(PROTOTYPE_NAME, 'Image'))('renders with image', async t => {
    await t
        .expect(Selector('.kirchecom-stainedglass').find('img').exists)
        .ok()
        .expect(Selector('.kirchecom-stainedglass').find('.card-body').exists)
        .notOk()
});

test.page(getUrlFor(PROTOTYPE_NAME, 'Image with Copyright Notice'))('renders with copyright notice', async t => {
    await t
        .expect(Selector('.kirchecom-stainedglass').find('img').exists)
        .ok()
        .expect(Selector('.kirchecom-stainedglass').find('.small').innerText)
        .eql('© by Dummy Image Source')
});

test.page(getUrlFor(PROTOTYPE_NAME, 'Image with Text'))('renders with image, title and text', async t => {
    await t
        .expect(Selector('.kirchecom-stainedglass').find('img').exists)
        .ok()
        .expect(Selector('.kirchecom-stainedglass').find('.card-body').find('.card-title').innerText)
        .eql('Image with Text')
        .expect(Selector('.kirchecom-stainedglass').find('.card-body').find('.card-text').innerText)
        .eql('Images and videos can also have a StainedGlassBody containing text and optionally a title.')
});

test.page(getUrlFor(PROTOTYPE_NAME, 'Bible Verse'))('renders with Bible verse', async t => {
    await t
        .expect(Selector('.kirchecom-stainedglass').find('.card-body').find('.kirchecom-blockquote').find('p').innerText)
        .contains('In nothing be anxious')
        .expect(Selector('.kirchecom-stainedglass').find('.card-body').find('.kirchecom-blockquote').find('footer').innerText)
        .eql('Philippians 4,6-7 (American Standard Version)')
        .expect(Selector('.kirchecom-stainedglass').find('.card-body').find('.kirchecom-blockquote').find('footer').find('a').exists)
        .ok()
});

test.page(getUrlFor(PROTOTYPE_NAME, 'Quote'))('renders with quote', async t => {
    await t
        .expect(Selector('.kirchecom-stainedglass').find('.card-body').find('.kirchecom-blockquote').find('p').innerText)
        .eql('Spread love everywhere you go. Let no one ever come to you without leaving happier.')
        .expect(Selector('.kirchecom-stainedglass').find('.card-body').find('.kirchecom-blockquote').find('footer').innerText)
        .eql('Mother Teresa')
        .expect(Selector('.kirchecom-stainedglass').find('.card-body').find('.kirchecom-blockquote').find('footer').find('a').exists)
        .notOk()
});
