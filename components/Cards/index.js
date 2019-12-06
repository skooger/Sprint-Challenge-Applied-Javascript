// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let topics = ['javascript', 'bootstrap', 'technology', 'jquery', 'node']

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function (response) {
    // handle success
    let articles = response['data']['articles']
    for(let i = 0; i < topics.length; i++){

        //console.log(articles[topics[i]])
        let topicArticleList = articles[topics[i]]
        topicArticleList.forEach(element => {
            console.log(element)
            let cardContainer = document.querySelector('.cards-container')
            cardContainer.appendChild(createCard(element))
        });
    }
  })

function createCard(data){

    //create the elements
    const card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        img = document.createElement('img'),
        name = document.createElement('span')

    //set the classes 
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    //append the children
    card.appendChild(headline)
    card.appendChild(author)
    imgContainer.appendChild(img)
    card.appendChild(imgContainer)
    card.appendChild(name)

    //set content
    headline.textContent = data['headline']
    img.src = data['authorPhoto']
    name.textContent = "By " + data['authorName']


    return card

}