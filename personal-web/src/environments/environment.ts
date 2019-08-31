// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  author: {
    name: 'Bhushan Pawar',
    thumbnail: 'https://lh3.googleusercontent.com/-1CKMKmJbFpk/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdNmJl3zBuwo3jRkn1KB7eyfEkxFw.CMID/s196-c/photo.jpg',
    linkedIn: 'https://www.linkedin.com/in/bhushan-pawar/',
    phone: 'tel:+919970905608',
    website: 'https://erbhushanpawar.github.io',
    facebook: 'https://facebook.com/bhushupawar'
  },

  postsURL: 'http://localhost:3000/posts',
  coursesURL: 'http://localhost:3000/courses',
  bannerURL: 'http://localhost:3000/banner',
  aboutURL: 'http://localhost:3000/about',
  commentsURL: 'http://localhost:3000/comments'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
