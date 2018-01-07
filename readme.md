# Adding new images

  1. Run `git pull` to ensure that you have the latest source code.
  2. Add your image file to `src/images`.
  3. Open `src/portfolio.json`. Add a new entry in the section to which the photo belongs. An entry looks like this:
  
    {
      "title": "Image title",
      "medium": "Image medium",
      "src": "filename.jpg",
      "alt": "Image alt text (appears on mouse hover)"
    }
    
Don't forget to add a comma to the previous entry! E.g.:

    {
      "title": "Apple",
      "medium": "Digital Painting",
      "src": "apple.jpg",
      "alt": "Apple"
    }, <-- IMPORTANT COMMA
    {
      "title": "Portrait",
      "medium": "Digital Painting",
      "src": "portrait.jpg",
      "alt": "Portrait"
    }
    
If you use a text editor like [Atom](https://atom.io), it should underline in red any invalid JSON and help you catch errors.

  4. Run `npm run deploy` to build and deploy the site.
