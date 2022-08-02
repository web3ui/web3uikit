# Chromatic CLI

Publishes your Storybook to Chromatic and kicks off tests if they're enabled.

<img width="100%" src="https://user-images.githubusercontent.com/321738/82901859-d820ec80-9f5e-11ea-81e7-78d494c103ad.gif" alt="">

<a href="https://www.npmjs.com/package/chromatic">
  <img src="https://badgen.net/npm/v/chromatic" alt="Published on npm">
</a>
<a href="https://www.chromatic.com/builds?appId=5d67dc0374b2e300209c41e7">
  <img src="https://badgen.net/badge/tested%20with/chromatic/fc521f" alt="Tested with Chromatic">
</a>

## Documentation

👉 Read the [Chromatic CLI docs](https://www.chromatic.com/docs/cli)

📝 View the [Changelog](https://github.com/chromaui/chromatic-cli/blob/main/CHANGELOG.md#readme)

## Using a `next` version

From time to time we pre-publish a `next` version of the package to test new features. To use the
next branch you can either:

### Using `npx`

Change your script to use the `next` dist-tag:

```bash
npx chromatic@next --project-token ...
```

### Using a dependency in `package.json`

Update to the latest `next` version with:

```bash
yarn add --dev chromatic@next

# or
npm i --save-dev chromatic@next
```

### Using the github action

Use our `chromatic-next` action:

```yaml
- uses: chromaui/action-next@v1
```

## Contributing

Contributions of any kind are welcome! We're available to chat via the Intercom widget on the documentation site.

### Compatibility & versioning

Compatibility is guaranteed between this package and Chromatic like so:

- Production Chromatic ensures it’s compatible with what’s on npm
- What's on the main branch is equal to what's published on npm
- This package ensures it’s compatible with production Chromatic

To facilitate upgrading in the future, removing and adding features, this is the process:

- Any new features will have to be on Chromatic production before they could be used in this package
- We can add feature flags to be able to test new functionality
- Chromatic production can not remove any features this package depends on until after the usage has been removed from this package in addition to a grace period to allow users to upgrade

### Publishing a new version to npm

Before publishing, make sure you've done the following:

- Updated CHANGELOG.md
- Committed and pushed everything (clean working directory)
- Decide on the proper semver bump (major/minor/patch)
- Decide on the proper tag (canary/next/latest)

We have three types of releases:

- `canary` releases are intended for testing purposes and should not be used in production, as they may only work against a staging or dev environment.
- `next` releases should be valid, working releases that can potentially be used by early adopters of new features, for example to handle a support request.
- `latest` releases are the general audience production releases, used by most people.

> For GitHub Actions, we publish `chromaui/action-canary` and `chromaui/action-next`, which contain the latest `canary` or `next` release, respectively. A `latest` release will also automatically update `chromaui/action-next` (besides `chromaui/action`), in order to keep users who happen to depend on `chromaui/action-next` up to date with the `latest` release.

A script is provided to create new releases:

```sh
yarn release <major|minor|patch> <canary|next|latest> [--dry-run]
```

This script ensures the version is bumped properly, the tag is set correctly and the corresponding GitHub Action is updated.

#### Examples:

```sh
yarn release patch canary
```

Releases e.g. `6.6.1-canary.0`.

```sh
yarn release major latest
```

Releases e.g. `7.0.0`.
