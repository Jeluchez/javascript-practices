var aves = document.getElementsByTagName('li');

  for (var i = 0; i < aves.length; i++) {
    if (aves[i].matches('.algo')) {
      console.log('El ' + aves[i].textContent + ' está amenazada de extinción!');
    }
  }