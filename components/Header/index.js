// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector('.header-container');

function Header() {
    //creat variables to label created elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    //append elements to header div
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    //give elements class names
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    
    //give elements text content
    title.textContent = 'Lambda Times';
    temp.textContent = '98';
    date.textContent = 'SMARCH 28, 2019';

    //make sure it looks right in console
    // console.log(header);
    
    //return the created header variable and all the new content appended to it
    return header;
}

//add the header to the .header-container
headerContainer.appendChild(Header());
