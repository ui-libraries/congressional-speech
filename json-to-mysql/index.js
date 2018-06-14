const mysql = require('mysql')
const SQL = require('sql-template-strings')
const _ = require('lodash')

let connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
})
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  let sample = {
    "speaker_state": ["CA"],
    "speaker_first": ["David"],
    "congress": [111],
    "title": ["WAIVING REQUIREMENT OF CLAUSE 6(a) OF RULE XIII WITH RESPECT TO CONSIDERATION OF CERTAIN RESOLUTIONS"],
    "origin_url": ["http://origin.www.gpo.gov/fdsys/pkg/CREC-2009-12-16/html/CREC-2009-12-16-pt1-PgH14986-2.htm"],
    "number": [191],
    "order": [11],
    "volume": [155],
    "chamber": ["House"],
    "session": [1],
    "id": ["CREC-2009-12-16-pt1-PgH14986-2.chunk11"],
    "speaking": ["Madam Speaker, our friend from Maine is absolutely right. This is a very, very challenging time for people who are dealing with the economic downturn through which we have suffered, and it is essential that we do a number of the things that are before us today.", "The national security of the United States of America is priority number one. I always argue that the five most important words in the middle of the preamble of the U.S. Constitution are ``provide for the common defense.'' I say that, Madam Speaker, because if you think about the issues with which we regularly contend here, nearly all of them can be done either by an individual, within a family, within a church or community, a city, a county, or a State level of governing, but our national defense can only be handled by the Federal Government. So I will acknowledge it is very, very important for us to ensure that our men and women in uniform have what they need. And I will acknowledge that as we deal with the economic downturn, ensuring that people have job opportunities is a very, very, very important priority for us.", "I happen to think that we have gone in the exact opposite direction when it comes to the notion of encouraging long-term private sector job creation and economic growth. I believe that we should deal with that issue in a bipartisan way. And when I say bipartisan, I'm referring to two Presidents in the last half century; one is John F. Kennedy, the other Ronald Reagan. John F. Kennedy, when we were dealing with economic challenges in the early 1960s, decided very clearly that the best way to get the economy back on track, the best way to encourage private sector job creation and economic growth was to do what? Bring about broad, marginal tax rate reduction, reducing the top rate on capital gains and taking the top rate on job creators, men and women who are out there working to create more and more opportunity for their fellow Americans.", "Well, Madam Speaker, that kind of plan was put into place in the early 1960s with a Democratic Congress and a Democratic President of the United States. And guess what happened? During the decade of the 1960s, we saw a doubling of the flow of revenues to the Federal Treasury because of the heralded John F. Kennedy tax cuts; again, a Democratic President and a Democratic Congress.", "Rush forward from the early 1960s to the early 1980s, two decades. I was privileged to be a Member of the 97th Congress which convened in January of 1981. We were dealing with very, very serious economic problems, some of which were even more challenging than exist today. In the early 1980s, people will recall that interest rates were well into double digits, we had an unemployment rate that dramatically exceeded where we are today, and if you look at the overall challenge, it was similar. How did we deal with that, Madam Speaker? We dealt with it by doing, under Ronald Reagan, exactly what President John Kennedy, a great Democratic President, did. Under Ronald Reagan, we saw broad reductions across the board of marginal tax rates, we saw a reduction in the capital gains rate.", "And what happened? As we encouraged those job creators out there in our economy, what happened, Madam Speaker, was we saw, again, a doubling of the flow of revenues to the Federal Treasury and we saw good, long-term private sector jobs created.", "Now, the thing that is most troubling about what it is that we are doing is, while we have seen--I am really happy to see this reduction of 10.2 percent to 10 percent, the unemployment rate; it's a positive sign. The problem is that it's not private sector job creation; what we are seeing is public sector job creation.", "I will acknowledge that infrastructure spending is important. I represent the Los Angeles Basin, and we have very serious infrastructure problems. And so I recognize that government does have an appropriate role in dealing with infrastructure, and jobs are created when we put resources into infrastructure. I will acknowledge that.", "But if you look at the other areas, when the President had his job summit the other day, we had a meeting of Republicans. One of the economists who participated was Kevin Hassett of the American Enterprise Institute, and he provided us with an amazing number. He said that he had his staff at AEI, the American Enterprise Institute, sit down and look at the challenge of the entire nearly $1 trillion in stimulus spending. He said, Tell me what would happen if we were to have taken that entire stimulus bill and just hired people.", "Well, his staff came up with the following conclusion, Madam Speaker. He reported to us that if you look at the average wage rate in the United States, it's $37,000 a year. That's the average wage rate across the country. If we were to take the entire stimulus bill and simply hire people, guess how many jobs would be created? I was stunned when Mr. Hassett reported to us that that number is 21 million. And when you look at how the stimulus dollars have been expended, we obviously haven't created that many jobs, Madam Speaker. But the fact is, if we were to take all of those resources and just hire people at the average wage rate across the United States of America, it would be 21 million jobs that would have been created.", "That is not the way to deal with the challenge of the economic downturn. The way to deal with it is to encourage long-term private sector job creation and economic growth. That is why, when we look at these priorities and the urgency of dealing with the challenges that exist today, that is what we should be doing.", "Now, as Ms. Foxx has appropriately said, Madam Speaker, we are here with a virtually unprecedented scenario before us. First, this rule gives something that according to our staff has not happened before, and that is, it gives the Chair the authority to just, without any action by the Members of the House, adjourn the House. That is a troubling sign. And it is troubling but not terribly surprising based on what we have seen over the past 3 years since we had first unveiled to us a document known as ``A New Direction for America.'' This was the proposal that was put forward by the now-Speaker of the House, who was then minority leader. And as minority leader, she was very concerned.", "And I will acknowledge, having done a less than perfect job in my position as chairman of the House Rules Committee, I am proud of what our work product was, but I could have done better, and I will acknowledge that freely here. But it's interesting to note what ``A New Direction for America'' actually had. I would like to just share a couple of brief lines from that, if I might, Madam Speaker.", "It says, Bills should be developed following full hearings and open subcommittee and committee markups, with appropriate referrals to other committees. Members should have at least 24 hours to examine a bill prior to consideration at the subcommittee level. Bills should generally come to the floor under a procedure that allows open, full, and fair debate.", "I am going to repeat that, Madam Speaker. It says, Bills should come to the floor under a procedure that allows open, full, and fair debate consisting of a full amendment process that grants the minority the right to offer its alternatives, including a substitute.", "Members should have at least 24 hours to examine bill and conference report text prior to floor consideration. Rules governing floor debate must be reported before 10 p.m. for a bill to be considered the following day.", "Now, Madam Speaker, as we know, virtually all of that has been thrown out the window.", "The other thing that is unprecedented--and I mentioned this in the Rules Committee when I confirmed it with our staff--to my knowledge, this is the first session ever to go through the entire session of Congress without any bill being considered under an open rule. I know that my friend from Maine was there upstairs when I raised this issue, and I hope very much that she does have an opportunity soon, because as we've talked about--and this bill that is coming before us is an appropriations bill--again, for the first time ever we had the appropriations process shut down, shut down, denying Members an opportunity to offer amendments. Never before in the history of the Republic has that taken place, and we now have, unfortunately, seen that.", "But as we prepare to extend Christmas and Hanukkah greetings to our colleagues and our friends across the country, it is very unfortunate that we have now--if we do in fact see today as the last day of the first session of this Congress--an entire session without any open rules.", "I will tell you that there are many people on the Rules Committee who work long and hard to deal with challenges. We, as Ms. Foxx said, met into the evening last night, and then we were here at 7:30 this morning.", "One of our Rules Committee staff members, Shane Chambers, who has worked long and hard, is getting ready to leave. I would like to say, Madam Speaker, how much I appreciate his work. He and his wife and new baby are moving to Dallas, Texas. I am sure that he will have an opportunity--even with a new baby--to get more rest than he does as a staff member on the House Rules Committee. But I would like to express appreciation to those staff members on both sides of the aisle who do work long and hard to address these challenges.", "I am going to urge my colleagues to join in voting ``no'' on this rule because I believe that we can do better. This is not the appropriate way, and it is not what was promised to the American people."],
    "capitolwords_url": ["http://capitolwords.org/date/2009/12/16/H14986-2_waiving-requirement-of-clause-6a-of-rule-xiii-with/"],
    "speaker_party": ["R"],
    "date": ["2009-12-16"],
    "bills": {},
    "bioguide_id": ["D000492"],
    "pages": ["H14986-H14991"],
    "speaker_last": ["Dreier"],
    "speaker_raw": ["mr. dreier"]
  }
  let speaker_state = sample['speaker_state'][0]
  let congress = Number(sample['congress'][0])
  let origin_url = sample.origin_url[0]
  let the_order = sample.order[0]
  let chamber = sample.chamber[0]
  let speaking = ""
  
  _.forEach(sample.speaking, (chunk) => {
    speaking += chunk
  })

  let speaker_party = sample.speaker_party[0]
  let bills

  if (sample.bills.length > 0) {
    bills = sample.bills[0]
  } else {
    bills = " "
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




  let fart = "dooits"
  //console.log(`${speaker_state},\n ${congress},\n ${origin_url},\n ${order},\n ${chamber},\n ${speaking},\n ${speaker_party},\n ${bills},\n ${pages},\n ${speaker_raw},\n ${speaker_first},\n ${speaker_last},\n ${title},\n ${number},\n ${volume},\n ${session},\n ${capitolwords_url},\n ${date}, ${bioguide_id},\n ${origin_id}`)
  let query = SQL`INSERT INTO speeches (speaker_state, congress, origin_url, the_order, chamber, speaking, speaker_party, bills, pages, speaker_raw, speaker_first, speaker_last, title, number, volume, session, capitolwords_url, date, bioguide_id, origin_id) VALUES (${speaker_state}, ${congress}, ${origin_url}, ${the_order}, ${chamber}, ${speaking}, ${speaker_party}, ${bills}, ${pages}, ${speaker_raw}, ${speaker_first}, ${speaker_last}, ${title}, ${number}, ${volume}, ${session}, ${capitolwords_url}, ${date}, ${bioguide_id}, ${origin_id})`
  //let query = SQL`INSERT INTO speeches (speaker_state, congress, origin_url, order, chamber, speaking, speaker_party, bills, pages, speaker_raw, speaker_first, speaker_last, title, number, volume, session, capitolwords_url, date, bioguide_id, origin_id) VALUES ("IA", 3, "http://uiowa.edu", "4", "House", "butler", "R", "H.R. 3396", "4", "nice guy", "matthew", "butler", "mr. doolittle", 4, 5, 3, "http://google.com", "2018-05-19", "A000014", "dunno")`

  //let query = SQL`INSERT INTO test (pages, speaker_first) VALUES (${order}, ${fart})`
  connection.query(query)
})

// KNOWN GOOD QUERY!
//INSERT INTO speeches (`speaker_state`, `congress`, `origin_url`, `order`, `chamber`, `speaking`, `speaker_party`, `bills`, `pages`, `speaker_raw`, `speaker_first`, `speaker_last`, `title`, `number`, `volume`, `session`, `capitolwords_url`, `date`, `bioguide_id`, `origin_id`) VALUES ("IA", 3, "http://uiowa.edu", "4", "House", "butler", "R", "H.R. 3396", "4", "nice guy", "matthew", "butler", "mr. doolittle", 4, 5, 3, "http://google.com", "2018-05-19", "A000014", "dunno")