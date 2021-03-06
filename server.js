
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      Twit = require('twit'),
      config = require('./config')
var   serveStatic = require('serve-static');

const PORT = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
    app.use(bodyParser.json())

// adding the lines for cors so that incoming connection are handled properly 
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });



app.use(serveStatic(__dirname + "/dist"));



let dataurl = [],
    imgUrl= [],
    originaldata= [],
    temp = "news",
    query = "";

const 
    tobject = config.twitkeys; // Your API Keys  ##############
    const T = new Twit(tobject);

    

app.get('/data', (req, res)=>{
    let search = req.query.search || false;
    async function sendata(){
        if(!!search){
            let result = await getMemes(search);
            await res.send(result);
        }
        else{
            res.send(originaldata);
        }
    }
    sendata();
})

const flatenarr = (error) =>{
        if(!error){
            const newarray = Array.from(dataurl);
            let copy = newarray.map( (tweet,index, arr) => {
                if(!!tweet.extended_entities && !tweet.possibly_sensitive){
                    return{
                    id: tweet.id + Math.floor(Math.random() * (index) + (index + 10)),
                    text: tweet.full_text,
                    url: tweet.extended_entities.media[0].media_url,
                    }
                }
            });
            imgUrl = copy.filter((element)=>{if(!null){ return element }});
            if(originaldata.length === 0){
                originaldata = imgUrl;
            }
        }
        else if(error){
            imgUrl = [];
            console.log(error);
        }
  };


const resultpromise = ()=>{
    return (data) => {
    if(data.data.statuses.length === 0){
        throw `error${max_id}`;
    }
    dataurl.push(...data.data.statuses);
    max_id = data.data.statuses[data.data.statuses.length - 1].id;
    }
};
const promise = () => {
    return ()=>{
    if(max_id){
        return T.get(
        'search/tweets', 
            {q: query, count: 100, max_id: max_id, tweet_mode:"extended", result_type:"mixed", lang:"en" }
        )}
    }
}

async function getMemes(text){
        dataurl = [];
        query = `${text} filter:media -filter:retweets`;
        await T
        .get(
            'search/tweets', 
            {q: query, count: 100 , tweet_mode:"extended", result_type:"mixed", lang:"en" }
        )
        .then(resultpromise())
        .then(promise())
        .then(resultpromise())
        .then(promise())
        .then(resultpromise())
        .then(promise())
        .then(resultpromise())
        .then(()=>{
            flatenarr()
        })
        .catch((error)=>{
            // console.log(error);
            flatenarr(error)
        })

        return await imgUrl;
};

getMemes(temp);




app.listen(PORT);
console.log('server started '+ PORT);