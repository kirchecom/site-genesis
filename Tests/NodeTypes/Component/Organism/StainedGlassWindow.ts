import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Organism.StainedGlassWindow';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('renders as columns', async t => {
    await t
        .expect(Selector('.kirchecom-stainedglasswindow').hasClass('card-columns'))
        .ok()
});

test.page(getUrlFor(PROTOTYPE_NAME))('has stained glass elements inside', async t => {
    await t
        .expect(Selector('.kirchecom-stainedglasswindow').find('.kirchecom-stainedglass').count)
        .gt(1)
});
