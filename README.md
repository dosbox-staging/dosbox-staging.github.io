Source code for [dosbox-staging.github.io](https://dosbox-staging.github.io/).

This repo uses Git submodules, quickest way to initialize them is:

    $ git clone --recursive git@github.com:dosbox-staging/dosbox-staging.github.io.git

This site uses [Zola](https://www.getzola.org/) static site generator.
To see update before you push it to deployment, install `zola` and run:

    $ zola serve

*It's recommended to test with the newest stable Zola release.*

Due to GitHub Pages specifics, the default branch for this repo is named `pages`
(branch `master` is used as deployment target).
