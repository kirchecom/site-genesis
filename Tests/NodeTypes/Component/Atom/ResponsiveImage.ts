import { Selector } from 'testcafe';
import { getUrlFor } from '../../../Configuration';

const PROTOTYPE_NAME = 'KircheCom.SiteGenesis:Component.Atom.ResponsiveImage';
fixture(PROTOTYPE_NAME);

test.page(getUrlFor(PROTOTYPE_NAME))('has all attributes', async t => {
    await t
        .expect(Selector('img').getAttribute('src'))
        .contains('dummyimage')
        .expect(Selector('img').getAttribute('srcset'))
        .contains('dummyimage')
        .expect(Selector('img').getAttribute('sizes'))
        .eql('(min-width: 1200px) 1200px, 100vw')
        .expect(Selector('img').getAttribute('alt'))
        .eql('Alternative text e.g. for screen readers')
        .expect(Selector('img').getAttribute('title'))
        .eql('This title appears when hovering with the mouse')
});
