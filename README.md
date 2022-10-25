# BombSquad

## UX
### Project Goal
The primary goad is to create an educational game to allow people to learn new words.

#### Tagret Audience

* Anyone looking to pass the time with a simple game and maybe learn a new word or two.

#### User goals
* Win the game
* Maybe have a litle fun
* Learn a new word or two
* Try and get a high score
#### Required sections
* Welcome, explanation, select difficulty
* Main game screen
* Win / Loose screen


## User stories

* I am a user looking to learn a new word.
* I am a user just looking to fill 5 minutes..
* I am a parent looking to keep my child occupied for a few minutes..

## Design choices

My design choices are to make an exciting looking game that can be played on all devices from phones to desktop PC within a browser.
## Wireframe
I have created wireframe views of the three pages that the site will have based on my required sections. I used wireframe.cc to complete this task.

### Welcome Screen

##### Mobile

---
##### Tablet

---
##### Laptop

### Main Game Screen

##### Mobile
https://wireframe.cc/qbmGOd

---
##### Tablet
https://wireframe.cc/doqUVW
---
##### laptop / Desktop
https://wireframe.cc/xWuU9l
---

### Win / Loose Conclusion Screen

##### Mobile

---
##### Tablet

---
##### Laptop

---

## Code

### Languages used
* HTML
* CSS
* Javascript

### My Styles and Bootstrap Overrides

All my style rules are contained in the style.css file.

## Credits
All images and content are my own.

### Acknoledgements - Attribution

#### API Ninjas

https://api-ninjas.com/api/randomword
The following example code is from API-Ninjas.com and has been used as the basis for my API call. My API key is kmQ6b+eEy1yibeOtEmGp2g==IgpoxGkqjCuD6Cbh for testing. It will be changed once deployed to avoid abuse.
```javascript
const request = require('request');

request.get({
  url: 'https://api.api-ninjas.com/v1/randomword',
  headers: {
    'X-Api-Key': 'YOUR_API_KEY'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});
```

## Deployment

### How to run this project locally


## Testing

#### All pages pass CSS and HTML validation ?
### CSS

### HTML

### JavaScript ?


### Bugs discovered


# Project Requirements Check From CI Project Brief

## Main Technologies


## Mandatory Requirements



