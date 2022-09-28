var result = [];

document.getElementById('input-file')
    .addEventListener('change', getFile)

function getFile(event) {
    const input = event.target
    if ('files' in input && input.files.length > 0) {
        placeFileContent(document.getElementById('content-target'), input.files[0])
    }
}

function placeFileContent(target, file) {
    readFileContent(file).then(content => {
        convertProxy(content)
        result.pop();
        let format = result.toString().replaceAll(",", "\n");
        target.value = format
    }).catch(error => console.log(error))
}

function readFileContent(file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(file)
    })
}

function convertProxy(proxy) {
    const array = proxy.replaceAll(/\s/g,'').split(",").map(String);

    array.map(element => {
        let el = element.split(":")
        const px = `${el[2]}:${el[3]}@${el[0]}:${el[2]}`;
        result.push(px);
    })
}

function copy() {
    let textarea = document.getElementById("content-target");
    textarea.select();
    document.execCommand("copy");
}