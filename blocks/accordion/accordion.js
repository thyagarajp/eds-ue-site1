/*
 * Accordion Block
 * Displays questions and answers or detailed information in a collapsible format
 * https://www.hlx.live/developer/block-collection/accordion
 */

export default function decorate(block) {
  [...block.children].forEach((row) => {
    // Add accordion-item class to the row for styling
    row.className = 'accordion-item';

    // decorate accordion item label
    const label = row.children[0];
    label.className = 'accordion-item-label';
    label.setAttribute('role', 'button');
    label.setAttribute('aria-expanded', 'false');
    label.setAttribute('tabindex', '0');

    // Add icon for expand/collapse
    const icon = document.createElement('span');
    icon.className = 'accordion-icon';
    icon.setAttribute('aria-hidden', 'true');
    label.appendChild(icon);

    // decorate accordion item body
    const body = row.children[1];
    body.className = 'accordion-item-body';
    body.setAttribute('role', 'region');
    body.style.display = 'none';

    // Handle click events for toggle
    label.addEventListener('click', () => {
      const isOpen = body.style.display !== 'none';
      body.style.display = isOpen ? 'none' : 'block';
      label.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      row.classList.toggle('is-open', !isOpen);
    });

    // Keyboard support for Enter and Space
    label.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        label.click();
      }
    });
  });
}
