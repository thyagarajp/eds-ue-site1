# Accordion Block

## Overview

The Accordion block displays questions and answers or detailed information in a collapsible format. It opens and closes on click or tap, organizing and presenting information clearly. This block is designed to compact large amounts of information, allowing users to efficiently browse only the information they need, thereby improving content understanding and page dwell time.

## Integration

### Block Configuration

This block does not use configuration keys from `readBlockConfig()`. Content is provided through accordion items.

### Block Structure

The Accordion block contains multiple Accordion Items:

| Component | Content | Description |
|-----------|---------|-------------|
| Accordion Item | Label and Contents | Each item has a question/label and collapsible answer/content |

### Component Model Fields

#### Accordion Item

| Field | Type | Default | Description | Required | Validation Message |
|-------|------|---------|-------------|----------|-------------------|
| `label` | richtext | N/A | Question or label text (ラベル) | Yes | "Please enter a label - ラベルを入力してください" |
| `contents` | richtext | N/A | Answer or detailed content (内容) | Yes | "Please enter content - 内容を入力してください" |

### URL Parameters
<!-- No URL parameters affect this block -->

### Local Storage
<!-- This block does not use localStorage -->

### Events

#### Event Listeners
- `toggle` event on each `<details>` element - Updates `aria-expanded` attribute when accordion item is opened/closed

## Behavior Patterns

### Default State
- All accordion items are collapsed by default
- Only the label/question is visible

### Interactivity

#### Click/Tap Behavior
- Clicking on the label area expands or collapses the accordion item
- Multiple items can be open simultaneously
- Each item operates independently

#### Icon Display
- **Collapsed state**: Displays "+" icon
- **Expanded state**: Displays "−" (minus) icon
- Icons change smoothly when toggling

### Responsive Design
- No layout changes between desktop and mobile
- Sizes and spacing conform to design variables
- Content width follows standard content constraints

### Conditional Display

#### Navy Gradation Background
- When parent section has navy gradation background color, text color changes to white (#FFFFFF)
- Border colors adjust to semi-transparent white for better visibility
- Applies to both label and content areas

## Accessibility

### Keyboard Operation
- **Tab key**: Moves focus between accordion items
- **Enter key**: Opens/closes the focused accordion item
- **Space key**: Opens/closes the focused accordion item
- Clear focus ring displayed when accordion item has keyboard focus

### Screen Reader Support
- Toggle label is properly announced to screen readers
- `role="button"` on summary element indicates interactivity
- `aria-expanded` attribute reflects current open/closed state (true/false)
- `role="region"` on content area for proper semantics
- Content is read according to open/close operations

### Focus Management
- Visible focus indicator with 2px outline
- Focus outline offset ensures visibility
- Tab order follows visual order of accordion items

### Semantic HTML
- Uses native `<details>` and `<summary>` elements
- Provides built-in accessibility support
- Screen readers announce expand/collapse state automatically

## Styling

The block uses the following CSS classes:
- `.accordion` - Main container with max-width constraint
- `.accordion-item` - Individual `<details>` element for each item
- `.accordion-item-label` - The clickable `<summary>` element
- `.accordion-icon` - Icon container showing +/− symbol
- `.accordion-item-body` - Collapsible content area

### State Classes
- `.accordion details[open]` - Applied when accordion item is expanded

### Responsive Classes
- No specific responsive classes; layout remains consistent across viewports

## Usage

The Accordion block can be used in:
- Q&A sections on any page
- FAQ pages
- Product information pages
- Athlete or profile introduction pages
- Any section requiring organized, collapsible content display

### Example Use Cases
- Frequently Asked Questions
- Product specifications and details
- Terms and conditions
- Help documentation
- Event schedules and details
