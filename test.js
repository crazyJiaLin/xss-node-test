function interview(round) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        resolve('success') // 面试成功
      } else {
        reject(new Error('fail at ' + round)) // 面试失败
      }
    }, 500)
  })
}
(async function() {
  try {
    // let round1 = await interview('1st')
    // console.log('round 1st', round1)
    // let round2 = await interview('2nd')
    // console.log('round 2nd', round2)
    // let round3 = await interview('3rd')
    // console.log('round 3rd', round3)
    let [res1, res2, res3] = await Promise.all(interview('a'), interview(b), interview('c'))
    console.log(res1, res2, res3)
  } catch (e) {
    return console.log(e.message)
  }
  console.log('all success')
}())
