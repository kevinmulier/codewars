function uniqueSum(lst){
  const uniques = [...new Set(lst)];
  
  return uniques.length > 0 ? uniques.reduce((acc,c)=>acc+c,0) : null;
}
