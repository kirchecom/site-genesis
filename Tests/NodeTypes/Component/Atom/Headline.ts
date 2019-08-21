import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Atom.Headline';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('shows text', async t => {
    await t
        .expect(Selector('h1').innerText)
        .eql('He is risen, He is risen indeed!')
});

test.page(getUrlFor(PROTOTYPE_NAME, 'h1'))('renders as h1', async t => {
    await t
        .expect(Selector('h1').exists)
        .ok()
        .expect(Selector('h2').exists)
        .notOk()
        .expect(Selector('h3').exists)
        .notOk()
});

test.page(getUrlFor(PROTOTYPE_NAME, 'h2'))('renders as h2', async t => {
    await t
        .expect(Selector('h1').exists)
        .notOk()
        .expect(Selector('h2').exists)
        .ok()
        .expect(Selector('h3').exists)
        .notOk()
});

test.page(getUrlFor(PROTOTYPE_NAME, 'h3'))('renders as h3', async t => {
    await t
        .expect(Selector('h1').exists)
        .notOk()
        .expect(Selector('h2').exists)
        .notOk()
        .expect(Selector('h3').exists)
        .ok()
});
