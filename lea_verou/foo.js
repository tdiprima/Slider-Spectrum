(function () {
  'use strict'

  // Don't attempt to polyfill when using SSR
  if (typeof self === 'undefined' || !self.HTMLInputElement) {
    return
  }

  let supportsMultiple = self.HTMLInputElement && 'valueLow' in HTMLInputElement.prototype

  let descriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')

  /**
   * multirange
   */
  let multirange = function (input) {
    //console.log('multirange function')
    if (supportsMultiple || input.classList.contains('multirange')) {
      return
    }

    let value = input.getAttribute('value')
    let values = value === null ? [] : value.split(',')
    let min = +(input.min || 0)
    let max = +(input.max || 100)
    let ghost = input.cloneNode()
    let dragMiddle = input.getAttribute('data-drag-middle') !== null
    let middle = input.cloneNode()

    input.classList.add('multirange')
    input.classList.add('original')
    ghost.classList.add('multirange')
    ghost.classList.add('ghost')

    input.value = values[0] || min + (max - min) / 2
    ghost.value = values[1] || min + (max - min) / 2

    input.parentNode.insertBefore(ghost, input.nextSibling)

    /**
     * Hack for Safari
     */
    Object.defineProperty(input, 'originalValue', descriptor.get ? descriptor : {
      get: function () {
        //console.log('get', this.value)
        return this.value
      },
      set: function (v) {
        //console.log('set', v)
        this.value = v
      }
    })

    /**
     * valueLow, valueHigh
     * get()
     * set()
     */
    Object.defineProperties(input, {
      valueLow: {
        get: function () {
          //console.log('valueLow.get', Math.min(this.originalValue, ghost.value))
          return Math.min(this.originalValue, ghost.value)
        },
        set: function (v) {
          //console.log('valueLow.set', v)
          this.originalValue = v
          update()
        },
        enumerable: true
      },
      valueHigh: {
        get: function () {
          //console.log('valueHigh.get', Math.max(this.originalValue, ghost.value))
          return Math.max(this.originalValue, ghost.value)
        },
        set: function (v) {
          //console.log('valueHigh.set', v)
          ghost.value = v
          update()
        },
        enumerable: true
      }
    })

    /**
     * Hack for Safari
     * It will still get triggered in Chrome, though.
     */
    if (descriptor.get) {
      //console.log('descriptor', descriptor)
      Object.defineProperty(input, 'value', {
        get: function () {
          //console.log('get', this.valueLow + ',' + this.valueHigh)
          return this.valueLow + ',' + this.valueHigh
        },
        set: function (v) {
          //console.log('set', v)
          let values = v.split(',')
          this.valueLow = values[0]
          this.valueHigh = values[1]
          update()
        },
        enumerable: true
      })
    }

    if (typeof input.oninput === 'function') {
      ghost.oninput = input.oninput.bind(input)
    }

    /**
     * update: set style
     * mode: an event object
     */
    function update(mode) {
      //console.log('update (event)', mode)
      ghost.style.setProperty('--low', 100 * ((input.valueLow - min) / (max - min)) + 1 + '%')
      ghost.style.setProperty('--high', 100 * ((input.valueHigh - min) / (max - min)) - 1 + '%')
      //console.log('ghost', ghost)

      if (dragMiddle && mode !== 1) {
        //console.log('here', dragMiddle, mode)
        let w = input.valueHigh - input.valueLow
        if (w > 1) w -= 0.5
        middle.style.setProperty('--size', (100 * w / (max - min)) + '%')
        middle.value = min + (input.valueHigh + input.valueLow - 2 * min - w) * (max - min) / (2 * (max - min - w))
      }
      // Switch colors in IE
      if (input.value > ghost.value) {
        //console.log('input > ghost')
        input.classList.add('switched')
        ghost.classList.add('switched')
      } else {
        //console.log('input.classList', input.classList)
        //console.log('ghost.classList', ghost.classList)
        input.classList.remove('switched')
        ghost.classList.remove('switched')
      }
    }

    /**
     * Event Listeners
     * mousedown - get high & low values
     * then: update()
     */
    ghost.addEventListener('mousedown', function passClick(evt) {
      //console.log('mousedown')
      // Find the horizontal position that was clicked
      let clickValue = min + (max - min) * evt.offsetX / this.offsetWidth
      let middleValue = (input.valueHigh + input.valueLow) / 2
      if ((input.valueLow === ghost.value) === (clickValue > middleValue)) {
        // Click is closer to input element and we swap thumbs
        input.value = ghost.value
      }
    })
    input.addEventListener('input', update)
    ghost.addEventListener('input', update)

    if (dragMiddle) {
      //console.log('dragMiddle')
      middle.classList.add('multirange')
      middle.classList.add('middle')
      input.parentNode.insertBefore(middle, input.nextSibling)
      middle.addEventListener('input', function () {
        let w = input.valueHigh - input.valueLow
        let m = min + w / 2 + (middle.value - min) * (max - min - w) / (max - min)
        input.valueLow = m - w / 2
        input.valueHigh = input.valueLow + w
        update(1)
      })
    }

    update()
  }

  /**
   * init
   */
  multirange.init = function () {
    //console.log('init');
    [].slice.call(document.querySelectorAll('input[type=range][multiple]:not(.multirange)')).forEach(multirange)
  }

  if (typeof module === 'undefined') {
    self.multirange = multirange
    if (document.readyState === 'loading') {
      //console.log('do multirange.init')
      document.addEventListener('DOMContentLoaded', multirange.init)
    } else {
      //console.log('there')
      multirange.init()
    }
  } else {
    module.exports = multirange
  }
})()
