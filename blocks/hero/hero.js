export default function decorate(block) {
  const picture = block.querySelector('picture');
  const text = block.querySelector('p, h1, h2, h3, h4, h5, h6');
  const link = block.querySelector('a');

  // Create wrapper for content
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-content';

  // Add text if exists
  if (text) {
    wrapper.appendChild(text);
  }

  // Add button if link exists
  if (link) {
    link.className = 'button';
    // Apply button type if specified
    const linkType = link.getAttribute('data-link-type');
    if (linkType) {
      link.classList.add(linkType);
    }
    wrapper.appendChild(link);
  }

  // Clear block and rebuild
  block.innerHTML = '';

  // Add picture first (background)
  if (picture) {
    block.appendChild(picture);
  }

  // Add content wrapper
  block.appendChild(wrapper);
}
