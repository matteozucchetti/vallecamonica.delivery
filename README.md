# VallecamonicaDelivery
> If you want to make the same proj for your city, the only thing i ask is to fork the [main repo](https://github.com/tomma5o/ferraraDomicilio) for make it yours.
> Thanks!

## How to

1. Change the specific label related to me and my city are inside the `.env` file, if you change that the js will be clean ;)
2. Change the city in the `template.html` file
3. Change the **name** and **short_name** inside `manifest.json`
4. Change the **name** inside `package.json`

## Data source

All the data is fetched from this gist:
https://gist.githubusercontent.com/metiuzucc/23a572fd9568c60f594691cb7e1eb7a1/raw/vallecamonicaDelivery.json

When you add your gist remember to delete the last hash because points directly at a specific commit, for example:

```diff
- https://gist.githubusercontent.com/metiuzucc/23a572fd9568c60f594691cb7e1eb7a1/raw/86aabaed23c6a7a07684f943691c3f62042c3043/vallecamonicaDelivery.json
+ https://gist.githubusercontent.com/metiuzucc/23a572fd9568c60f594691cb7e1eb7a1/raw/vallecamonicaDelivery.json
```

## Netlify deploy & configuration

> The site is developed with some specific https://netlify.com apis.

<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/3cb09be5-e116-4f42-a3b3-b95c2402633f/deploy-status)](https://app.netlify.com/sites/cernuscodomicilio/deploys) -->

### Deploy configuration steps

1. Connect your GitHub account to Netlify
3. Select the project
2. In Settings → Build & Deploy → Set **Build command** to : **_npm run build_**
3. In Settings → Build & Deploy → Set **Publish directory** to : **_build_**

### Google analytics setup

In **Settings** → Build & Deploy → Post processing → Snippet injection: you can add here your GAnalytics snippet


## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
    <tr>
        <td align="center"><a href="http://tomma5o.com"><img src="https://avatars0.githubusercontent.com/u/8134038?v=4" width="100px;" alt="" /><br /><sub><b>Tommaso Poletti</b></sub></a></td>
        <td align="center"><a href="https://www.andreaverlicchi.eu"><img src="https://avatars3.githubusercontent.com/u/1127721?v=4" width="100px;" alt="" /><br /><sub><b>Andrea Verlicchi</b></sub></a></td>
        <td align="center"><a href="http://lorenzocamporesi.it"><img src="https://avatars3.githubusercontent.com/u/15997606?v=4" width="100px;" alt="" /><br /><sub><b>Lorenzo Camporesi</b></sub></a></td>
        <td align="center"><a href="https://www.linkedin.com/in/mandelli-davide/"><img src="https://avatars0.githubusercontent.com/u/25078541?v=4" width="100px;" alt="" /><br /><sub><b>Davide Mandelli</b></sub></a></td>
        <td align="center"><a href="https://www.christianvarisco.com"><img src="https://avatars1.githubusercontent.com/u/7335613?v=4" width="100px;" alt="" /><br /><sub><b>Christian Varisco</b></sub></a></td>
    </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->