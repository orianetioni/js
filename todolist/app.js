const inputText = document.getElementById('item');
const addBtn = document.getElementById('submit');
const list = document.getElementById('list');
const txtSuccess = document.getElementById('lblsuccess')

let editItem= null;

window.onload = () => {
    addBtn.addEventListener('click',addItem);
    list.addEventListener('click',removeItem);
};

function toggleButton(ref, btnID) {
    /*
     *
     * 
     */
  }
function addItem(e){
    e.preventDefault();
    if(inputText.value == ""){
        txtSuccess.innerHTML ="Pas possible d'ajouter une tâche vide !";
       

    }else{
        let item =document.createElement('li');
        li.textContent = inputText.value;
       

        let btnEdit = document.createElement('input');
        btnEdit.value =('EDIT');
        btnEdit.classList.add('btn');
        btnEdit.classList.add('btn-sucess');
        btnEdit.type = 'button';
        
        let btnDelete = document.createElement('input');
        btnDelete.value = ('DELETE');
        btnDelete.classList.add('btn');
        btnDelete.classList.add('btn');
        btnDelete.type = 'buton';

        let txt = document.createElement('p');
        txt.innerHTML = inputText.value ;

        item.append(btnEdit);
        item.append(btnDelete);
        item.append(btnDelete);

        list.append(item);
        //en cours de recherche

    }
}
 function removeItem() {
            /*
             *
             *
             */
          }












