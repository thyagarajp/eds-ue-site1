/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  [...block.children].forEach((row) => {
    // Validate that row has required children
    if (!row.children || row.children.length < 2) {
      console.warn('Accordion item is missing required fields (label and body)');
      return;
    }

    // decorate accordion item label
    const label = row.children[0];
    if (!label) {
      console.warn('Accordion item missing label field');
      return;
    }
    
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    
    // Move instrumentation from label to summary (preserves Universal Editor data attributes)
    moveInstrumentation(label, summary);
    
    // Move all child nodes from label to summary
    if (label.childNodes && label.childNodes.length > 0) {
      summary.append(...Array.from(label.childNodes));
    } else {
      // Fallback: use text content if no child nodes
      summary.textContent = label.textContent || 'Label';
    }
    
    // decorate accordion item body
    const body = row.children[1];
    if (!body) {
      console.warn('Accordion item missing body field');
      return;
    }
    
    body.className = 'accordion-item-body';
    
    // decorate accordion item
    const details = document.createElement('details');
    details.className = 'accordion-item';
    
    // Move instrumentation from row to details (preserves Universal Editor data attributes)
    moveInstrumentation(row, details);
    
    // Add accessibility attributes
    summary.setAttribute('role', 'button');
    summary.setAttribute('tabindex', '0');
    body.setAttribute('role', 'region');
    
    // Update aria-expanded on toggle
    const updateAriaExpanded = () => {
      summary.setAttribute('aria-expanded', details.open ? 'true' : 'false');
    };
    details.addEventListener('toggle', updateAriaExpanded);
    updateAriaExpanded(); // Set initial state
    
    details.append(summary, body);
    row.replaceWith(details);
  });
}
