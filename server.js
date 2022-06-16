const express = require('express')
const app = express()
const cors = require('cors')
const e = require('express')
const PORT = 8000

app.use(cors())

const race = {
    'dwarf': {
        'raceName' : 'Dwarves',
        'age' : 'Live to about 350 years old',
        'size' : 'Between 5 and 5 feet tall',
        'speed' : '25 feet'
    },
    'elf': {
        'raceName' : 'Elves',
        'age' : 'Live to about 750 years old',
        'size' : 'Range from under 5 to over 6 feet tall',
        'speed' : '30 feet'
    },
    'halfling': {
        'raceName' : 'Halflings',
        'age' : 'Lives into the middle of their second century',
        'size' : 'Average of 3ft',
        'speed' : '25 feet'
    },
    'human': {
        'raceName' : 'Humans',
        'age' : 'Less than a century',
        'size' : 'Between barely 5 feet to well over 6 feet tall',
        'speed' : '30 feet'
    },
    'dragonborn': {
        'raceName' : 'Dragonborn',
        'age' : 'Live to be around 80 years old',
        'size' : 'Well over 6 feet',
        'speed' : '30 feet'
    },
    'gnome': {
        'raceName' : 'Gnomes',
        'age' : 'Can live 350 to 500 years',
        'size' : 'Between 3 and 4 feet tall',
        'speed' : '25 feet'
    }
    // 'half-elf': {
    //     'raceName' : 'Humans',
    //     'age' : 'Earth',
    //     'size' : 'image link',
    //     'speed' : 'image link'
    // },
    // 'half-orc': {
    //     'raceName' : 'Humans',
    //     'age' : 'Earth',
    //     'size' : 'image link',
    //     'speed' : 'image link'
    // },
    // 'tiefling': {
    //     'raceName' : 'Humans',
    //     'age' : 'Earth',
    //     'size' : 'image link',
    //     'speed' : 'image link'
    // }
}

app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:raceName', (req, res) => {
    const aliensName = req.params.raceName.toLowerCase()
    if(race[raceName]){
        res.json(race[raceName])
    } else {
        res.json(race['humans'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running')   
})