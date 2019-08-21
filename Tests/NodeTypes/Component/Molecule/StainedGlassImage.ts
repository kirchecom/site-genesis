import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Molecule.StainedGlassImage';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('has image and all attributes', async t => {
    await t
        .expect(Selector('img').getAttribute('src'))
        .contains('dummyimage')
        .expect(Selector('img').getAttribute('srcset'))
        .contains('dummyimage')
        .expect(Selector('img').getAttribute('sizes'))
        .eql('(min-width: 1200px) 355px, (min-width: 992px) 295px, (min-width: 768px) 333px, (min-width: 576px) 508px, 100vw')
        .expect(Selector('img').hasClass('card-img-top'))
        .ok()
});
