function highlight(code) {
  return code.replace(/(F+)|(L+)|(R+)|(\d+)/g, (match) => {
    if (/F+/.test(match)) {
      return `<span style="color: pink">${match}</span>`;
    } else if (/L+/.test(match)) {
      return `<span style="color: red">${match}</span>`;
    } else if (/R+/.test(match)) {
      return `<span style="color: green">${match}</span>`;
    } else if (/\d+/.test(match)) {
      return `<span style="color: orange">${match}</span>`;
    }
  });
}
