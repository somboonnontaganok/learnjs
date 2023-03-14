const predictTime = (hour,min,nextMin) => {
    // get total minutes
    let totalMinutes = min + nextMin;
    let totalTime = (hour * 60) + (totalMinutes);
    console.log(`next time = ${Math.floor(totalTime/60) % 24}:${ (totalMinutes) % 60 }`)
  }

  predictTime(25, 25, 1000);