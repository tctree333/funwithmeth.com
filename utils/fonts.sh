#!/bin/bash

rm -rf fonts/used/*
mkdir fonts/used

## Balsamiq Sans
echo "Balsamiq Sans Titles"

pyftsubset fonts/Balsamiq_Sans/BalsamiqSans-Regular.ttf \
    --text="FMWehintu " \
    --layout-features="kern,liga" \
    --flavor=woff2 --obfuscate-names \
    --output-file=fonts/used/BalsamiqSans-Regular.woff2
    # --verbose --timing

pyftsubset fonts/Balsamiq_Sans/BalsamiqSans-Regular.ttf \
    --text="FMWehintu " \
    --layout-features="kern,liga" \
    --flavor=woff --with-zopfli --obfuscate-names \
    --output-file=fonts/used/BalsamiqSans-Regular.woff
    # --verbose --timing

## Open Sans Regular
echo "Open Sans Regular"

pyftsubset fonts/Open_Sans/OpenSans-Regular.ttf \
    --unicodes-file=utils/unicode-glyphs.txt \
    --layout-features="kern,liga" \
    --flavor=woff2 --obfuscate-names \
    --output-file=fonts/used/OpenSans-Regular.woff2
    # --verbose --timing

pyftsubset fonts/Open_Sans/OpenSans-Regular.ttf \
    --unicodes-file=utils/unicode-glyphs.txt \
    --layout-features="kern,liga" \
    --flavor=woff --with-zopfli --obfuscate-names \
    --output-file=fonts/used/OpenSans-Regular.woff
    # --verbose --timing


## Open Sans Italics
echo "Open Sans Italics"

pyftsubset fonts/Open_Sans/OpenSans-Italic.ttf \
    --unicodes-file=utils/unicode-glyphs.txt \
    --layout-features="kern,liga" \
    --flavor=woff2 --obfuscate-names \
    --output-file=fonts/used/OpenSans-Italic.woff2
    # --verbose --timing

pyftsubset fonts/Open_Sans/OpenSans-Italic.ttf \
    --unicodes-file=utils/unicode-glyphs.txt \
    --layout-features="kern,liga" \
    --flavor=woff --with-zopfli --obfuscate-names \
    --output-file=fonts/used/OpenSans-Italic.woff
    # --verbose --timing

