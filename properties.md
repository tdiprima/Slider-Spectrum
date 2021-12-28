# Properties

<hr>

**`em`**<br>
Relative to the font-size of the element (2em means 2 times the size of the current font)


# grid-template-rows
The `grid-template-rows` property defines the line names and [track sizing](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks) functions of the [grid rows](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Rows).

### CSS Demo: [grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)

# grid-column
The `grid-column` specifies a grid item's **size** and **location** within a grid column.

### [CSS Demo: grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)

# grid-row
The `grid-row` property specifies a grid item's **size** and **location** within the grid row.

### [CSS Demo: grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)

# -webkit-max-content 1em;
The `max-content` sizing keyword represents the maximum width or height of the content.

For text content this means that the content will not wrap at all even if it causes overflows.

### [Examples](https://developer.mozilla.org/en-US/docs/Web/CSS/max-content#examples)

# Overflow
The overflow sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

### [CSS Demo: overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)

# Position
The position property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.

### [CSS Demo: position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

# sr-only
The screen reader utility in Bootstrap.

`.sr-only`: This class hides an element in all devices except for the [screen readers](https://en.wikipedia.org/wiki/Screen_reader).

> A **screen reader** is a form of assistive technology (AT) that renders text and image content as speech or braille output. Screen readers are essential to people who are blind, and are useful to people who are visually impaired, illiterate, or have a learning disability.

### [Examples](https://www.geeksforgeeks.org/screen-reader-utilities-in-bootstrap-with-examples/)

# clip-path

The clip-path property creates a clipping region that sets what part of an element should be shown.

### [CSS Demo: clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

# Appearance

The `appearance` property is used to display an element using platform-native styling, based on the operating system's theme.

The `-moz-appearance` and `-webkit-appearance` properties are non-standard versions of this property.

Used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing.

<mark>This is the one where I said none of the examples work.</mark> In any browser.
**[CSS Demo: appearance](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)**
Well, except for Safari.
The `menulist-button` looks like it wants to work, but is fxcked up.
And `button` actually works.
Firefox now is fxcked up, after posting the issue.

SO &ndash; I made my own example.  See: **[appearance.html](appearance/appearance.html)**
