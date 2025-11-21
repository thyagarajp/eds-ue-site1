# Quote Block

## Overview

The Quote block displays a styled quotation with an optional author attribution. It provides a visually distinct way to highlight testimonials, customer feedback, or notable quotes within page content.

## Integration

### Block Configuration

This block does not use any configuration keys from `readBlockConfig()`. Content is provided directly through the block's structure.

### Block Structure

The Quote block expects the following structure:

| Row | Content | Description |
|-----|---------|-------------|
| 1 | Quote text | The main quotation text (supports rich text formatting) |
| 2 | Author name | The name of the person or source of the quote |

### URL Parameters
<!-- No URL parameters affect this block -->

### Local Storage
<!-- This block does not use localStorage -->

### Events

<!-- This block does not listen to or emit custom events -->

## Behavior Patterns

### Display
- The quote text is displayed in italic style within a `<blockquote>` element
- The block features a left border for visual distinction
- The author name appears below the quote, right-aligned in a smaller, lighter font

### Error Handling
- If no quote text is provided, an empty blockquote is rendered
- If no author is provided, an empty author element is still rendered
- Missing content gracefully degrades without breaking the page layout

## Styling

The block uses the following CSS classes:
- `.block.quote` - Main container with padding and left border
- `.block.quote blockquote` - Quote text styling (italic)
- `.block.quote .author` - Author attribution styling
