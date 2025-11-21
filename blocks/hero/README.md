# Hero Block

## Overview

The Hero block creates a prominent banner section with a background image, text content, and an optional call-to-action button. It's typically used at the top of pages to capture attention and guide users to key actions.

## Integration

### Block Configuration

This block does not use configuration keys from `readBlockConfig()`. Content is provided directly through the block's structure.

### Block Structure

The Hero block expects the following structure:

| Row | Content | Description |
|-----|---------|-------------|
| 1 | Image | Background image for the hero section |
| 2 | Text | Headline or descriptive text (supports rich text) |
| 3 | Link (optional) | Call-to-action button with link, text, title, and type |

### Component Model Fields

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `image` | reference | Background image | Yes |
| `imageAlt` | text | Alternative text for the image | No |
| `text` | richtext | Hero text content (headline) | No |
| `link` | aem-content | Button destination URL | No |
| `linkText` | text | Text displayed on the button | No |
| `linkTitle` | text | Title attribute for the button | No |
| `linkType` | select | Button style: default, primary, or secondary | No |

### URL Parameters
<!-- No URL parameters affect this block -->

### Local Storage
<!-- This block does not use localStorage -->

### Events

<!-- This block does not listen to or emit custom events -->

## Behavior Patterns

### Display
- The background image fills the entire hero section using absolute positioning
- Text content is centered and overlaid on the background image with high z-index for visibility
- Text color is set to background color for contrast against the image
- Content is constrained to a maximum width of 1200px for readability

### Button Styling
- If a link is provided, it's rendered as a button with the `.button` class
- Button type (primary/secondary) can be specified via the `linkType` field
- Button appears below the text with appropriate spacing (16px margin-top)

### Responsive Behavior
- Padding adjusts from 24px on mobile to 32px on desktop (≥900px)
- Content maintains center alignment across all screen sizes
- Minimum height of 300px ensures adequate visual impact

### Error Handling
- If no image is provided, the block displays without a background
- If no text is provided, only the image and button (if present) are shown
- If no link is provided, only the image and text are displayed
- Missing button properties gracefully degrade without breaking the layout

## Styling

The block uses the following CSS classes:
- `.hero` - Main container with padding and positioning
- `.hero-content` - Content wrapper with max-width and z-index
- `.hero picture` - Background image positioning
- `.hero-content .button` - Button styling with margin
