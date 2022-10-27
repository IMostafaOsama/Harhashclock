let mix = "A13BS2ZX";
let newmix = mix
  .split("")
  .filter(function (multi) {
    return !isNaN(parseInt(multi));
  })
  .map(function (multi) {
    return multi * multi;
  })
  .join("");
console.log(newmix);
