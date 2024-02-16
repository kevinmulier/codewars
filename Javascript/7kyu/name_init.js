// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name) {
  const splittedName = name.split(' ');

  let initializedNameArr = [];

  for (let i = 0; i < splittedName.length; i++) {
    initializedNameArr.push(
      i === 0 || i === splittedName.length - 1
        ? splittedName[i]
        : `${splittedName[i][0]}.`,
    );
  }

  return initializedNameArr.join(' ');
}
