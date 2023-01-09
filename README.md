**WARNING — This branch is kept for historical reasons only; the website is no longer generated from these sources!**

**Currently, the website at https://dosbox-staging.github.io/ is published from the `master` branch of this repo. The content is generated from the MkDocs sources in https://github.com/dosbox-staging/dosbox-staging by the [Deploy website](https://github.com/dosbox-staging/dosbox-staging/actions/workflows/deploy-website.yml) GitHub Action, then the output is pushed to the `master` branch of this repo.**

---


This is the source code for the DOSBox Staging website located at [dosbox-staging.github.io](https://dosbox-staging.github.io/).

This repo uses Git submodules; the quickest way to initialize them is:

    $ git clone --recursive git@github.com:dosbox-staging/dosbox-staging.github.io.git

This site uses the [Zola](https://www.getzola.org/) static site generator.
To preview your changes before deploying them publicly, install `zola` and run:

    $ zola serve

*It's recommended to test with the newest stable Zola release.*

Note: the default working branch for GitHub Pages repositories is `pages`,
where as the `master` branch is used as the live deployment target.
