const lists = document.getElementsByClassName('list')
const rightBox = document.getElementById('right')
const leftBox = document.getElementById('left')

for(let list of lists){
    list.addEventListener('dragstart', function(e){
        let selected = e.target

        rightBox.addEventListener('dragover', function(e){
            e.preventDefault()
        })
        rightBox.addEventListener('drop', function(e){
            rightBox.appendChild(selected)
            selected = null
        })
        leftBox.addEventListener('dragover', function(e){
            e.preventDefault()
        })
        leftBox.addEventListener('drop', function(e){
            leftBox.appendChild(selected)
            selected = null
        })
    })
}



























// for(let list of lists){
//     list.addEventListener('dragstart', function(e){
//         let selected = e.target

//         rightBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         rightBox.addEventListener('drop', function(e){
//             rightBox.appendChild(selected)
//             selected = null
//         })

//         leftBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         leftBox.addEventListener('drop', function(e){
//             leftBox.appendChild(selected)
//             selected = null
            
//         })
//     })
// }


// for(let list of lists){
//     list.addEventListener('dragstart', function(e){
//         let selected = e.target

//         rightBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         rightBox.addEventListener('drop', function(e){
//             rightBox.appendChild(selected)
//             selected = null
//         })

//         leftBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         leftBox.addEventListener('drop', function(e){
//             leftBox.appendChild(selected)
//             selected = null
//         })

//     })
// }




// for(let list of lists){
//     list.addEventListener('dragstart', function(e){
//         let selected = e.target

//         rightBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         rightBox.addEventListener('drop', function(e){
//             rightBox.appendChild(selected)
//             selected = null
//         })

//         leftBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         leftBox.addEventListener('drop', function(e){
//             leftBox.appendChild(selected)
//             selected = null
//         })
//     })
// }


// for (let list of lists){
//     list.addEventListener('dragstart', function(e){
//         let selected = e.target

//         rightBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         rightBox.addEventListener('drop', function(e){
//             rightBox.appendChild(selected)
//             selected = null
//         })

//         leftBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         leftBox.addEventListener('drop', function(e){
//             leftBox.appendChild(selected)
//             selected = null
//         })
//     })
// }




// for(let list of lists){
//     list.addEventListener('dragstart', function(e){
//         let selected = e.target

//         rightBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         rightBox.addEventListener('drop', function(e){
//             rightBox.appendChild(selected)
//             selected = null

//             // rightBox.appendChild(selected)
// //             selected = null
//         })
    
//         leftBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         leftBox.addEventListener('drop', function(e){
//             leftBox.appendChild(selected)
//             selected = null
//         })
//     })
    
// }



// for(let list of lists){
//     list.addEventListener('dragstart', function(e){
//         let selected = e.target

//         rightBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         rightBox.addEventListener('drop', function(e){
//             rightBox.appendChild(selected)
//             selected = null
//         })


//         leftBox.addEventListener('dragover', function(e){
//             e.preventDefault()
//         })
//         leftBox.addEventListener('drop', function(e){
//             leftBox.appendChild(selected)
//             selected = null
//         })
//     })
  
// }