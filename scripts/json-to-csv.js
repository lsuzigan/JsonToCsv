function fillCsv(csv) {
    document.getElementById('csv').value = csv
    console.log(csv)
}

function convertJson(json) {
    const parsedJson = JSON.parse(json) //object with the parsed json
    fillCsv(parsedJson)
}

const submit = document.querySelector('button[send]')
submit.onclick = function(event) {
    event.preventDefault()

    const json = document.getElementById('json').value
    convertJson(json)
}