// let's create some local review data
// array of objects
const reviews = [
    {
        id:1,
        name: "Johnny Depp",
        job: "web developer",
        img: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum exercitationem, unde doloremque alias dolor amet nesciunt. Amet nobis sed non, esse doloremque quidem sunt ipsum omnis voluptates consequuntur modi nisi?",
    },

    {
        id: 2,
        name: "Brad Pitt",
        job: "Graphics Designer",
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },

    {
        id: 3,
        name: "Tom Cruise",
        job: "Product designer",
        img: "https://images.unsplash.com/photo-1524854859347-bd2f42367134?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        text: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.",
    },

    {
        id: 4,
        name: "Christian Bale",
        job: "Senior developer",
        img: "https://images.unsplash.com/photo-1528947684573-de3b0ddb6a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
    },
]

// getting items hold 
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

// gettting hold of all the buttons
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set starting review
let currentItem = 0;

// adding event listener on window object. 
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem)

})

// show person based on item 

function showPerson(){
    const item = reviews[currentItem]
    img.src = item.img;
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// show next person when clicked the button 
nextBtn.addEventListener('click', function(){
    currentItem ++
    // just to avoid going beyonf array length
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson()
})

// show previous person when clicked on pre button

prevBtn.addEventListener('click', function(){
    currentItem --
    // just to avoid going below array length
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson()
})

// to show a random review 
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length) 
    console.log(currentItem)
    showPerson()
})