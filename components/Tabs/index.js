// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function (response) {
    // handle success
    let responseArr = response['data']['topics']
    
    responseArr.forEach(element => {
        
        let topicContainer = document.querySelector('.topics')
        topicContainer.appendChild(createTab(element))
    });

  })


  function createTab(data){

    //create the elements
    const tab = document.createElement('div')

    //set the classes 
    tab.classList.add('tab')

    //set content
    tab.textContent = data

    return tab

  }