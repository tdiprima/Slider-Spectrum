/* As for your JavaScript, you could abstract away your element creation with
a function like the following. This way, you don't have to repeat element creation
scripts everywhere and you can easily describe dynamic HTML in a nested manner,
like HTML. */
// https://codereview.stackexchange.com/questions/213431/adding-li-items-dynamically-to-a-to-do-list
const e = (name, properties = {}, children = []) => {
  // Create the element
  const element = document.createElement(name)

  // Apply properties
  Object.keys(properties).forEach(property => {
    element.setAttribute(property, properties[property])
  })

  // Append children
  children.forEach(c => {
    if (!c) return
    const node = (typeof c === 'string') ? document.createTextNode(c) : c
    element.appendChild(node)
  })

  return element
}
