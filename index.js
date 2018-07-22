// remove global variables
// refactor code flow
// create objects
// refactor ids to classes when possible - already refactored css and html
var title = $('#title-input').val();
var body = $('#body-input').val();
var numCards = 0;
var qualityVariable = "swill";

// refactor with template literal
// use expression interpolation

// add function that checks initial state of page and renders DOM elements
    // use document.ready method to trigger page load
    // parse items from localStorage
$('.save-btn').on('click', function(event) {
    event.preventDefault();
    if ($('#title-input').val() === "" || $('#body-input').val() === "") {
       return false;
    };  
    numCards++;
    $( ".bottom-box" ).prepend(newCard('card' + numCards, $('#title-input').val(), $('#body-input').val(), qualityVariable)); 
    localStoreCard();
    // current status: localStoreCard is not storing idea in localStorage
    $('form')[0].reset();
});

// unique identifier for each new idea?
var newCard = function(id , title , body , quality) {
    return '<div id="' + id + '"class="card-container"><h2 class="title-of-card">'  
            + title +  '</h2>'
            + '<button class="delete-button"></button>'
            +'<p>'
            + body + '</p>'
            + '<button class="upvote"></button>' 
            + '<button class="downvote"></button>' 
            + '<p class="quality">' + 'quality:' + '<span class="qualityVariable">' + quality + '</span>' + '</p>'
            + '<hr>' 
            + '</div>';
};
// Push card object onto array
function cardObject() {
    return {
        title: $('#title-input').val(),
        body: $('#body-input').val(),
        quality: qualityVariable
    };
}
// current status: unable to add more than one idea to local storage and to DOM
// current status: upon refresh unable to save new ideas also undefined card appears
// !!!!!!!!!!!!!!!Initial page state => create new localStorage get item and parse functions
 
$.each(localStorage, function(key) {
    var cardData = JSON.parse(this);
    console.log(this);
    numCards++;
    $( ".bottom-box" ).prepend(newCard(key, cardData.title, cardData.body, cardData.quality));
});

// current status: localStorage populates before refreshing page
    //upon refresh undefined card appears
        //no new ideas saved to localStorage 
var localStoreCard = function() {
    var cardString = JSON.stringify(cardObject());
    localStorage.setItem('card' + numCards  , cardString);
}

// refactor toggling of buttons - current status: not functional
$(".bottom-box").on('click', function(event){
    var currentQuality = $($(event.target).siblings('p.quality').children()[0]).text().trim();
    var qualityVariable;
// remove nested if/else statements - possibly use ternary operators
    if (event.target.className === "upvote" || event.target.className === "downvote"){
        if (event.target.className === "upvote" && currentQuality === "plausible"){
            qualityVariable = "genius";
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
        } else if (event.target.className === "upvote" && currentQuality === "swill") {
            qualityVariable = "plausible";
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);            
        } else if (event.target.className === "downvote" && currentQuality === "plausible") {
            qualityVariable = "swill"
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
        } else if (event.target.className === "downvote" && currentQuality === "genius") {
            qualityVariable = "plausible"
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
        } else if (event.target.className === "downvote" && currentQuality === "swill") {
            qualityVariable = "swill";        
        } else if (event.target.className === "upvote" && currentQuality === "genius") {
            qualityVariable = "genius";
        }
    var cardHTML = $(event.target).closest('.card-container');
    var cardHTMLId = cardHTML[0].id;
    var cardObjectInJSON = localStorage.getItem(cardHTMLId);
    var cardObjectInJS = JSON.parse(cardObjectInJSON);
    cardObjectInJS.quality = qualityVariable;
    var newCardJSON = JSON.stringify(cardObjectInJS);
    localStorage.setItem(cardHTMLId, newCardJSON);
    }   
    else if (event.target.className === "delete-button") {
        var cardHTML = $(event.target).closest('.card-container').remove();
        var cardHTMLId = cardHTML[0].id;
        localStorage.removeItem(cardHTMLId);
    }
});
      










