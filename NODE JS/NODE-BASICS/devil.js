const fs = require('fs');
const axios = require('axios')


const writeFiledata = () => {
    fs.writeFile('metadata/datas.txt', 'data', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('file created and date is written');
        }
    })
}



const readFiledata = () => {
    fs.readFile('metadata/json-data.txt', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var jsondata = data.toString()
            // console.log(jsondata);

            setTimeout(() => {
                appendFiledata(jsondata)
            }, 4000);
        }
    })


}



const appendFiledata = (jsondata) => {

    fs.appendFile('metadata/datas.txt', jsondata, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(' date is written');
        }
    })
}

fs.exists('metadata', (exists) => {
    if (!exists) {
        fs.mkdir('metadata', (err) => {
            if (err) {
                console.log(err);
            } else {
                writeFiledata();
                console.log('file present');
            }
        })
    } else {
        writeFiledata();
        readFiledata()

    }
})