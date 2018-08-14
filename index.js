// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (el, i, arr) {
    console.log(el.name);

  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (el, i, arr) {
    if (el.hometown === location) {
      console.log(el.name)
    }

  })


}
