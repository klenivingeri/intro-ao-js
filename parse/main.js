function parse(val1,val2){
  return (val1 == val2) ? console.log(true) : console.log(false)
}

parse(null, undefined)
parse(undefined, null)
parse(1, parseInt('1'))
parse(1, parseInt(false))
parse()
parse()

