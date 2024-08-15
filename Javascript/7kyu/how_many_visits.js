function howManyTimes(annualPrice, individualPrice) {
 let times = 0;
  
 while (times*individualPrice<annualPrice && individualPrice) {
   times++;
 }
  
 return times ? times:Infinity;
}
