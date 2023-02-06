const lessOrGreaterTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10){
            resolve ()
        } else reject()
    })
}
lessOrGreaterTen(9)
.then(()=> {
    console.log('greater than 10')
})
.catch(()=>{
    console.log('smaller than 10')
})