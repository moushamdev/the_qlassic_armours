const flavorlists = [
  {
    name: "Classic Cotton",
    color: "brown",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Streetwear Fit",
    color: "red",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Casual & Linen",
    color: "blue",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Signature Cotton Wear",
    color: "orange",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Premium Knitwear",
    color: "white",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Elite Cotton Wear",
    color: "black",
    rotation: "md:rotate-[8deg] rotate-0",
  },
];

const nutrientLists = [
  { label: "Designs", amount: "245+" },
  { label: "Orders", amount: "500+" },
  { label: "Clients", amount: "176+" },
  { label: "Collections", amount: "5+" },
  { label: "Studios", amount: "1" },
];

const cards = [
  {
    src: import.meta.env.BASE_URL + "videos/f1.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: import.meta.env.BASE_URL + "images/p1.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: import.meta.env.BASE_URL + "videos/f2.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: import.meta.env.BASE_URL + "images/p2.png",
  },
  {
    src: import.meta.env.BASE_URL + "videos/f3.mp4",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: import.meta.env.BASE_URL + "images/p3.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: import.meta.env.BASE_URL + "videos/f4.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: import.meta.env.BASE_URL + "images/p4.png",
    translation: "translate-y-[5%]",
  },
  {
    src: import.meta.env.BASE_URL + "videos/f5.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: import.meta.env.BASE_URL + "images/p5.png",
  },
  {
    src: import.meta.env.BASE_URL + "videos/f6.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: import.meta.env.BASE_URL + "images/p6.png",
    translation: "translate-y-[5%]",
  },
  {
    src: import.meta.env.BASE_URL + "videos/f7.mp4",
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: import.meta.env.BASE_URL + "images/p7.png",
    translation: "translate-y-[10%]",
  },
];

export { flavorlists, nutrientLists, cards };
