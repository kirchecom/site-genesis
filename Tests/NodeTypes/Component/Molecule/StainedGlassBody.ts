import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Molecule.StainedGlassBody';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('shows title and text', async t => {
    await t
        .expect(Selector('.card-title').innerText)
        .eql('Wanted: Stained Glass Element!')
        .expect(Selector('.card-text').innerText)
        .eql('Please insert me as a body for a stained glass element.')
});
