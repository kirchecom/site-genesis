import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Organism.Main';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('renders text', async t => {
    await t
        .expect(Selector('main').innerText)
        .eql('Please insert the whole page content as mainContent.')
});

test.page(getUrlFor(PROTOTYPE_NAME))('renders inside a container', async t => {
    await t
        .expect(Selector('main').hasClass('container'))
        .ok()
});

test.page(getUrlFor(PROTOTYPE_NAME, 'StainedGlassWindow'))('renders a stained glass window', async t => {
    await t
        .expect(Selector('main').find('.kirchecom-stainedglasswindow').exists)
        .ok()
});

test.page(getUrlFor(PROTOTYPE_NAME, 'ThreeColumns'))('renders three columns', async t => {
    await t
        .expect(Selector('main').find('.col-lg').count)
        .eql(3)
});

test.page(getUrlFor(PROTOTYPE_NAME, 'TwoColumns'))('renders two columns', async t => {
    await t
        .expect(Selector('main').find('.col-md').count)
        .eql(2)
});
