function movingShift(s, shift) {
    let length = s.length;
    let fLength, sLength
    for(var i = Math.floor(length / 4); i > 0; i--){
      fLength = length - 4 * i;
      if(fLength > i){
        break;
      }
    }
    sLength = i + 1;
    fLength = length - 4 * sLength;
    let str = '',result = [];
    for(let j = 0;j < s.length;j++){
      if((s[j].charCodeAt() >= 65 && s[j].charCodeAt() <= 90) || (s[j].charCodeAt() >= 97 && s[j].charCodeAt() <= 122)){
        let value = s[j].charCodeAt() + shift + j;
        if((s[j].charCodeAt() >= 65 && s[j].charCodeAt() <= 90) && value > 90){
          let rest = Math.floor((value - 65) / 26);
          str += String.fromCharCode(value - rest * 26);
        }else if((s[j].charCodeAt() >= 97 && s[j].charCodeAt() <= 122) && value > 122){
          let rest = Math.floor((value - 97) / 26);
          str += String.fromCharCode(value - rest * 26);
        }else{
          str += String.fromCharCode(value);
        }
      }else{
        str += s[j];
      }
    }
    for(let k = 0;k < 4;k++){
      result.push(str.slice(sLength * k, sLength * (k + 1)));
    }
    result.push(str.slice(sLength * 4));
    return result;
}

function demovingShift(arr, shift) {
    let str = '';
    let step = 0;
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        if((arr[i][j].charCodeAt() >= 65 && arr[i][j].charCodeAt() <= 90) || (arr[i][j].charCodeAt() >= 97 && arr[i][j].charCodeAt() <= 122)){
          let value = arr[i][j].charCodeAt() - shift - step;
          if((arr[i][j].charCodeAt() >= 65 && arr[i][j].charCodeAt() <= 90) && value < 65){
            let rest = Math.ceil((65 - value) / 26);
            str += String.fromCharCode(value + rest * 26);
          }else if((arr[i][j].charCodeAt() >= 97 && arr[i][j].charCodeAt() <= 122) && value < 97){
            let rest = Math.ceil((97 - value) / 26);
            str += String.fromCharCode(value + rest * 26);
          }else{
            str += String.fromCharCode(value);
          }
          step++;
        }else{
          str += arr[i][j];
          step++;
        }
      }
    }
    return str;
}
