export const HOST = 'http://localhost:8081';
export const SITE_PACKAGE_KEY = 'KircheCom.SiteGenesis';

export function getUrlFor(prototypeName: string, propSet: string = '__default') {
    return `${HOST}/monocle/preview/index` +
        `?prototypeName=${encodeURIComponent(prototypeName)}` +
        `&propSet=${encodeURIComponent(propSet)}` +
        `&sitePackageKey=${encodeURIComponent(SITE_PACKAGE_KEY)}`;
}
