
let flowerArr = [
    { flower: 'rose', color: 'red' },
    { flower: 'sunflower', color: 'yellow' },
    { flower: 'marigold', color: 'yellow' },
    { flower: 'lotus', color: 'pink' },
    { flower: 'lily', color: 'white' },
    { flower: 'orchid', color: 'purple' },
    { flower: 'hibiscus', color: 'red' },
];

let redFlowers = [];
for (let i = 0; i < flowerArr.length; i++) {
    if (flowerArr[i].color === 'red') {
        redFlowers.push(flowerArr[i]);
    }
}
// console.log(redFlowers);

let isRedFlower = flower => flower.color === 'red';
let redFlowers1 = flowerArr.filter(isRedFlower);
// console.log(redFlowers1);

let filterArrOfObjs = (arrOfObjs, filterFunc) => {
    return arrOfObjs.filter(filterFunc);
}

filterArrOfObjs(
    flowerArr, 
    flower => flower["color"] === "red"
)

