#!/usr/bin/node

const request = require('request');

const req = (arr, i) => {
  if (i === arr.length) return;
  request(arr[i], (err, response, body) => {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.parse(body).name);
      req(arr, i + 1);
    }
  });
};

const movieId = process.argv[2];
if (!movieId) {
  console.error('Please provide a Movie ID as a positional argument');
  process.exit(1);
}

const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(apiUrl, (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    const chars = JSON.parse(body).characters;
    req(chars, 0);
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
  }
});
