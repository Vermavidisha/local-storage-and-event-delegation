const addItems=document.querySelector('.add-items');

const plantslist =document.querySelector('.plates');
const items =JSON.parse(localStorage.getItem('items'))||[];
function addItem(e){
    e.preventDefault()
   const text=(this.querySelector('[name=item]')).value;
    const item={
        text,
        done:false
    };
    items.push(item);
    populateList(items,plantslist)
    localStorage.setItem('items',JSON.stringify(items));
    this.reset();
}
   function toggleDown(e){
        if (!e.target.matches('input')) return
        const el = e.target;
        const index=el.dataset.index;
        items[index].done =!items[index].done;
        localStorage.setItem('items',JSON.stringify(items));
        populateList(items,itemsList);
      }
      
      function populateList(items =[], platesList){
        platesList.innerHTML = items.map((plate, index) => {
            return `
      <li>
        <input type="checkbox" data-index="${index}" id="item${index}"  checked="false" />
        <label for="item${index}">${plate.text}</label>
      </li>
    `;
  }).join('')
}
addItems.addEventListener('submit',addItem);

itemsList.addEventListener('click',toggleDone);

populateList(items,itemsList);

