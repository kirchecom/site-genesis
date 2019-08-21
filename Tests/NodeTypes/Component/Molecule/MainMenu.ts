import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Molecule.MainMenu';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('has SVG logo', async t => {
    await t
        .expect(Selector('.kirchecom-mainmenu').find('a.navbar-brand').find('svg'))
        .ok()
});

test.page(getUrlFor(PROTOTYPE_NAME))('has nav items', async t => {
    await t
        .expect(Selector('.kirchecom-mainmenu').find('ul.navbar-nav').find('li.nav-item').count)
        .eql(5)
});

test.page(getUrlFor(PROTOTYPE_NAME))('has an active nav item', async t => {
    await t
        .expect(Selector('.kirchecom-mainmenu').find('ul.navbar-nav').find('li.nav-item.active').count)
        .eql(1)
});
