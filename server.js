
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      Twit = require('twit');
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
    temp = "dhoni",
    query = "",
    tobject = { 
        consumer_key:         'JVXJ5L7963GEa5EM9IKNPd3iQ',
        consumer_secret:      'vSd4uL6qrGFhTnw2v0VjFhIPatHfoy2gti5W28jGcuKoEXM2Ei',
        access_token:         '519379540-MgU49G2LXZ0xp4nJMpdXyQMyhNycqt9mKJn3aKB4',
        access_token_secret:  'b6Q4dTKSkcMXLsNd0XE2PxodyXifGS3sGxs7NrbsdoE0V',
        timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    },
    T = new Twit(tobject);

    

app.get('/data', (req, res)=>{
    let search = req.query.search || false;
    async function sendata(){
        if(!!search){
            let result = await getMemes(search);
            await res.send(result);
        }
        else{
            res.send(imgUrl);
        }
    }
    sendata();
})

const flatenarr = (error) =>{
        if(!error){
            const newarray = Array.from(dataurl);
            console.log(newarray[0].entities.media[0].media_url);
            let ans;
            let x ;
            // imgUrl = newarray.filter( (tweet,index) => {
            //     // ans = (!!e.entities.media.length && !e.possibly_sensitive) ? true : false;
            //     // x = e.extended_entities.media[0].media_url;
            //     if(true){
            //         return{
            //         id: tweet.id + Math.floor(Math.random() * (index) + (index + 10)),
            //         text: tweet.full_text,
            //         url: tweet.entities.media.media_url,
            //         }
            //     }
            // });
            let copy  = newarray.map((tweet,index) => {
                // ans = (!!e.entities.media.length && !e.possibly_sensitive) ? true : false;
                // x = e.extended_entities.media[0].media_url;        
                if(index === 1){
                    console.log(tweet);
                }            
                    imgUrl.push(
                        [id= tweet.id + Math.floor(Math.random() * (index) + (index + 10)),
                        text= tweet.full_text ,
                        url = tweet.entities.media.media_url]
                        );
            })
        }
        else if(error){
            console.log(error);
        }
  };


const resultpromise = ()=>{
    return (data) => {
    if(data.data.statuses.length === 0){
        throw `error${max_id}`;
    }
    let result = JSON.stringify(data.data.statuses)
    dataurl.push(...result);
    max_id = result[data.data.statuses.length - 1].id;
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
            console.log(error);
        })
        return await imgUrl;
};

getMemes(temp);




app.listen(PORT);
console.log('server started '+ PORT);