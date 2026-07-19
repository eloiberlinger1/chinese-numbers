# Train Chinese Numbers

Small web app to practice Chinese numbers.

## What it does

1. Shows a random number between 0 and 999 in Chinese characters.
2. On the next click, reveals the corresponding Arabic digits and pinyin pronunciation.
3. On the following click, generates a new random number.

This creates a simple flashcard loop: guess first, then reveal digits + pronunciation.

## Files

- `app.ts`: conversion logic from number to Chinese characters.
- `index.html`: UI and click flow.

## Build

Compile TypeScript to JavaScript:

```bash
tsc
```

The compiled file is generated in `dist/app.js`.

## Run

Open `index.html` in your browser.

## Notes

- Supported range is 0 to 999.
- Conversion uses common simplified Chinese characters.
