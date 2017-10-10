/* eslint-disable no-undef, max-nested-callbacks */
const fs = require('fs');
const path = require('path');

describe('data integrity', () => {
  describe('authors', () => {
    const authors = require('../data/author.json');
    const requiredFields = ['id', 'bio', 'avatar', 'twitter', 'github'];

    authors.forEach(author => {
      describe(`${author.id}`, () => {
        // Check required fields
        requiredFields.forEach(field => {
          it(`should have ${field} field`, () => {
            expect(Object.keys(author).includes(field)).toBeTruthy();
          });
        });

        // Check if avatar image is in the repo
        it('should have avatar image in the repo', () => {
          const avatarPath = path.join('data/', author.avatar);
          expect(fs.existsSync(avatarPath)).toBeTruthy();
        });
      });
    });
  });
});
