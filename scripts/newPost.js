const fs = require('fs')
const path = require('path');
const title = process.argv[2];

newPost();

function newPost() {
    const filePath = generateFilePath(title);
    const content = generateContent();
    fs.writeFile(filePath, content, { flag: 'w+' }, (err) => {
        if (err) return console.log(err);
        console.log(`Created ${filePath}`);
    });
}

function generateFilePath(title) {
    return path.join(__dirname, '..', 'src', `${title}.md`);
}

function generateContent() {
    return `---
layout: layouts/default.html
---

# Title 

## Ingredients 

## Directions
`
}