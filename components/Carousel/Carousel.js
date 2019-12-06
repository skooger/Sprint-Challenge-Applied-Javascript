/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let imageNames = ['mountains.jpeg', 'computer.jpeg', 'trees.jpeg', 'turntable.jpeg']
console.log('this file is being executed')

function createCarousel(data){

   //create the elements
   const carousel = document.createElement('div'),
        leftBtn = document.createElement('div'),
        rightBtn = document.createElement('div')
   let imgContainer = []
   for(let i = 0; i < 4; i++){

    imgContainer.push(document.createElement('img'))

   }
   console.log(imgContainer)
    //set the classes 
    carousel.classList.add('carousel')
    leftBtn.classList.add('left-button')
    rightBtn.classList.add('right-button')

    //append the children
    carousel.appendChild(leftBtn)

    for(let i = 0; i < imgContainer.length; i++){

      carousel.appendChild(imgContainer[i])

    }

    carousel.appendChild(rightBtn)

    //set content
    leftBtn.textContent = " < "
    rightBtn.textContent = " > "
    for(let i = 0; i < imgContainer.length; i++){

      imgContainer[i].src = `./assets/carousel/${data[i]}`
      console.log(imgContainer[i].src)
    }


    return carousel

}

let carouselContainer = document.querySelector('.carousel-container')
createCarousel(imageNames)
carouselContainer.appendChild(createCarousel(imageNames))