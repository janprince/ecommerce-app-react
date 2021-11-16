
// Simulates a database of products.

const Products =[
    // Nike
    {name: "Air Zoom Pegasus 38", price: "130", type: "Nike", images:[
        require("../assets/product-images/nike/air-zoom-pegasus-38/air-zoom-pegasus(1).png"),
        require("../assets/product-images/nike/air-zoom-pegasus-38/air-zoom-pegasus(2).png"),
        require("../assets/product-images/nike/air-zoom-pegasus-38/air-zoom-pegasus(3).png")
    ]},

    {name: "Air Jordan 3 Retro", price: "155", type: "Nike", images:[
        require("../assets/product-images/nike/air-jordan-retro-3/air-jordan-retro-3(1).png"),
        require("../assets/product-images/nike/air-jordan-retro-3/air-jordan-retro-3(2).png"),
        require("../assets/product-images/nike/air-jordan-retro-3/air-jordan-retro-3(1).png")
    ]},

    {name: "Lebron Witness 6", price: "145", type: "Nike", images:[
        require("../assets/product-images/nike/lebron-witness-6/lebron-witness-6(1).png"),
        require("../assets/product-images/nike/lebron-witness-6/lebron-witness-6(2).png"),
        require("../assets/product-images/nike/lebron-witness-6/lebron-witness-6(3).png")
    ]},

    {name: "Air Max 97", price: "150", type: "Nike", images:[
        require("../assets/product-images/nike/air-max-97/air-max-97(1).png"),
        require("../assets/product-images/nike/air-max-97/air-max-97(3).png"),
        require("../assets/product-images/nike/air-max-97/air-max-97(2).png")
    ]},

    {name: "Air Force 1 Crater", price: "105", type: "Nike", images:[
        require("../assets/product-images/nike/air-force-1-mens/air-force-1-crater(1).png"),
        require("../assets/product-images/nike/air-force-1-mens/air-force-1-crater(2).png"),
        require("../assets/product-images/nike/air-force-1-mens/air-force-1-crater(3).png")
    ]},

    {name: "Air Max 95", price: "145", type: "Nike", images:[
        require("../assets/product-images/nike/air-max-95/air-max-95(1).png"),
        require("../assets/product-images/nike/air-max-95/air-max-95(2).png"),
        require("../assets/product-images/nike/air-max-95/air-max-95(3).png")
    ]},

    {name: "Air Max 270", price: "199", type: "Nike", images:[
        require("../assets/product-images/nike/air-max-270/air-max-270(1).png"),
        require("../assets/product-images/nike/air-max-270/air-max-270(2).png"),
        require("../assets/product-images/nike/air-max-270/air-max-270(3).png")
    ]},

    {name: "Free Metcon 4", price: "140", type: "Nike", images:[
        require("../assets/product-images/nike/free-metcon-4/free-metcon-4(1).png"),
        require("../assets/product-images/nike/free-metcon-4/free-metcon-4(2).png"),
        require("../assets/product-images/nike/free-metcon-4/free-metcon-4(3).png")
    ]},

    {name: "Jordan Delta 2 SP", price: "160", type: "Nike", images:[
        require("../assets/product-images/nike/jordan-delta-2-sp/jordan-delta-2-sp(1).png"),
        require("../assets/product-images/nike/jordan-delta-2-sp/jordan-delta-2-sp(2).png"),
        require("../assets/product-images/nike/jordan-delta-2-sp/jordan-delta-2-sp(3).png")
    ]},

    {name: "Air Monarch IV", price: "170", type: "Nike", images:[
        require("../assets/product-images/nike/air-monarch-iv/air-monarch-iv(1).png"),
        require("../assets/product-images/nike/air-monarch-iv/air-monarch-iv(2).png"),
        require("../assets/product-images/nike/air-monarch-iv/air-monarch-iv(3).png")
    ]},

    // Puma
    {name: "RS-Z", price: "110", type: "Puma", images:[
        require("../assets/product-images/puma/rs-z/RS-Z(1).png"),
        require("../assets/product-images/puma/rs-z/RS-Z(2).png"),
        require("../assets/product-images/puma/rs-z/RS-Z(3).png")
    ]},

    {name: "RS-Dreamer", price: "190", type: "Puma", images:[
        require("../assets/product-images/puma/rs-dreamer/rs-dreamer(1).png"),
        require("../assets/product-images/puma/rs-dreamer/rs-dreamer(2).png"),
        require("../assets/product-images/puma/rs-dreamer/rs-dreamer(3).png")
    ]},

    {name: "Suede Classic XXI", price: "300", type: "Puma", images:[
        require("../assets/product-images/puma/suede-classic-xxi/Suede-Classic-XXI(1).png"),
        require("../assets/product-images/puma/suede-classic-xxi/Suede-Classic-XXI(2).png"),
        require("../assets/product-images/puma/suede-classic-xxi/Suede-Classic-XXI(3).png")
    ]},

    {name: "Fuse Training", price: "170", type: "Puma", images:[
        require("../assets/product-images/puma/fuse-training/FUSE-Training(1).png"),
        require("../assets/product-images/puma/fuse-training/FUSE-Training(2).png"),
        require("../assets/product-images/puma/fuse-training/FUSE-Training(3).png")
    ]},

    {name: "RS-FAST", price: "300", type: "Puma", images:[
        require("../assets/product-images/puma/rs-fast/rs-fast(1).png"),
        require("../assets/product-images/puma/rs-fast/rs-fast(2).png"),
        require("../assets/product-images/puma/rs-fast/rs-fast(3).png")
    ]},

    {name: "RS-FAST", price: "300", type: "Adidas", images:[
        require("../assets/product-images/puma/rs-fast/rs-fast(1).png"),
        require("../assets/product-images/puma/rs-fast/rs-fast(2).png"),
        require("../assets/product-images/puma/rs-fast/rs-fast(3).png")
    ]},

    {name: "Free Metcon 4", price: "140", type: "New Balance", images:[
        require("../assets/product-images/nike/free-metcon-4/free-metcon-4(1).png"),
        require("../assets/product-images/nike/free-metcon-4/free-metcon-4(2).png"),
        require("../assets/product-images/nike/free-metcon-4/free-metcon-4(3).png")
    ]},

    {name: "Jordan Delta 2 SP", price: "160", type: "Adidas", images:[
        require("../assets/product-images/nike/jordan-delta-2-sp/jordan-delta-2-sp(1).png"),
        require("../assets/product-images/nike/jordan-delta-2-sp/jordan-delta-2-sp(2).png"),
        require("../assets/product-images/nike/jordan-delta-2-sp/jordan-delta-2-sp(3).png")
    ]},

    {name: "Air Monarch IV", price: "170", type: "New Balance", images:[
        require("../assets/product-images/nike/air-monarch-iv/air-monarch-iv(1).png"),
        require("../assets/product-images/nike/air-monarch-iv/air-monarch-iv(2).png"),
        require("../assets/product-images/nike/air-monarch-iv/air-monarch-iv(3).png")
    ]},

    {name: "Air Max 270", price: "199", type: "Adidas", images:[
        require("../assets/product-images/nike/air-max-270/air-max-270(1).png"),
        require("../assets/product-images/nike/air-max-270/air-max-270(2).png"),
        require("../assets/product-images/nike/air-max-270/air-max-270(3).png")
    ]},

    {name: "Free Metcon 4", price: "140", type: "Adidas", images:[
        require("../assets/product-images/nike/free-metcon-4/free-metcon-4(1).png"),
        require("../assets/product-images/nike/free-metcon-4/free-metcon-4(2).png"),
        require("../assets/product-images/nike/free-metcon-4/free-metcon-4(3).png")
    ]},

    {name: "Jordan Delta 2 SP", price: "160", type: "New Balance", images:[
        require("../assets/product-images/nike/jordan-delta-2-sp/jordan-delta-2-sp(1).png"),
        require("../assets/product-images/nike/jordan-delta-2-sp/jordan-delta-2-sp(2).png"),
        require("../assets/product-images/nike/jordan-delta-2-sp/jordan-delta-2-sp(3).png")
    ]},

    {name: "Air Monarch IV", price: "170", type: "Adidas", images:[
        require("../assets/product-images/nike/air-monarch-iv/air-monarch-iv(1).png"),
        require("../assets/product-images/nike/air-monarch-iv/air-monarch-iv(2).png"),
        require("../assets/product-images/nike/air-monarch-iv/air-monarch-iv(3).png")
    ]},
    
]

export default Products;