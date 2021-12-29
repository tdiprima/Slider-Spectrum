# Properties

<hr>

# Relative Lengths

**[They](https://www.w3schools.com/cssref/css_units.asp)** specify a length relative to another length property.

Relative length units scale better between different rendering medium.


<br>
# em
`2em` means **2 times the size of the current** font.

**[To recap](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)**, the `em` unit means "**my parent element**'s font-size".

The &lt;li&gt; elements inside the &lt;ul&gt; with a class of `ems` take their sizing from their **parent**.

So each successive level of nesting gets progressively larger, as each has its font size set to `1.3em` — 1.3 times its parent's font size.

### [Example](properties/relative-len.html)


<br>
# rem
To recap, the `rem` unit means "The root element's font-size".

`rem` stands for "**root em**".

The &lt;li&gt; elements inside the &lt;ul&gt; with a class of `rems` take their sizing from the root element `<html>`.

This means that each successive level of nesting does not keep getting larger.

### [Example](properties/relative-len.html)


<br>
# grid-template-rows
The `grid-template-rows` property defines the line names and [track sizing](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks) functions of the [grid rows](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Rows).

### CSS Demo: [grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)


<br>
# grid-column
The `grid-column` specifies a grid item's **size** and **location** within a grid column.

### [CSS Demo: grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)


<br>
# grid-row
The `grid-row` property specifies a grid item's **size** and **location** within the grid row.

### [CSS Demo: grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)


<br>
# -webkit-max-content 1em;
The `max-content` sizing keyword represents the maximum width or height of the content.

For text content this means that the content will not wrap at all even if it causes overflows.

### [Examples](https://developer.mozilla.org/en-US/docs/Web/CSS/max-content#examples)


<br>
# Overflow
The overflow sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

### [CSS Demo: overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)


<br>
# Position
The position property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.

### [CSS Demo: position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)


<br>
# sr-only
The screen reader utility in Bootstrap.

`.sr-only`: This class hides an element in all devices except for the [screen readers](https://en.wikipedia.org/wiki/Screen_reader).

> A **screen reader** is a form of assistive technology (AT) that renders text and image content as speech or braille output. Screen readers are essential to people who are blind, and are useful to people who are visually impaired, illiterate, or have a learning disability.

### [Examples](https://www.geeksforgeeks.org/screen-reader-utilities-in-bootstrap-with-examples/)


<br>
# clip-path

The clip-path property creates a clipping region that sets what part of an element should be shown.

### [CSS Demo: clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)


<br>
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


<br>
# Custom properties (variables)

### [mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
They contain specific values to be reused throughout a document.

**Set** via custom property notation: `--main-color: black;`

**Get** by using the `var()` function: `color: var(--main-color);`


<br>
# Cascade
The cascade is an algorithm that defines how to combine property values.

Hello... ***Cascading*** Style Sheets.

Only **declarations** - property/value pairs - participate in the cascade.

**at-rules** don't participate in the cascade.

Only the **at-rule as a whole** participates in the cascade:

`@font-face` is identified by its `font-family` descriptor.

If several `@font-face` rules with the same descriptor are defined, only the most appropriate `@font-face`, as a whole, is considered.


<br>
# Descriptor

A descriptor defines the **characteristics** of an [**at-rule**](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule).

At-rules may have one or multiple descriptors.

Each descriptor has:

* A **name**
* A **value**, which holds the component values
* An `!important` **flag**, which in its default state is unset

### [Descriptor](https://developer.mozilla.org/en-US/docs/Glossary/Descriptor_(CSS))


# @rule
**[At-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)** are statements that instruct CSS how to behave.

* They begin with an at sign, '@'
* followed by an identifier, and 
* includes everything up to the next semicolon, ';', 
* or the next CSS block, whichever comes first.

```
/* General structure */
@IDENTIFIER (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

