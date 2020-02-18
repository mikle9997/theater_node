
const sum = (arr) => arr.reduce((acc, x) => Array.isArray(x) ? acc + sum(x) : acc + x, 0)

const check_diff= (arr, n) => {
  const ideal_weight = sum(arr) / n  
  return arr.reduce((acc, x) => acc + Math.abs(ideal_weight - sum(x)),0)
}

const split_into_groups = (arr, n) => {
  arr.sort((a,b) => { return a < b })

  const res = []
  for (let i = 0; i < n; i++) { res.push([]) }

  for (const el of arr) {
    for (let i = 0; i < res.length; i++) {
      if (i+1 == res.length || sum(res[i]) <= sum(res[i+1])) {
        res[i].push(el)
        break
      }
    }
  }
  return res
}

const x = [9,11,16,4,3,16,3,10]
const n = 2

console.log(split_into_groups(x,n))
console.log(check_diff(split_into_groups(x),n))
