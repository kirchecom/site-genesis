import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Atom.Blockquote';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('shows text and reference', async t => {
    await t
        .expect(Selector('.kirchecom-blockquote').find('div').innerText)
        .eql('Spread love everywhere you go. Let no one ever come to you without leaving happier.')
        .expect(Selector('.kirchecom-blockquote').find('footer').innerText)
        .eql('Mother Teresa')
});

test.page(getUrlFor(PROTOTYPE_NAME, 'Without Author'))('renders without author', async t => {
    await t
        .expect(Selector('.kirchecom-blockquote').find('div').innerText)
        .eql('Live, Laugh, Love')
        .expect(Selector('.kirchecom-blockquote').find('footer').exists)
        .notOk()
});

test.page(getUrlFor(PROTOTYPE_NAME, 'With Link'))('renders with link', async t => {
    await t
        .expect(Selector('.kirchecom-blockquote').find('div').innerText)
        .eql('I cannot and will not recant anything, since it is neither safe nor right to go against conscience. May God help me. Amen.')
        .expect(Selector('.kirchecom-blockquote').find('footer').innerText)
        .eql('Martin Luther')
        .expect(Selector('.kirchecom-blockquote').find('footer').find('a').attributes)
        .contains(<unknown>{'href': 'https://en.wikipedia.org/wiki/Martin_Luther#Diet_of_Worms', 'target': '_blank', 'rel': 'noopener'})
});
