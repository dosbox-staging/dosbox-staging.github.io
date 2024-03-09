# DOSBox Staging GitHub Pages site 

The static website at https://dosbox-staging.github.io/ is served from this GitHub Pages repo.

**DO NOT make direct changes to this branch for documentation changes—modify the MkDocs sources in the main repo instead!**

Please refer to the [documentation guide](https://github.com/dosbox-staging/dosbox-staging/blob/main/DOCUMENTATION.md) before making changes to the website or the documentation.

The only exception is large binary files (e.g., images, audio and video files); we commit these directly to this repo under the [static](/static) directory.
This is necessary to keep the size of the main repo to a minimum.
The [Deploy website workflow](https://github.com/dosbox-staging/dosbox-staging/actions/workflows/deploy-website.yml) leaves the `static` directory alone, it's managed entirely manually.
