let resultsDiv = document.querySelector("#resultsDiv")
let zipForm = document.querySelector('#zipForm')
let zipField = document.querySelector('#zipField')
let zipUrl = 'https://api.zippopotam.us/us/'


zipForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let zip = zipField.value
    fetch('broken' + zipUrl + zip)
        .then((response) => {
            return response.json()
        }).then((parsedJsonResponse) => {
            resultsDiv.innerText = `Your place is: ${parsedJsonResponse['places'][0]['place name']}`
        }).catch(
            alert('API call not successful 👎🏻')
)
})

