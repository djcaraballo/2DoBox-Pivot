// remove global variables
// refactor code flow
// create objects
// refactor ids to classes when possible - already refactored css and html

// var title = $('#title-input').val();
// var body = $('#body-input').val();
// var ul = $('ul').val();

// var numCards = 0;
retrieveObjectsInStorage();
// var qualityVariable = "swill";
// var card

function CardObject(id, title, body, quality) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = quality;
};

CardObject();

function newCard(obj) {
  $('ul').prepend(`
    <li id="${obj.id}" class="card-container">
      <article class="card-box-1">
        <h2 class="title-of-card"> ${obj.title} </h2>
        <button class="delete-button" data-id="${obj.id}"></button>
      </article>
      <article class="card-box-2">
        <p>${obj.body}</p>
      </article>
      <article class="card-box-3">
        <button class="upvote"></button>
        <button class="downvote"></button>
        <p class="quality">quality: <span class="quality-variable">${obj.quality}</span></p>
      </article>
    </li>`);
};

// var newIdeaObjects = function() { 
  
// };

$('.save-btn').on('click', saveBtn);

function saveBtn(event) {
  event.preventDefault();
  var ideaObject = new CardObject(Date.now(), $('#title-input').val(), $('#body-input').val(), 'swill');
  // numCards++;
  console.log(ideaObject);
  localStoreCard(ideaObject);
  newCard(ideaObject);
  $('form')[0].reset();
};

function localStoreCard(CardObject) {
  var cardString = JSON.stringify(CardObject);
  localStorage.setItem(CardObject.id, cardString)
};

function localGetCard(card) {
  var retrievedObject = localStorage.getItem(card);
  var parsedItem = JSON.parse(retrievedObject);
  return parsedItem;
}

function retrieveObjectsInStorage() {
  var keyArray = Object.keys(localStorage);
    for (var i = 0; i < localStorage.length; i++) {
        var objectFromStorage = localStorage.getItem(keyArray[i]);
        var cardData = JSON.parse(objectFromStorage);
        newCard(cardData);
    }
}

console.log(localGetCard())

$('.delete-button').on('click', deleteCard);

function deleteCard() {
  // event.preventDefault();
  $(this).closest('li').remove();
  localStorage.removeItem($(this).attr('data-id'));
  console.log($(this.attr));
};


// add function that checks initial state of page and renders DOM elements
    // use document.ready method to trigger page load
    // parse items from localStorage

// $(document).ready(function() {
//   localGetCard();
// }) 


// $('.save-btn').on('click', function(event) {
//     event.preventDefault();
//     if ($('#title-input').val() === "" || $('#body-input').val() === "") {
//        return false;
//     };  
//     numCards++;
//     $( "ul" ).prepend(newCard('card' + numCards, $('#title-input').val(), $('#body-input').val(), qualityVariable)); 
//     localStoreCard();
//     current status: localStoreCard is not storing idea in localStorage
//     $('form')[0].reset();
// });

// unique identifier for each new idea?

// Push card object onto array
// var ideasArray = [];
// function cardObject() {
//   ideasArray.push({
//       title: $('#title-input').val(),
//       body: $('#body-input').val(),
//       // quality: qualityVariable
//   });
// }
// current status: unable to add more than one idea to local storage and to DOM
// current status: upon refresh unable to save new ideas also undefined card appears
// !!!!!!!!!!!!!!!Initial page state => create new localStorage get item and parse functions
 
// $.each(localStorage, function(key) {
//     var retrieveCard = localStorage.getItem(this);
//     var cardData = JSON.parse(retrieveCard);
//     console.log(this);
//     numCards++;
//     $( "ul" ).prepend(newCard(key, cardData.title, cardData.body, cardData.quality));
// });

// current status: localStorage populates before refreshing page
    //upon refresh undefined card appears
        //no new ideas saved to localStorage 
// function localStoreCard(card) {
//     var cardString = JSON.stringify(cardObject());
//     localStorage.setItem("card" + numCards, cardString);
// }


// refactor toggling of buttons - current status: not functional
// $("ul").on('click', function(event){
//     var currentQuality = $($(event.target).siblings('p.quality').children()[0]).text().trim();
//     var qualityVariable;
// remove nested if/else statements - possibly use ternary operators
//     if (event.target.className === "upvote" || event.target.className === "downvote"){
//         if (event.target.className === "upvote" && currentQuality === "plausible"){
//             qualityVariable = "genius";
//             $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
//         } else if (event.target.className === "upvote" && currentQuality === "swill") {
//             qualityVariable = "plausible";
//             $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);            
//         } else if (event.target.className === "downvote" && currentQuality === "plausible") {
//             qualityVariable = "swill"
//             $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
//         } else if (event.target.className === "downvote" && currentQuality === "genius") {
//             qualityVariable = "plausible"
//             $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
//         } else if (event.target.className === "downvote" && currentQuality === "swill") {
//             qualityVariable = "swill";        
//         } else if (event.target.className === "upvote" && currentQuality === "genius") {
//             qualityVariable = "genius";
//         }
//     var cardHTML = $(event.target).closest('.card-container');
//     var cardHTMLId = cardHTML[0].id;
//     var cardObjectInJSON = localStorage.getItem(cardHTMLId);
//     var cardObjectInJS = JSON.parse(cardObjectInJSON);
//     cardObjectInJS.quality = qualityVariable;
//     var newCardJSON = JSON.stringify(cardObjectInJS);
//     localStorage.setItem(cardHTMLId, newCardJSON);
//     }   
//     else if (event.target.className === "delete-button") {
//         var cardHTML = $(event.target).closest('.card-container').remove();
//         var cardHTMLId = cardHTML[0].id;
//         localStorage.removeItem(cardHTMLId);
//     }
// });


// });

      










