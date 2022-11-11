const place = document.getElementById('exp-place');
const date = document.getElementById('exp-date');
const price = document.getElementById('exp-price');
const addBtn = document.querySelector('.add-expense');

addBtn.addEventListener('click', function(){
   let table = `<tr>
                    <td> ${place.value} </td> 
                    <td> ${date.value} </td> 
                    <td> ${price.value} </td>
                </tr>`;
    document.querySelector('.bd').innerHTML+=table;
})