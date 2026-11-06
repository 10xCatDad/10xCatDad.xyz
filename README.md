# 10xCatDad.xyz

Personal landing page for [10xCatDad](https://x.com/10xCatDad), with links to [HumansOnly](https://captcha.10xcatdad.xyz), [Art](https://art.10xcatdad.xyz), and [GitHub](https://github.com/10xCatDad).

The site is static HTML, CSS, and JavaScript. Serve `dist/` with any static host. No build, dependencies, account, analytics, or API credentials are required.

```sh
python3 -m http.server 8080 --directory dist --bind 127.0.0.1
```

Dark mode is the default, matching the black and neon green theme of HumansOnly. Light and System choices are available and saved locally in the visitor's browser. Space Grotesk is self-hosted; its license is in `dist/assets/OFL.txt`.

The shared visual style uses Space Grotesk throughout, `//` separators in headings and short labels, uppercase primary actions, and a filled accent for the selected theme.

## Posts

The three post cards in `dist/index.html` are selected public posts from November 6, 2026. They are a static snapshot, not an automatically updating timeline. Each links to its original post. The quote post also links to its context, and posts with media link to the complete original on X. There is no X widget, tracking script, or API call when someone visits the site.

To update the selection, edit the three `article.post-card` elements: post text, original URL, accessible link label, and `time` value. Use only public posts from `@10xCatDad` and keep quoted context linked.

## Hosting

The canonical origin is `https://10xcatdad.xyz`. The public repository contains the portable site source. Host-specific configuration, private deployment history, and local verification artifacts are excluded from this repository.
