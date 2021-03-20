const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const appendDriver = [...drivers, name];
  return appendDriver;
}

function prependDriver(name) {
  const prependDriver = [name, ...drivers];
  return prependDriver;
}

function removeLastDriver() {
  
  let z = drivers.length - 1;
  
  return drivers.slice(0,z);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
