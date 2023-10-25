const express = require('express')
const cors = require('cors')
const elasticSearch = require('elasticsearch')

const app = express()
const port = 3000

const indexName = 'ruupaka'

const client = new elasticSearch.Client({
    host: 'http://localhost:9200',
})

app.use(express.json())
app.use(cors())

app.get('/getEmptyTable', (req, res) => {
    client.search({
        index: indexName, 
        body: {
            size: 300,
            query:{
                match: {
                    metaphor_count: "1"
                },
            },
        },
    }).then((response) => {
        res.json(response.hits.hits)
    }).catch((error)=>{
        res.status(500).json({ error: "Error retrieving search data" })
    })
})

app.get("/searchQuery", async (req, res) => {
    const sourceDomain = await req.query.source_domain
    const targetDomain = await req.query.target_domain
    const metaphorType = await req.query.metaphor_type_in_sinhala
    const poem = await req.query.poem_name_in_sinhala
    const poet = await req.query.poet_in_sinhala

    console.log(req.query)

    let searchQuery = {
        index: indexName,
        body: {
            size: 300,
            query: {
                bool: {
                    must: [],
                },
            },
        },
    }

    if (sourceDomain) {
        searchQuery.body.query.bool.must.push({
            match: {
                source_domain: sourceDomain
            }
        })
    }

    if (targetDomain) {
        searchQuery.body.query.bool.must.push({
            match: {
                target_domain: targetDomain
            }
        })
    }

    if (metaphorType) {
        searchQuery.body.query.bool.must.push({
            match: {
                metaphor_type_in_sinhala: metaphorType
            }
        })
    }

    if (poem) {
        searchQuery.body.query.bool.must.push({
            match: {
                poem_name_in_sinhala: poem
            }
        })
    }

    if (poet) {
        searchQuery.body.query.bool.must.push({
            match: {
                poet_in_sinhala: poet
            }
        })
    }

    if (searchQuery.body.query.bool.must.length === 0) {
        searchQuery.body.query = {
            match: {
                metaphor_count: "1"
            },
        }
    }

    console.log(searchQuery.json)
    client.search(searchQuery).then((response) => {
        res.json(response.hits.hits)
    }).catch((error) => {
        res.status(500).json({ error: "Error retrieving search data" })
    })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
