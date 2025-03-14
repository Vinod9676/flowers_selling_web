const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "White chrysanthemum",
    price: 119,
    colors: [
      {
        code: "White",
        img: "./flowers/white_bgremoved.png",
      },
    ],
  },
  {
    id: 2,
    title: "pink chrysanthemum",
    price: 149,
    colors: [
      {
        code: "pink",
        img: "./flowers/perfect_pink.png",
      },
    ],
  },
  {
    id: 3,
    title: "Red chrysanthemum",
    price: 109,
    colors: [
      {
        code: "Red",
        img: "./flowers/Red_Chrysanthemum-removebg.png",
      },
      
    ],
  },
  {
    id: 4,
    title: "Yellow chrysanthemum",
    price: 129,
    colors: [
      {
        code: "Yellow",
        img: "./flowers/yellow (1).png",
      },
    ],
  },
  {
    id: 5,
    title: "Purple chrysanthemum",
    price: 99,
    colors: [
      {
        code: "purple",
        img: "./flowers/purple.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
