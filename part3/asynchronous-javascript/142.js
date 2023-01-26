const URL = "https://jsonplaceholder.typicode.com/posts";

// function sendRequest(method, url) {
//     return new Promise(function(resolve, reject) {
//         const xhr  = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function() {
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.response);
//             }
//             else{
//                 reject(new Error("Something Went wrong"));
//             }
//         }

//         xhr.onerror = function() {
//             reject(new Error("Something went wrong"));
//         }

//         xhr.send();
//     })
// }

// sendRequest("GET", URL)
//     .then(response => {
//         const data = JSON.parse(response);
//         // console.log(data)
//         return data;
//     })
//     .then(data=>{
//         const id = data[3].id;
//         return id;
//     })
//     .then(id=>{
//         const url = `${URL}/${id}ssss`;
//         return sendRequest("GET", url);
//     })
//     .then(newResponse => {
//         const newData = JSON.parse(newResponse);
//         console.log(newData);
//     })
//     .catch(error =>{
//         console.log(error);
//     })

function sendRequest(method,url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            } else {
                reject(new Error("something went wrong"))
            }
        }
        xhr.onerror = () => {
            reject(new Error("something went wrong"))
        };
        xhr.send()
    })
}

sendRequest("GET", URL)
    .then((response) => {
        const resData = JSON.parse(response);
        // console.log(resData)
        return resData;
    })
    .then((data) => {
        const id = data[2].id
        console.log(id)
        return id;

    })
    .then((id) => {
        const url = `${URL}/${id}`;
        console.log(url)
        return sendRequest("GET",url)
    })
    .then((newResponse) => {
        const newResData = JSON.parse(newResponse)
        console.log(newResData)
        // return newResData;
    })
    .catch(error => console.log(error))