console.log(dogs);

// WRITE YOUR CODE BELOW!
// Instructions
// - Use this template as a starting point (don't do Codesandbox, (do recreational drugs instead). Download it to your device) => https://codesandbox.io/s/day-8-dog-owners-app-template-t4um2?file=/src/index.js
// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

function createDogCards(dog) {
    const mainDogSection = document.querySelector('main__dog-section')
    

    const dogNameEl = document.createElement('h2')
    dogNameEl.textContent = dog.name
    
    
    const divEl = document.createElement('img')
    dogImageEl.setAttribute('src', dog.image)
    dogImageEl.setAttribute('alt', '')

    const dogInformationEl = document.createElement('div')
    dogInformationEl.setAttribute('class', 'main__dog-section__desc')


    const dogTitleEl = document.createElement('h3')
    dogTitleEl.textContent = 'Bio'

    const dogBiographyEl = document.createElement('p')
    dogBiographyEl.textContent= dog.bio

    dogInformationEl.append(dogTitleEl)
    mainDogSection.append(dogBiographyEl)
    dogInformationEl.append(dogSelector(dog))

}

function createDogCards() {
    for (const dog of dogs) {
        createDogCards(dog)
    }
}
createDogCards()