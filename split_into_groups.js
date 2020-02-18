const split_into_groups = (arr, n) => {
  arr.sort((a,b) => { return a < b })

  const res     = []
  const res_sum = []
  for (let i = 0; i < n; i++) { res.push([]); res_sum.push(0); }

  for (const el of arr) {
    for (let i = 0; i < n; i++) {
      if (i+1 == res.length || res_sum[i] < res_sum[i+1]) {
        res[i].push(el)
        res_sum[i] += el
        break
      }
    }
  }
  return res
}

const x = [9,11,16,4,3,16,3,10]
const n = 4

console.log(split_into_groups(x,n))
