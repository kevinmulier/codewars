const countLettersAndDigits = (input) => input.split('').filter((el) => el.match(/[a-z0-9]/i)).length;
