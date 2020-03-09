# kirche.com site package "Genesis"

[![kirche.com Logo](https://github.com/kirchecom/site-genesis/blob/master/Resources/Public/Icons/favicon-32x32.png)](https://kirche.com)

This is a site package for use with the Open Source Content Application Platform [Neos](https://www.neos.io).
If you don't have a Neos instance running yet, you most probably want to install the
[kirche.com Neos distribution](https://github.com/kirchecom/neos-genesis) which includes this site package.

## Installation

This assumes you want to install this package into an *existing* Neos installation.
If you want to set up a new instance, please follow the instructions
[here](https://github.com/kirchecom/neos-genesis). You don't need to install this package separately.

Please switch to the directory you installed Neos into. If you want to *delete* (!) existing sites, execute:

```bash
./flow site:prune "*"
rm -rf Data/Temporary/*
```

This will install the site package:

```bash
composer require kirchecom/site-genesis
```

Now *either* import the kirche.com demo site:

```bash
./flow site:import --package-key "KircheCom.SiteGenesis"
```

*Or* start with an empty site:

```bash
./flow site:import --filename ./Packages/Sites/KircheCom.SiteGenesis/Resources/Private/Content/Sites.plain.xml
```

After installation just use your Neos backend to configure the site and set up content.

## Development and Testing

We will gladly accept contributions and pull requests. There are `npm` scripts that help during development:

```bash
npm run build
npm run build:development
npm run watch
npm run watch:development
```

Fusion components in this package include styleguide information for
[Sitegeist.Monocle](https://github.com/sitegeist/Sitegeist.Monocle).
The styleguide can be accessed from your Neos backend.

Additionally TestCafé automatic tests ensure proper rendering. To execute TestCafé just run:

```bash
npm run test
```

If you have the site package's demo content imported you can also run the demo content tests. Just execute:

```bash
npm run test:demo
```

To run both the styleguide tests and demo tests, `npm run test:all` can be used.

## License

This package is licensed under the
[European Union Public License 1.2](https://github.com/kirchecom/site-genesis/blob/master/LICENSE.txt).
