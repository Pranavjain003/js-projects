const change = function () {
    document.body.style.backgroundColor = randomColor();
  };
  
  const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  document.querySelector('#start').addEventListener('click', function (e) {
    if (!intervalId) {
      intervalId = setInterval(change, 500);
    }
  });
  
  document.querySelector('#stop').addEventListener('click', function (e) {
    clearInterval(intervalId);
    intervalId = null;
  });
  