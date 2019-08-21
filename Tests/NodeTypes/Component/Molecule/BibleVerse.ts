import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Molecule.BibleVerse';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('shows text and reference', async t => {
    await t
        .expect(Selector('.kirchecom-blockquote').find('p').innerText)
        .eql('In the beginning God created the heavens and the earth.')
        .expect(Selector('.kirchecom-blockquote').find('footer').innerText)
        .eql('Genesis 1,1 (American Standard Version)')
});

test.page(getUrlFor(PROTOTYPE_NAME))('renders with link', async t => {
    await t
        .expect(Selector('.kirchecom-blockquote').find('footer').find('a').attributes)
        .contains(<unknown>{'href': 'https://www.bible.com/bible/12/GEN.1', 'target': '_blank', 'rel': 'noopener'})
});

test.page(getUrlFor(PROTOTYPE_NAME, 'Without Link'))('renders without link', async t => {
    await t
        .expect(Selector('.kirchecom-blockquote').find('footer').find('a').exists)
        .notOk()
});
