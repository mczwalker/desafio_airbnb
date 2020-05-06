
async function requisitar(){
const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
const r = await fetch(url);
const json = await r.json();



const c = (elemento)=>{
    return document.querySelector(elemento);
}


json.map((item)=>{
    let acomodacaoItem = c('.modelo .item-acomodacao').cloneNode(true);
    
    acomodacaoItem.querySelector('.item-acomodacao-foto img').src=item.photo;
    acomodacaoItem.querySelector('.item-acomodacao-tipo').innerHTML = item.property_type;
    acomodacaoItem.querySelector('.item-acomodacao-descricao').innerHTML = '<strong>'+item.name+'</strong>';    
    acomodacaoItem.querySelector('.item-acomodacao-preco').innerHTML = 'R$ ' + item.price.toFixed(2)+'/noite';

    c('.exibe-acomodacao').append(acomodacaoItem);
});

}


//pizzaItem.querySelector('.pizza-item--price').innerHTML = 'R$ ' + item.price.toFixed(2);
//pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;