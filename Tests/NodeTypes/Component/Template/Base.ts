import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Template.Base';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('contains header', async t => {
    await t
        .expect(Selector('header').exists)
        .ok()
});

test.page(getUrlFor(PROTOTYPE_NAME))('contains main', async t => {
    await t
        .expect(Selector('main').exists)
        .ok()
});

test.page(getUrlFor(PROTOTYPE_NAME))('contains footer', async t => {
    await t
        .expect(Selector('footer').exists)
        .ok()
});
