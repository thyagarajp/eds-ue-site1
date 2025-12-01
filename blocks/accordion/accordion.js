/*
 * Accordion Block
 * Displays questions and answers or detailed information in a collapsible format
 * https://www.hlx.live/developer/block-collection/accordion
 */

export default function decorate(block) {
  [...block.children].forEach((row) => {
    // decorate accordion item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.setAttribute('role', 'button');
    summary.setAttribute('aria-expanded', 'false');
    summary.setAttribute('tabindex', '0');
    summary.append(...label.childNodes);

    // Add icon for expand/collapse
    const icon = document.createElement('span');
    icon.className = 'accordion-icon';
    icon.setAttribute('aria-hidden', 'true');
    summary.appendChild(icon);

    // decorate accordion item body
    const body = row.children[1];
    body.className = 'accordion-item-body';
    body.setAttribute('role', 'region');

    // decorate accordion item
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);

    // Handle toggle events for accessibility
    details.addEventListener('toggle', () => {
      const isOpen = details.hasAttribute('open');
      summary.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Keyboard support for Enter and Space
    summary.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        details.open = !details.open;
      }
    });

    row.replaceWith(details);
  });
}
