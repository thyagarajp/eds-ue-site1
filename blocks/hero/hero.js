export default function decorate(block) {
  // Get all rows from the block
  const rows = [...block.children];
  
  // Create wrapper for content
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-content';

  rows.forEach((row) => {
    const cells = [...row.children];
    
    cells.forEach((cell) => {
      // Handle picture (background image)
      const picture = cell.querySelector('picture');
      if (picture) {
        block.prepend(picture);
        return;
      }

      // Handle text content
      const textElements = cell.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
      if (textElements.length > 0) {
        textElements.forEach((el) => wrapper.appendChild(el.cloneNode(true)));
      }

      // Handle links (buttons)
      const links = cell.querySelectorAll('a');
      if (links.length > 0) {
        links.forEach((link) => {
          const button = link.cloneNode(true);
          button.className = 'button';
          
          // Check for button type in the link's parent or data attributes
          const parentText = link.parentElement?.textContent || '';
          if (parentText.includes('primary') || link.classList.contains('primary')) {
            button.classList.add('primary');
          } else if (parentText.includes('secondary') || link.classList.contains('secondary')) {
            button.classList.add('secondary');
          }
          
          wrapper.appendChild(button);
        });
      }
    });
  });

  // Clear the block and rebuild
  block.innerHTML = '';
  
  // Append the content wrapper
  block.appendChild(wrapper);
}
