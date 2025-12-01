export default function decorate(block) {
  // Create horizontal rule element
  const hr = document.createElement('hr');
  hr.setAttribute('role', 'separator');

  // Get style from block's first row/cell if exists
  const styleCell = block.querySelector('div > div');
  const style = styleCell?.textContent?.trim().toLowerCase() || 'line';

  // Apply style class
  block.classList.add(`separator-${style}`);

  // Clear block content and add hr
  block.innerHTML = '';
  block.appendChild(hr);
}
