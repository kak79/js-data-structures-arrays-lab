const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const appendDriver = [...drivers, name];
  return appendDriver
}

function prependDriver(name) {
  const prependDriver = [name, ...drivers]
  return prependDriver
}

function removeLastDriver() {
  let removeLastDriver = []
  let z = removeLastDriver[removeLastDriver.length - 1]
  removeLastDriver.slice("z")
  return removeLastDriver
}

function removeFirstDriver() {
  const removeFirstDriver = []
  return removeFirstDriver
}
