const clock = document.getElementById('clock')



setInterval(function(){ 
    let date = new Date();
    clock.innerHTML = `${date.toLocaleTimeString()} & ${date.toLocaleDateString()}`;
//  console.log( date.toLocaleTimeString())
},1000)