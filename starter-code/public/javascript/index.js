const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
      .then(characters => {
				console.log('TCL: characters', characters)
      })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(id)
      .then(character => {
        console.log('Character: ', character);
      })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(id)
    .then(res => {
      console.log("Result: ", res)
    })  
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    let character = {
      id: document.getElementById('edit-character-form').elements.item(0).value,
      name: document.getElementById('edit-character-form').elements.item(1).value,
      occupation: document.getElementById('edit-character-form').elements.item(2).value,
      weapon: document.getElementById('edit-character-form').elements.item(3).value,
      isAcartoon: document.getElementById('edit-character-form').elements.item(4).checked, 
    }
    charactersAPI.updateOneRegister(character)
      .then(res => {
        console.log("Result: ", res)
      })  
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();
    let character = {
      name: document.getElementById('new-character-form').elements.item(0).value,
      occupation: document.getElementById('new-character-form').elements.item(1).value,
      weapon: document.getElementById('new-character-form').elements.item(2).value,
      isAcartoon: document.getElementById('new-character-form').elements.item(3).checked, 
    }
    charactersAPI.createOneRegister(character)
      .then(res => {
        console.log("Result: ", res)
      })        
  }
})
