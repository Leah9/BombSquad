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
![Alt text](assets/images/Wire_Mobile_Welcome.JPG "a title")
https://wireframe.cc/wQ6r6B
---
##### Tablet
![Alt text](assets/images/Wire_Tablet_Welcome.JPG "a title")
https://wireframe.cc/SafSfs

---
##### Laptop / Desktop
![Alt text](assets/images/Wire_Desktop_Welcome.JPG "a title")
https://wireframe.cc/UTqCHl
### Main Game Screen

##### Mobile
![Alt text](assets/images/Wire_Mobile_Game.JPG "a title")
https://wireframe.cc/qbmGOd

---
##### Tablet
![Alt text](assets/images/Wire_Tablet_Game.JPG "a title")
https://wireframe.cc/doqUVW
---
##### laptop / Desktop
![Alt text](assets/images/Wire_Desktop_Game.JPG "a title")
https://wireframe.cc/xWuU9l
---

### Win / Loose Conclusion Screen

##### Mobile
![Alt text](assets/images/Wire_Mobile_Conclusion.JPG "a title")
https://wireframe.cc/0Rviu0
---
##### Tablet
![Alt text](assets/images/Wire_Tablet_Conclusion.JPG "a title")
https://wireframe.cc/QImuPM

---
##### Laptop
![Alt text](assets/images/Wire_Desktop_Conclusion.JPG "a title")
https://wireframe.cc/TLwtMm

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
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/randomword',
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
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



