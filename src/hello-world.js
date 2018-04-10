var importObject = {
  env: {
    change_html_value
  }
}

function readFromMemory(offset, length) {
  return Array
    .from(new Uint8Array(memory.buffer, offset, length))
    .map(i => String.fromCharCode(i))
    .join('')
}

function change_html_value(offset, length) {
  const str = readFromMemory(offset, length)
  const element = document.getElementById('app')
  element.innerHTML = str
}

WebAssembly.instantiateStreaming(fetch('hello-world.wasm'), importObject)
  .then(results => {
    window.memory = results.instance.exports.memory
    results.instance.exports.hello_world()
  })
