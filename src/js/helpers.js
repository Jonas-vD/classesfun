export const randomRange = (min, max, floored = false) => {
    return floored
      ? Math.floor(Math.random() * (max - min +1 ) + min)
      : Math.random() * (max - min) + min;
  };


  