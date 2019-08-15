# mozillaorg-sitemap

## Usage

```sh
npx pdehaan/mozillaorg-sitemap [locale] [--check]
```

### Parameters

- `locale`: Browser locale to check. Ie: "en-US", "de", "fr".
- `--check`: Check for broken links.

### Example

```sh
$ npx pdehaan/mozillaorg-sitemap en-CA --check

{
  "locale": "en-CA",
  "origin": "https://www.mozilla.org",
  "sitemap": [
    "https://www.mozilla.org/en-CA/",
    "https://www.mozilla.org/en-CA/about/",
    "https://www.mozilla.org/en-CA/about/history/",
    "https://www.mozilla.org/en-CA/about/manifesto/",
    "https://www.mozilla.org/en-CA/about/manifesto/details/",
    "https://www.mozilla.org/en-CA/contribute/",
    "https://www.mozilla.org/en-CA/contribute/events/",
    "https://www.mozilla.org/en-CA/contribute/stories/",
    "https://www.mozilla.org/en-CA/contribute/stories/faye/",
    "https://www.mozilla.org/en-CA/contribute/stories/michael/",
    "https://www.mozilla.org/en-CA/contribute/stories/ruben/",
    "https://www.mozilla.org/en-CA/contribute/stories/shreyas/",
    "https://www.mozilla.org/en-CA/firefox/",
    "https://www.mozilla.org/en-CA/firefox/accounts/",
    "https://www.mozilla.org/en-CA/firefox/best-browser/",
    "https://www.mozilla.org/en-CA/firefox/campaign/",
    "https://www.mozilla.org/en-CA/firefox/channel/android/",
    "https://www.mozilla.org/en-CA/firefox/channel/desktop/",
    "https://www.mozilla.org/en-CA/firefox/channel/ios/",
    "https://www.mozilla.org/en-CA/firefox/developer/",
    "https://www.mozilla.org/en-CA/firefox/facebookcontainer/",
    "https://www.mozilla.org/en-CA/firefox/features/",
    "https://www.mozilla.org/en-CA/firefox/features/adblocker/",
    "https://www.mozilla.org/en-CA/firefox/features/bookmarks/",
    "https://www.mozilla.org/en-CA/firefox/features/fast/",
    "https://www.mozilla.org/en-CA/firefox/features/independent/",
    "https://www.mozilla.org/en-CA/firefox/features/memory/",
    "https://www.mozilla.org/en-CA/firefox/features/password-manager/",
    "https://www.mozilla.org/en-CA/firefox/features/private-browsing/",
    "https://www.mozilla.org/en-CA/firefox/linux/",
    "https://www.mozilla.org/en-CA/firefox/mac/",
    "https://www.mozilla.org/en-CA/firefox/mobile/",
    "https://www.mozilla.org/en-CA/firefox/new/",
    "https://www.mozilla.org/en-CA/firefox/switch/",
    "https://www.mozilla.org/en-CA/firefox/windows/",
    "https://www.mozilla.org/en-CA/internet-health/",
    "https://www.mozilla.org/en-CA/internet-health/decentralization/",
    "https://www.mozilla.org/en-CA/internet-health/digital-inclusion/",
    "https://www.mozilla.org/en-CA/internet-health/open-innovation/",
    "https://www.mozilla.org/en-CA/internet-health/privacy-security/",
    "https://www.mozilla.org/en-CA/internet-health/web-literacy/",
    "https://www.mozilla.org/en-CA/mission/",
    "https://www.mozilla.org/en-CA/plugincheck/",
    "https://www.mozilla.org/en-CA/privacy/faq/",
    "https://www.mozilla.org/en-CA/privacy/principles/",
    "https://www.mozilla.org/en-CA/technology/",
    "https://www.mozilla.org/en-CA/technology/browser-history/",
    "https://www.mozilla.org/en-CA/technology/what-is-a-browser/"
  ]
}

No broken links found
```
