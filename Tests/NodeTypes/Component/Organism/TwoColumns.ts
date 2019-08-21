import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Organism.TwoColumns';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('renders two columns', async t => {
    await t
        .expect(Selector('.row').find('.col-md').count)
        .eql(2)
});

test.page(getUrlFor(PROTOTYPE_NAME))('renders column 1 content', async t => {
    await t
        .expect(Selector('.row').find('.col-md').nth(0).innerText)
        .contains('This is text in the first column.')
});

test.page(getUrlFor(PROTOTYPE_NAME))('renders column 2 content', async t => {
    await t
        .expect(Selector('.row').find('.col-md').nth(1).innerText)
        .contains('This is text in the second column.')
});
