export default function decorate(block) {
  const quote = document.createElement('blockquote');
  quote.innerHTML = block.children[0]?.innerHTML || '';

  const author = document.createElement('p');
  author.className = 'author';
  author.textContent = block.children[1]?.textContent || '';

  block.innerHTML = '';
  block.append(quote, author);
}
