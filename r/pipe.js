// pipe(f1, f2, f3)
// [f1, f2, f3].reduce((f, g) => args => g(f(args)))
// 1:
// f = f1, g = f2 >>> args => f2(f1(args)
// 2:
// f = args => f2(f1(args), g = f3 >>> args => f3(args => f2(f1(args))(args)
const pipe = (...fns) => 
    fns.reduce((f, g) => (...args) => g(f(args)))
    
module.exports = pipe