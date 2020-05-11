const URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"
const cardSelector = document.querySelector('#cards')
let data = []
let cont = 1;

async function dataFecth(){
    return await fetch(URL).
    then(async (res) =>  
        await res.json()
    )
}

function renderCards(data) {
    document.querySelector('#cards').innerHTML = ''
    data.map(renderCard)
}

function renderCard(card) {
    const rowHtml = document.createElement('div')
    const cardHtml = document.createElement('div')
    console.log(cont);
    if (cont == 1) {
        rowHtml.className = 'row'
        rowHtml.innerHTML =`
            <div class="card-deck">  
            
            </div>`;    
        
        cardSelector.appendChild(rowHtml)        

        cardHtml.className = 'card bg-light'
        cardHtml.innerHTML =`
            <img class="card-img-top" src="${card.photo}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">${card.property_type}</p>
            </div>
            <div class="card-footer">
                <p class="card-text">R$ ${card.price} / por dia</p>
            </div>`;

        cardSelector.lastElementChild.querySelector(".card-deck").appendChild(cardHtml)
        cont++;
    }
    else {
        cardHtml.className = 'card bg-light'
        cardHtml.innerHTML =`
                <img class="card-img-top" src="${card.photo}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">${card.property_type}</p>
                </div>
                <div class="card-footer">
                    <p class="card-text">R$ ${card.price} / por dia</p>
                </div>`;   
        
        cardSelector.lastElementChild.querySelector(".card-deck").appendChild(cardHtml)
        cont++;
    }

    if(cont == 4){
        cont = 1;
    }

}


async function main() {
    data = await dataFecth()
    console.log(data)
    if (data){
        renderCards(data)
    }
}

main();