import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Organism.Header';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('contains the main menu', async t => {
    await t
        .expect(Selector('header').find('.kirchecom-mainmenu').exists)
        .ok()
});

test.page(getUrlFor(PROTOTYPE_NAME))('renders inside a container', async t => {
    await t
        .expect(Selector('header').hasClass('container'))
        .ok()
});
