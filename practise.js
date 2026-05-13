console.log("Program Started")


const Promise = new Promise ((resolve,reject) => {

    setTimeout(() => {
        resolve ()
    }
,3000)


  setTimeout(() => {

    reject ()
  },2000)

})

console.log("Promise is running ")


Promise.then(() => {
    console.log("Promise is resolve ")
}).catch (() => {
    console.log("promsie is rejected ")
})
