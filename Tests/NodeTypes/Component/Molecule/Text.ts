import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Molecule.Text';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('renders text', async t => {
    await t
        .expect(Selector('body').innerText)
        .contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium molestie est, sed aliquet lorem.')
});

test.page(getUrlFor(PROTOTYPE_NAME))('allows HTML tags', async t => {
    await t
        .expect(Selector('body').find('strong').innerText)
        .eql('ipsum')
});
