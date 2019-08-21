import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Organism.Footer';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('renders text', async t => {
    await t
        .expect(Selector('footer').innerText)
        .eql('The footer content can be a simple text string or more complex elements.')
});

test.page(getUrlFor(PROTOTYPE_NAME))('renders inside a container', async t => {
    await t
        .expect(Selector('footer').hasClass('container'))
        .ok()
});

test.page(getUrlFor(PROTOTYPE_NAME))('renders text muted', async t => {
    await t
        .expect(Selector('footer').find('div').hasClass('text-muted'))
        .ok()
});

test.page(getUrlFor(PROTOTYPE_NAME))('separates from the main content with a border on top', async t => {
    await t
        .expect(Selector('footer').find('div').hasClass('border-top'))
        .ok()
});
