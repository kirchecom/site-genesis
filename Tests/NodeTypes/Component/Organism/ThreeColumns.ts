import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Organism.ThreeColumns';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('renders three columns', async t => {
    await t
        .expect(Selector('.row').find('.col-lg').count)
        .eql(3)
});

test.page(getUrlFor(PROTOTYPE_NAME))('renders column 1 content', async t => {
    await t
        .expect(Selector('.row').find('.col-lg').nth(0).innerText)
        .contains('This is text in the first column.')
});

test.page(getUrlFor(PROTOTYPE_NAME))('renders column 2 content', async t => {
    await t
        .expect(Selector('.row').find('.col-lg').nth(1).innerText)
        .contains('This is text in the second column.')
});

test.page(getUrlFor(PROTOTYPE_NAME))('renders column 3 content', async t => {
    await t
        .expect(Selector('.row').find('.col-lg').nth(2).innerText)
        .contains('This is text in the third column.')
});
