// GET — получение ресурса
// POST — создание ресурса
// PUT — обновление ресурса
// DELETE — удаление ресурса

// Информационные 100 - 199
// Успешные 200 - 299
// Перенаправления 300 - 399
// Клиентские ошибки 400 - 499
// Серверные ошибки 500 - 599

// Promise абалы:
// pending - ожидание
//resolve - успешно
//rejected - выполнено не успешно
// const https = 200
// const promise = new Promise ((resolve, reject)=>{
//     console.log("pending...")
//     if (https >= 200 && https < 300){
//         resolve ({name: "Bill", id: 1})
//     }else {
//         reject({name:"Bill", id:2})
//     }
// })
// then - resolve
// catch - reject

// promise
    // .then((res)=> console.log(res))
    // .catch((data)=> console.log(data))
    // .finally(()=> console.log("finish!"))



// const row = document.querySelector(".row")
// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log(data)
//         data.map((el)=>{
//             row.innerHTML += `<div class="col-4 ">
//
// <h4>${el.address.city}</h4>
// </div>`
//         })
//     })
const body = document.querySelector("body")
body.style.background = "linear-gradient(gray,#222)"
const row = document.querySelector(".row")
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data)
        data.map((el)=>{

            row.innerHTML += `<div class="col-4" >

<ul class="flex-direction-column border border-primary h-100  rounded-5 my-5 " >
    
<img src="./img/da492172-009c-4131-9ff6-4ca3c1d0c6c6.png" alt="img" width="300" class="my-5">
<h2 class="text-warning text-center">Name:${el.name}</h2>
<h3 class="text-primary text-center">${el.username}</h3>
<h3 class="text-center">${el.address.city}</h3>

<ul>
    <li>Email:
<ul>
   <li>
       <h6>${el.email}</h6>
    </li>
</ul>
     </li>
</ul>
</ul>


<div>`
        })
    })




// console.log("Request data...")

// //
// // setTimeout(()=>{
// //     console.log("Preparing data...")
// //
// //     const backendData = {
// //         server: "aws",
// //         port: 2000,
// //         status: "working"
// //     }
// //
// //     setTimeout(()=>{
// //         backendData.modified = true
// //         console.log("Data received", backendData)
// //     },2000)
// //
// // },2000)
//
// const p = new Promise( (resolve,reject)=>{
//       setTimeout(()=>{
//           console.log("Preparing data...")
//           const backendData = {
//           server: "aws",
//           port: 2000,
//           status: "working"
//     }
//     resolve(backendData)
//       },2000)
// })
//
// p.then(()=>{
//
//     console.log("Promise resolved")
// })