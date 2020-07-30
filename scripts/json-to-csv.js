function fillCsv(csv) {
    document.getElementById('csv').value = csv
}

function convertJson(json) {
    let headLine = ''
    let rowLine = ''
    let rows = ''
    let csv = ''

    const parsedJson = JSON.parse(json) //array of objects
    for (let i in parsedJson[0]) {
        headLine += '"' + i + '",'
    }

    headLine = headLine.slice(0, -1)
    headLine += '\r\n'
    console.log(`'${headLine}'`)

    for (let i = 0; i < parsedJson.length; i++) {
        rowLine = ''
        for (let j in parsedJson[i]) {
            rowLine += '"' + parsedJson[i][j] + '",'
        }
        rowLine = rowLine.slice(0, -1)
        rowLine += '\r\n'
        rows += rowLine
        console.log(rows)
    }

    csv = headLine + rows
    console.log(csv)
    fillCsv(csv)
}

const submit = document.querySelector('button[send]')
submit.onclick = function(event) {
    event.preventDefault()
    const json = document.getElementById('json').value
    convertJson(json)
}