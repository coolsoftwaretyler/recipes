const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const DomParser = require('dom-parser');
const fs = require('fs');

const parser = new DomParser();

const links = [
    'https://www.thekitchn.com/pasta-braised-greens-recipe-23269601'
]

// Make a request to the link
const scrape = async(link) => {
    const response = await fetch(link);
    const body = await response.text();
    const dom = parser.parseFromString(body);

    // Find every ul or ol in the dom
    const unorderedLists = dom.getElementsByTagName('ul');
    const orderedLists = dom.getElementsByTagName('ol');

    const lists = [...unorderedLists, ...orderedLists];

    // For each list, log out the textContent of its first li
    // Ask the user if this is the ingredients list or the directions
    lists.forEach(list => {
        const firstLi = list.getElementsByTagName('li')[0];
        const text = firstLi.textContent;

        // If text includes penne, trim the list items and append them to a file
        // Instead of checking for text, prompt a user to select the list
        if (text.includes('onion')) {
            const trimmed = list.getElementsByTagName('li').map(li => li.textContent.trim()).join('\n');
            fs.appendFile('penne.md', trimmed, (err) => {
                if (err) throw err;
                console.log('Penne saved!');
            })
        }

        // Prompt the user to select the list if it's directions
        if (text.includes('Step 1')) {
            const trimmed = list.getElementsByTagName('li').map(li => li.textContent.trim()).join('\n');
            fs.appendFile('penne.md', trimmed, (err) => {
                if (err) throw err;
                console.log('Penne saved!');
            })
        }

        // Instead of writing in those loops, grab the lists, write them in a formatted way.
        // Don't forget to grab the `title` element of the response. 
    })
}

scrape(links[0]).then(() => console.log('Done!'));