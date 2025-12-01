# Separator Block

## Overview

The Separator block creates a horizontal rule for visually separating content sections. It clarifies section divisions and information hierarchy, improving readability and information comprehension by making the information structure easier for users to understand.

## Integration

### Block Configuration

This block does not use configuration keys from `readBlockConfig()`. The style is controlled through the component model field.

### Block Structure

The Separator block is a single-row block with no visible content:

| Row | Content | Description |
|-----|---------|-------------|
| 1 | Style selection | Hidden field that determines the separator style |

### Component Model Fields

| Field | Type | Default | Description | Required |
|-------|------|---------|-------------|----------|
| `style` | select | Line | Visual style of the separator | Yes |

#### Style Options

- **Line**: Thicker line (2px) for stronger separation
- **Dashed**: Thinner dashed line (1px) for softer separation
- **Spacer**: No visual line, provides only 32px height spacing

### URL Parameters
<!-- No URL parameters affect this block -->

### Local Storage
<!-- This block does not use localStorage -->

### Events

<!-- This block does not listen to or emit custom events -->

## Behavior Patterns

### Display

#### Width
- The separator width follows the content width (aligned to the content area, not full screen width)
- Constrained to a maximum width defined by the content area (typically 1200px)

#### Margin Settings

**Line / Dashed Styles:**
- Desktop: 40px top and bottom margin
- Mobile (≤767px): 32px top and bottom margin

**Spacer Style:**
- 0px margin
- 32px height spacing only, without divider line

### Responsive Design

- No layout changes between desktop and mobile
- Sizes and spacing follow design variables
- Margin adjustments between desktop and mobile for Line and Dashed styles

### Conditional Display

#### Style-Based Display
- **Line**: Displays thicker line (2px solid) for stronger visual separation
- **Dashed**: Displays thinner dashed line (1px, 8px dash pattern) for softer visual separation
- **Spacer**: No visual line displayed, provides only spacing

#### Section Background Color
- When parent section has navy gradation background color, the line color changes to white (#FFFFFF)
- Applies to both Line and Dashed styles
- Ensures proper contrast against dark backgrounds

### Error Handling

- If no style is specified, defaults to "Line" style
- Block gracefully handles missing configuration
- Always renders a valid `<hr>` element for semantic correctness

## Accessibility

### Semantic HTML
- Uses `<hr>` element to indicate thematic break between sections
- Provides proper semantic meaning for content separation

### Screen Reader Support
- Applies `role="separator"` attribute
- Recognized as decorative divider by assistive technologies
- Properly announces content breaks to screen reader users

### Focus Management
- No focus required as it is not an interactive element
- Does not interfere with keyboard navigation flow
- Purely presentational component

## Styling

The block uses the following CSS classes:
- `.separator` - Main container with width and margin settings
- `.separator-line` - Line style with 2px solid border
- `.separator-dashed` - Dashed style with 1px dashed pattern
- `.separator-spacer` - Spacer style with transparent background

### Responsive Classes
Media queries adjust margins for mobile viewports (≤767px)

## Usage

The Separator block can be used:
- In any section across all pages
- Between content blocks to create visual hierarchy
- To organize content and improve readability
- To provide spacing without visual dividers (Spacer style)
