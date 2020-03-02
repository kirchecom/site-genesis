import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Molecule.Quote';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('shows text and author', async t => {
    await t
        .expect(Selector('.kirchecom-blockquote').find('div').innerText)
        .eql('The greatest glory in living lies not in never falling, but in rising every time we fall.')
        .expect(Selector('.kirchecom-blockquote').find('footer').innerText)
        .eql('Nelson Mandela')
});

test.page(getUrlFor(PROTOTYPE_NAME))('renders without link', async t => {
    await t
        .expect(Selector('.kirchecom-blockquote').find('footer').find('a').exists)
        .notOk()
});
