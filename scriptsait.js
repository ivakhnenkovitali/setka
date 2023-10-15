const towns=[{
   id:1, name:'Gomel'
},

    {
        id:1, name:'Gomel',img:'гомель.jpg'
    },
    {
        id:2, name:'Loev' ,img:'лоев.jpg'
    },
    {
        id:3, name:'Branch' ,img:'ветка.jpg'
    },
    {
        id:4, name:'Yurovichi',img:'юровичи.jpg'
    },
    {
        id:5, name:'Chechersky',img:'чечерск.jpg'
    },
    {
        id:6, name:'Red Coast',img: 'красная гора.jpg'
    },
    {
        id:7, name:'Tours',img: 'туров.jpg'
    },
    {
        id:8, name:'Rechitsa',img: 'речица.jpg'
    },
    {
        id:9, name:'Mozyr',img: 'мозыр.jpg'
    },
]

let listTown = document.querySelector('.listTown')
for (let i = 0; i < towns.length; i++) {
    listTown.innerHTML += `<li>${towns[i].name}</li>`
}
console.log(towns[1].img)
document.querySelector('.item_2').innerHTML=`<img src=img/${towns[1].img}>`

console.log(towns[2].img)
document.querySelector('.item_2').innerHTML=`<img src=img/${towns[2].img}>`

console.log(towns[3].img)
document.querySelector('.item_3').innerHTML=`<img src=img/${towns[3].img}>`









