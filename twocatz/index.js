const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    async function getcatpic() {
        const resp = await fetch("https://cataas.com/cat/cute/says/Bitcamp",{
            method: 'GET'
        });
    
        let data = await resp.arrayBuffer();
        // we need to receive it as a buffer since this is an image we are receiving from the API
        // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob
        var base64data = Buffer.from(data).toString('base64')
        
        return base64data
    }

    function getnames() {
        var names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"]
        var random_value = Math.floor(names.length * Math.random())
        var resultname = names[random_value]
        return resultname
    }
    
    var firstcat = await getcatpic();
    var secondcat = await getcatpic();
    var name1 = getnames();
    var name2 = getnames();


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { 
            cat1: firstcat,
            cat2: secondcat,
            names: [name1, name2]
        }
    };
}