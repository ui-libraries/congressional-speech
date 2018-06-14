const mysql = require('mysql')
const SQL = require('sql-template-strings')
const _ = require('lodash')
const escape_quotes = require('escape-quotes')
const escapeJSON = require('escape-json-node')
const fs = require('fs')
let dir = '/Users/mtbutler/Desktop/json-to-mysql/json/'

let connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : 'congress'
})

fileList = fs.readdirSync(dir)

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  _.forEach(fileList, (file) => {
    console.log(file)
    let speechList = fs.readFileSync(dir + file)
    let speeches = JSON.parse(speechList)

    _.forEach(speeches, (sample) => {
      let speaker_state = sample['speaker_state'][0]
      let congress = Number(sample['congress'][0])
      let origin_url = sample.origin_url[0]
      let the_order = sample.order[0]
      let chamber = sample.chamber[0]
        let speaking = ""

      
      
      _.forEach(sample.speaking, (chunk) => {
        speaking += escapeJSON(chunk)
      })

      speaking = escapeJSON(speaking)

      let speaker_party = sample.speaker_party[0]
      let bills

      if (sample.bills.length > 0) {
        bills = sample.bills[0]
      } else {
        bills = ""
      }

      let pages = sample.pages[0]
      let speaker_raw = sample.speaker_raw[0]
      let speaker_first = sample.speaker_first[0]
      let speaker_last = sample.speaker_last[0]
      let title = sample.title[0]
      let number = Number(sample.number[0])
      let volume = Number(sample.volume[0])
      let session = Number(sample.session[0])
      let capitolwords_url = sample.capitolwords_url[0]
      let date = sample.date[0]
      let bioguide_id = sample.bioguide_id[0]
      let origin_id = sample.id[0]

      let query = SQL`INSERT INTO speeches (speaker_state, congress, origin_url, the_order, chamber, speaking, speaker_party, bills, pages, speaker_raw, speaker_first, speaker_last, title, number, volume, session, capitolwords_url, date, bioguide_id, origin_id) VALUES (${speaker_state}, ${congress}, ${origin_url}, ${the_order}, ${chamber}, ${speaking}, ${speaker_party}, ${bills}, ${pages}, ${speaker_raw}, ${speaker_first}, ${speaker_last}, ${title}, ${number}, ${volume}, ${session}, ${capitolwords_url}, ${date}, ${bioguide_id}, ${origin_id})`
      connection.query(query)    
    })  
  })  
})

