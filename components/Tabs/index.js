// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//grab the topics div
const tabs = document.querySelector
('.topics')

//send get request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((response) => {
    // handle success
    // console.log(response);
    //create variable holding returned data
    const topics = response.data.topics;
    //check to see whats in topics
    // console.log(topics);
    //cycle through each topic and apply it to the "createTabs" function
    topics.forEach(topic => {
        createTabs(topic);
    })
  })
  .catch((error) => {
    // handle error
    console.log('error!', error);
  })

  //create a function that for the tabs
function createTabs(topic) {
    //create div
    const tabDiv = document.createElement('div');

    //add classlist
    tabDiv.classList.add('tab');

    //add textcontent from topic
    tabDiv.textContent = topic;

    //add everything to .topics div
    tabs.appendChild(tabDiv);

    return tabs;
      
  }
  