function catalog(s, article) {
  const regex = new RegExp(`<prod><name>(.*?)</name><prx>(.*?)</prx><qty>(.*?)</qty></prod>`, 'g');
  let match;
  let result = [];

  while ((match = regex.exec(s)) !== null) {
    if (match[1].includes(article)) {
      result.push(`${match[1]} > prx: $${match[2]} qty: ${match[3]}`);
    }
  }

  return result.length > 0 ? result.join('\r\n') : 'Nothing';
}
