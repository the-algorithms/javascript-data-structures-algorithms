
  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  rand = Math.floor(Math.random() * (max - min)) + min;