import express, { json } from 'express';
import cors from 'cors';
import { Client } from 'elasticsearch';

const app = express();
const port = 3000;

const indexName = 'ruupaka'

const client = new Client({
    host: 'http://localhost:9200',
})

app.use(json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to Ruupaka')
})

app.get('/getAllMetaphors', (req, res) => {
    client.search({
        index: indexName, 
        body: {
            size: 300,
            query:{
                match_all: {},
            },
        },
    }).then((response) => {
        res.json(response.hits.hits)
    }).catch((error)=>{
        res.status(500).json({error: "Error retrieving all the data"})
    })
})

app.post('/searchByPoemName', async (req, res) => {
    const poem = await req.body.poem_name_in_sinhala;
    console.log(req.body)
    client.search({
        index: indexName,
        body: {
            size: 30,
            query: {
                match: {
                    'poem_name_in_sinhala': poem,
                }
            }
        }
    }).then((response) => {
        res.json(response.hits.hits)
    }).catch((error) => {
        res.status(500).send('Error retrieving target data')
    })
})

/*
app.post('/metaphorTypeSearch', async (req, res) => {
    const type = await req.body.metaphor_type_in_sinhala;
    console.log(req.body)
    client.search({
        index: indexName,
        body: {
            size: 30,
            query: {
                match: {
                    'metaphor_type_in_sinhala': type,
                }
            }
        }
    }).then((response) => {
        res.json(response.hits.hits)
    }).catch((error) => {
        res.status(500).send('Error retrieving data')
    })
})


app.post('/sourceSearch', async (req, res) => {
    const source = await req.body.source_domain
    // console.log(req.body)
    client.search({
        index: indexName,
        body: {
            size: 30,
            query: {
                match: {
                    'source_domain': source,
                }
            },
        }
    }).then((response) => {
        res.json(response.hits.hits)
    }).catch((error) => {
        res.status(500).send('Error retrieving source data')
    })
})

app.post('/targetSearch', async (req, res) => {
    const target = await req.body.target_domain;

    client.search({
        index: indexName,
        body: {
            size: 30,
            query: {
                match: {
                    'target_domain': target,
                }
            }
        }
    }).then((response) => {
        res.json(response.hits.hits)
    }).catch((error) => {
        res.status(500).send('Error retrieving target data')
    })
})
*/

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
