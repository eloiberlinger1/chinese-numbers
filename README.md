# Train Chinese Numbers

Small web app to practice Chinese numbers.

## What it does

1. Starts in Digits -> Chinese mode:
2. Shows a random number between 0 and 999 as digits.
3. You type the corresponding Chinese characters and press Enter.
4. The app shows whether your answer is correct and displays digits + Chinese + pinyin.
5. Press Enter again to move to the next random number.
6. Use the switch button to toggle between:
7. Digits -> Chinese (type Chinese characters)
8. Chinese -> Digits (type Arabic digits)

In both modes, the input is focused automatically.

## Files

- `app.ts`: conversion logic from number to Chinese characters.
- `index.html`: UI and interactive quiz flow.

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
