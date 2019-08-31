import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Molecule.MetaMenu';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('has nav links', async t => {
    await t
        .expect(Selector('.kirchecom-metamenu').find('a.nav-link').count)
        .gt(1)
});

test.page(getUrlFor(PROTOTYPE_NAME))('is aligned correctly', async t => {
    await t
        .expect(Selector('.kirchecom-metamenu').hasClass('justify-content-end'))
        .ok()
});
