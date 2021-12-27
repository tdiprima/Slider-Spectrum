function getSliderValues(slides, displayElement) {
  // Get slider values
  // let parent = this.parentNode // 'this' is 'input', and parentNode is 'section'
  // let slides = parent.getElementsByTagName('input')
  let slide1 = parseFloat(slides[0].value)
  let slide2 = parseFloat(slides[1].value)

  // Determine which is larger
  if (slide1 > slide2) {
    let tmp = slide2;
    slide2 = slide1;
    slide1 = tmp
  }

  // let displayElement = parent.getElementsByClassName('rangeValues')[0]
  if (displayElement) {
    // displayElement is the output display; the 'span'
    displayElement.innerHTML = slide1 + ' - ' + slide2
  }

  return [slide1, slide2]
}

