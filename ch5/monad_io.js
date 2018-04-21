const R = require("ramda")
const fs = require("fs")
const path = require("path")
const { tap } = require("../r")
const { IO } = require("../monad")

const readFile = path => () => fs.readFileSync(path, "utf8")
const writeFile = path => str => fs.writeFileSync(path, str, "utf8")

const srcPath = path.resolve(__dirname, "data", "src.txt")
const dstPath = path.resolve(__dirname, "data", "dst.txt")
const changeToUpperCase =
  IO.from(readFile(srcPath))
    .map(R.toUpper)
    .map(writeFile(dstPath))
    
changeToUpperCase.run()


