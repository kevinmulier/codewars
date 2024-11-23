function driver(data) {
  const [firstName, middleName, lastName, dob, gender] = data;
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  let surname = (lastName.toUpperCase() + '99999').slice(0, 5);

  let year = dob.split('-')[2];
  let decadeDigit = year[2];

  let month = months[dob.split('-')[1].substring(0, 3)];
  if (gender === 'F') {
    month = (parseInt(month) + 50).toString().padStart(2, '0');
  }

  let day = dob.split('-')[0].padStart(2, '0');

  let yearDigit = year[3];

  let initials = firstName[0] + (middleName ? middleName[0] : '9');

  let arbitraryDigit = '9';

  let checkDigits = 'AA';

  return surname + decadeDigit + month + day + yearDigit + initials + arbitraryDigit + checkDigits;
}
