# Properties

<br>

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

To recap, the `rem` unit means "The **root element**'s font-size".

`rem` stands for "**root em**".

The &lt;li&gt; elements inside the &lt;ul&gt; with a class of `rems` take their sizing from the root element `<html>`.

This means that each successive level of nesting does not keep getting larger.

### [Example](properties/relative-len.html)


<br>

# grid-template-rows

The `grid-template-rows` property defines the line names and [track sizing](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks) functions of the [grid rows](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Rows).

### [Demo: grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)


<br>

# grid-column

The `grid-column` specifies a grid item's **size** and **location** within a grid column.

### [Demo: grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)


<br>

# grid-row

The `grid-row` property specifies a grid item's **size** and **location** within the grid row.

### [Demo: grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)


<br>

# max-content

The `max-content` sizing keyword represents the maximum width or height of the content.

For text content this means that the content will not wrap at all even if it causes overflows.

Ex: `-webkit-max-content 1em;`

### [Examples](https://developer.mozilla.org/en-US/docs/Web/CSS/max-content#examples)


<br>

# Overflow

The overflow sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

### [Demo: overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)


<br>

# Position

The position property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.

### [Demo: position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)


<br>

# sr-only

The screen reader utility in Bootstrap.

`.sr-only`: This class hides an element in all devices except for the [screen readers](https://en.wikipedia.org/wiki/Screen_reader).

> A **screen reader** is a form of assistive technology (AT) that renders text and image content as speech or braille output. Screen readers are essential to people who are blind, and are useful to people who are visually impaired, illiterate, or have a learning disability.

### [Examples](https://www.geeksforgeeks.org/screen-reader-utilities-in-bootstrap-with-examples/)


<br>

# clip-path

The clip-path property creates a clipping region that sets what part of an element should be shown.

### [Demo: clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

![balloon](img/balloon-small.jpg)


<br>

# Appearance

The `appearance` property is used to display an element using platform-native styling, based on the operating system's theme.

The `-moz-appearance` and `-webkit-appearance` properties are non-standard versions of this property.

Used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing.

<mark>This is the one where I said none of the examples work.</mark> In any browser.
**[Demo: appearance](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)**
Well, except for Safari.
The `menulist-button` looks like it wants to work, but is fxcked up.
And `button` actually works.
Firefox now is fxcked up, after posting the issue.

SO &ndash; I made my own example:
### [appearance.html](appearance/appearance.html)


<br>

# Custom properties (variables)

### [mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
They contain specific values to be reused throughout a document.

**Set** via custom property notation: `--main-color: black;`

**Get** by using the `var()` function: `color: var(--main-color);`

**Declaring** a custom property is done using a **name** that begins with a double hyphen (--), and a **value**.

This is written inside a **ruleset**, like so:

```
element {
  --main-bg-color: brown;
}
```

A common best practice is to **define** custom properties on the **[:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)** pseudo-class, so that it can be applied **globally** across your HTML document:

```
:root {
  --main-bg-color: brown;
}
```

You **use** the value by specifying your name inside the var() function, in place of a regular property value:

```
element {
  background-color: var(--main-bg-color);
}
```

<br>

# [calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc())

Lets you perform calculations when specifying property values.

```
width: calc(10px + 100px);
```

<br>

# [counter()](https://developer.mozilla.org/en-US/docs/Web/CSS/counter())

Returns a string representing the current value of the named counter.

It must first be initialized to a value with the `counter-reset` property (0 by default).

```
output::after {
  counter-reset: c var(--c);
  content: counter(c);
}
```

The value of a counter can be displayed using either the `counter()` or `counters()` function in a `content` property.

### [Using counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)

<br>

# [attr()](https://developer.mozilla.org/en-US/docs/Web/CSS/attr())

Retrieves the value of an attribute of the selected element and uses it in the stylesheet.

This inserts the value of the href attribute in parenthesis after each link:

```
a:after {
  content: " (" attr(href) ")";
}
```

<br>

# Cascade

The cascade is an algorithm that defines how to combine property values.

Hello... ***Cascading*** Style Sheets.

Only **declarations** - property/value pairs - participate in the cascade.

**at-rules** don't participate in the cascade.

Only the **at-rule as a whole** participates in the cascade:

`@font-face` is identified by its `font-family` descriptor.

If several `@font-face` rules with the same descriptor are defined, only the most appropriate `@font-face`, as a whole, is considered.

### [cascading order](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#cascading_order)


<br>

# Descriptor

A descriptor defines the **characteristics** of an [**at-rule**](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule).

At-rules may have one or multiple descriptors.

Each descriptor has:

* A **name**
* A **value**, which holds the component values
* An `!important` **flag**, which in its default state is unset

### [Descriptor](https://developer.mozilla.org/en-US/docs/Glossary/Descriptor_(CSS))


<br>

# @rule

**[At-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)** are statements that instruct CSS how to behave.

* They begin with an at sign, '@'
* followed by an identifier, and 
* includes everything up to the next semicolon, ';', 
* or the next CSS block, whichever comes first.

**Tells browser** to **use UTF-8** character set:

```
@charset "utf-8";
```


<br>

# Character Encoding

<span style="color:green">**UTF-8**</span> stands for "<span style="color:green">**U**</span>nicode <span style="color:green">**T**</span>ransformation <span style="color:green">**F**</span>ormat - <span style="color:green">**8 bits**</span>."

In order to **store information**, computers use a **binary system**, where all data is represented in sequences of 1s and 0s.

The most basic unit of binary is a **bit**, which is just a single 1 or 0.

The next largest unit of binary, a **byte**, consists of **8 bits**.

**Text** is made up of individual characters, each of which is represented in computers by a **string of bits**.

<br>

When we refer to <span style="color:purple">**file sizes**</span>, we're referencing the **number of bytes**. 

* **KB** kilobyte is roughly 1000 bytes
* **GB** gigabyte is roughly one billion bytes (1,000,000,000)

<br>

<span style="color:red">**ASCII**</span> = <span style="color:red">**A**</span>merican <span style="color: red">**S**</span>tandard <span style="color: red">**C**</span>ode for <span style="color: red">**I**</span>nformation <span style="color: red">**I**</span>nterchange

An early standardized encoding system for text.

**Encoding** is the process of **converting characters** in human languages into binary sequences that computers can process.

**ASCII's library** includes every upper-case and lower-case letter in the Latin alphabet (A, B, C...), every digit from 0 to 9, and some common symbols (like /, !, and ?).

It assigns each of these characters a unique **three-digit code** and a unique **byte**.

<br>

<span style="color:blue">**Unicode:**</span> A Way to Store Every Symbol, Ever.

Unicode is the universal standard for encoding **all human languages**. 

It even includes **emojis**.

### [ARTICLE](https://blog.hubspot.com/website/what-is-utf-8)
