// The JavaScript is pretty straightforward.
// We need to update the custom properties we've set on the wrapper.
// (For an actual use case, they'd be set higher up in the DOM so that
// they're also inherited by the elements whose styles that depend on them.)
addEventListener('input', e => {
  const _t = e.target
  _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value)
}, false)
