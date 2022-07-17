const ftoc = function(f) {
unroundedCee = (f-32) * (5/9)
c = Math.round(unroundedCee * 10)/10
return c
};

const ctof = function(c) {
unroundedEff = c*(9/5)+32
f = Math.round(unroundedEff * 10)/10
return f

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

