Font Style ->
waldenburgNormal,
ui-sans-serif, 
system-ui, 
sans-serif;

Main Navbar ->
List
Buttons
"ibmPlexMono",
"ibmPlexMono Fallback", 
ui-monospace, 
monospace;
letter-spacing: 0;
text-box: trim-both cap alphabetic;
text-transform: uppercase;
font-size: .8125rem;
font-style: normal;
font-weight: 400;
line-height: 1.3;

Body ->
grid
--gutter: 4px;
--max-width: 1920px;
--min-page-margin: 24px;
--grid-width: min(1920px, calc(100vw - (48px)));
--column-width: calc((var(--grid-width) - (4px * 11)) / 12);
--columns-half: calc(var(--column-width) * .5);
--columns-1: calc(var(--column-width));
--columns-2: calc((var(--columns-1) * 2) + (var(--gutter) * 1));
--columns-3: calc((var(--columns-1) * 3) + (var(--gutter) * 2));
--columns-4: calc((var(--columns-1) * 4) + (var(--gutter) * 3));
--columns-5: calc((var(--columns-1) * 5) + (var(--gutter) * 4));
--columns-6: calc((var(--columns-1) * 6) + (var(--gutter) * 5));
--columns-7: calc((var(--columns-1) * 7) + (var(--gutter) * 6));
--columns-8: calc((var(--columns-1) * 8) + (var(--gutter) * 7));
--columns-9: calc((var(--columns-1) * 9) + (var(--gutter) * 8));
--columns-10: calc((var(--columns-1) * 10) + (var(--gutter) * 9));
--columns-11: calc((var(--columns-1) * 11) + (var(--gutter) * 10));
--columns-12: calc((var(--columns-1) * 12) + (var(--gutter) * 11));

Root ->
    --sanity-id-heading-font-features: "ss07" on, "cv01" on, "cv11" on, "cv12" on, "cv13" on;
    --color-black: #0b0b0b;
    --color-white: #fff;
    --color-brand: #ff560a;
    --color-gray-100: #ededed;
    --color-gray-200: #d6d6d6;
    --color-gray-300: #b9b9b9;
    --color-gray-500: #797979;
    --color-gray-700: #4a4a4a;
    --color-gray-800: #353535;
    --color-gray-900: #212121;
    --color-blue-100: #afe3ff;
    --color-blue-300: #55beff;
    --color-blue-500: #0084f8;
    --color-blue-700: #0052ef;
    --color-green-100: #96ff6f;
    --color-green-300: #45ff00;
    --color-green-500: #00fe00;
    --color-green-700: #19d600;
    --color-magenta-100: #fcb9ff;
    --color-magenta-300: #fa84ff;
    --color-magenta-500: #ff23fc;
    --color-magenta-700: #f500ff;
    --color-yellow-100: #fcffd6;
    --color-yellow-300: #ffff9f;
    --color-yellow-500: #fdfe00;
    --color-yellow-700: #fff500;
    --radius-none: 0;
    --radius-full: 99999px;
    --spacing-icon-lg: calc((25 / 16) * 1rem);
    --spacing-icon-md: calc((21 / 16) * 1rem);
    --spacing-icon-sm: calc((19 / 16) * 1rem);
    --spacing-widget-xs: calc((19 / 16) * 1rem);
    --spacing-widget-sm: calc((25 / 16) * 1rem);
    --spacing-widget-md: calc((35 / 16) * 1rem);
    --spacing-widget-lg: calc((45 / 16) * 1rem);
    --spacing-widget-xl: calc((73 / 16) * 1rem);
    --spacing-0: 0rem;
    --spacing-2: .125rem;
    --spacing-4: .25rem;
    --spacing-6: .375rem;
    --spacing-8: .5rem;
    --spacing-12: .75rem;
    --spacing-16: 1rem;
    --spacing-20: 1.125rem;
    --spacing-24: 1.51rem;
    --spacing-32: 2rem;
    --spacing-40: 2.5rem;
    --spacing-48: 3rem;
    --spacing-64: 4rem;

Navbar hover ->
highlight, but subtle
round border
opening options quickly on hovering

Body hover ->
Color change, same highlight but not subtle
