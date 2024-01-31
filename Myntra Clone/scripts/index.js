let bagItems;
onLoad()

function onLoad(){
    
    itemStr = localStorage.getItem('bagitem')
    bagItems = itemStr ? JSON.parse(itemStr) : [];
    displayBagIcon();
    displayitems();
}




function addToBag (ItemId){
    bagItems.push(ItemId);
    localStorage.setItem('bagitem', JSON.stringify(bagItems))
    displayBagIcon()
}

function displayBagIcon(){
    let bagCount = document.querySelector(".bag-item-count");
    if (bagItems.length > 0){ 
        bagCount.style.visibility = 'visible';    
        bagCount.innerText = bagItems.length;
    }else {
        bagCount.style.visibility = 'hidden';
    }   
}


function displayitems() {
        let itemsContainer = document.querySelector(".items-container");
        if(!itemsContainer){
            return;
        }
    let innerHTML = '';
    items.forEach((item) => {
        innerHTML += 
        `<div class="item-container">  
        <img class="item-image" src="${item.image}" alt="item-image" />
        <div class="rating">
            <span> ${item.rating.stars} ⭐️ | </span>
            <span> ${item.rating.count}</span>
        </div>
        <p class="company">${item.company}</p>
        <p class="item-name">${item.item_name}</p>
        <div class="price-container">
            <span class="current-price">Rs. ${item.current_price}</span>
            <span class="original-price">Rs. ${item.original_price}</span>
            <span class="discount">${item.discount_percentage}% OFF</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`
    })
    itemsContainer.innerHTML = innerHTML;
}
