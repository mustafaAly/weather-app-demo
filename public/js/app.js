console.log('Client side javascript file is loaded!')
fetch('http://puzzle.mead.io/puzzle').then(r=>{
    r.json().then(data=>{
        console.log(data);
    })

})