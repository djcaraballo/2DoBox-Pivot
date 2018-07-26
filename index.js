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
      <h2 class="title-of-card"> ${obj.title} </h2>
      <button class="delete-button" data-id="${obj.id}"></button>
      <p>${obj.body}</p>
      <button class="upvote"></button>
      <button class="downvote"></button>
      <p class="quality">quality:<span class="qualityVariable">${obj.quality}</span></p>
      <hr> 
    </li>`);
};

$('.save-btn').on('click', saveBtn);

function saveBtn(event) {
  event.preventDefault();
  if ($('#title-input').val() === "" || $('#body-input').val() === "") {
       return false;
    };  
  var ideaObject = new CardObject(Date.now(), $('#title-input').val(), $('#body-input').val(), 'swill');
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

$('.delete-button').on('click', deleteCard);

function deleteCard() {
  $(this).closest('li').remove();
  localStorage.removeItem($(this).attr('data-id'));
  console.log($(this.attr));
};

// $('li').on('focusout', 'h2')

// function editTodoTitle (){
//     var object = getObject($(this).closest('li').attr('id'));
//     var newContent = $(this).text();
//     object.title = newContent;
//     setObject(object);
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

      










