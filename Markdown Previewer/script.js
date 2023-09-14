document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    editor.addEventListener('input', function() {
        preview.innerHTML = marked(editor.value, { breaks: true }); // Set breaks option to true
    });

    // Default markdown content
    editor.value = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
// code block
const example = "Hello World";
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**

This is a paragraph.
This is a new line.  
This is another new line.
    `;

    // Initial rendering
    preview.innerHTML = marked(editor.value, { breaks: true }); // Set breaks option to true
});
