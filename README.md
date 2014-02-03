## Zeitgeist

> The zeitgeist is ever-changing. If you try second guess what people want, you'll miss it. - Nick Frost

A curated collection of gifs to win friends and influence people.

## How It Works

Add a new file to `/gifs`. Add a new image entry to `/_data/images.yaml` like so:

```yaml
cat-pix:
  file: crazy_gatto.gif
  name: CRAZY CAT!!11!!!
```

Add the image to map it under a category in `/_data/mappings.yaml`:

```yaml
Animals:
  - cat-pix
```

That's it and that's all.
