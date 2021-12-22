// The JavaScript is pretty straightforward.
// We need to update the custom properties we've set on the wrapper.
// (For an actual use case, they'd be set higher up in the DOM so that
// they're also inherited by the elements whose styles that depend on them.)
addEventListener('input', e => {
  let range = e.target
  let wrapper = range.parentNode
  wrapper.style.setProperty(`--${range.id}`, +range.value)
}, false)
