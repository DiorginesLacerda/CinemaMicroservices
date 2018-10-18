const test = require('tape');

const mongodb = require('./mongodb');

function runTests(){
    test('MongoDB Connection',(t)=>{
        mongodb.connect((err,db)=>{
            t.assert(!err && db,"Connection succeed")
            t.end()
        })
    })

    test("MongoDB Disconnect",(t)=>{
        t.assert(mongodb.disconnect(),"Disconnected succeessfully")
        t.end()
    })
}

module.exports = { runTests}