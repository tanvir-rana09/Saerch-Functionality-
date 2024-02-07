let product = {
    data: [
        {
            productname: "Black Cap",
            catagory: "cap",
            productprice: "130$",
            image: "black-cap.jpg",
            rating: 4.9
        },
        {
            productname: "Blue Alarm",
            catagory: "watch",
            productprice: "150$",
            image: "blue-alarm.jpg",
            rating: 4.9
        },
        {
            productname: "checkered-shirt",
            catagory: "shirt",
            productprice: "10$",
            image: "checkered-shirt.jpg",
            rating: 4.9
        },
        {
            productname: "classic-clock",
            catagory: "watch",
            productprice: "150$",
            image: "classic-alarm-clock.jpg",
            rating: 4.9
        },
        {
            productname: "jacket",
            catagory: "jacket",
            productprice: "130$",
            image: "jacket.jpg",
            rating: 4.9
        },
        {
            productname: "red jackets",
            catagory: "jacket",
            productprice: "150$",
            image: "jackets-display (1).jpg",
            rating: 4.9
        },
        {
            productname: "blue jackets",
            catagory: "jacket",
            productprice: "130$",
            image: "jackets-display.jpg",
            rating: 4.9
        },
        {
            productname: "black-sneaker",
            catagory: "shoe",
            productprice: "130$",
            image: "one-black-sneaker.jpg",
            rating: 4.9
        },
        {
            productname: "white-sneaker",
            catagory: "shoe",
            productprice: "130$",
            image: "one-white-sneake.jpg",
            rating: 4.9
        },
        {
            productname: "white-cap.jpg",
            catagory: "cap",
            productprice: "13$",
            image: "white-cap.jpg",
            rating: 4.9
        },
    ],
}

for (const i of product.data) {
    let card = document.createElement('div');
    card.classList.add('card', i.catagory, 'hide');

    let image = document.createElement('img')
    image.setAttribute('src', i.image)
    image.classList.add('image');
    card.appendChild(image)

    let details = document.createElement('div');
    details.classList.add('details');

    let name = document.createElement('h5');
    name.classList.add('name')
    name.innerText = i.productname.toUpperCase();

    let price = document.createElement('h5');
    price.innerText = i.productprice;
    let rating = document.createElement('h5');
    rating.innerText = i.rating;

    details.appendChild(name);
    details.appendChild(price);
    details.appendChild(rating);
    card.appendChild(details);
    document.querySelector('.products').appendChild(card)
}

let cards = document.querySelectorAll('.card');
let names = document.querySelectorAll('.name');
let buttons = document.querySelectorAll('.filter');
let searchbtn = document.getElementById('searchbtn');
let search = document.getElementById('search').value;



const filterProduct = (value) => {

    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add('active')
        }
        else {
            button.classList.remove('active')
        }
    })

    cards.forEach((card) => {
        if (value == 'all') {
            card.classList.remove('hide')
        }
        else {
            if (card.classList.contains(value)) {
                card.classList.remove('hide')
            }
            else {
                card.classList.add('hide')
            }
        }
    })
};


// document.getElementById('searchbtn').addEventListener('click',()=>{
//     let searchInput= document.getElementById('search').value;
//     let productName = document.querySelectorAll('.name');
//     let cards = document.querySelectorAll('.card');

//     productName.forEach((element,index)=>{
//         if (element.innerText.includes(searchInput.toUpperCase())) {
//             cards[index].classList.remove('hide');
//         }
//         else{
//             cards[index].classList.add('hide');
//         };
//     });
// });


document.getElementById('searchbtn').addEventListener('click', () => {
    
    let cards = document.querySelectorAll('.card');
    let names = document.querySelectorAll('.name');
    let search = document.getElementById('search').value;

    names.forEach((element, index) => {
        if (element.innerText.includes(search.toUpperCase())) {
            cards[index].classList.remove('hide')
            console.log(search)
        }
        else {
            cards[index].classList.add('hide')
            console.log(search)
        };

    });
});

window.onload = () => {
    filterProduct('all')
}
