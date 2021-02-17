const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 3000;

const agents = require('../json-data/agents.json');
const logs = require('../json-data/logs.json');
const resolution = require('../json-data/resolution.json');

function arrToObject(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr.identifier] = curr;
    return acc;
  }, {})
};

const agentsObj = arrToObject(agents);
const resolutionsObj = arrToObject(resolution);
const mappedLogs = logs.map(log => {
  const resolution = resolutionsObj[log.identifier].resolution;
  const agent = agentsObj[log.agentIdentifier];
  const agentName = `${agent.firstName} ${agent.lastName}`;
  return { ...log, resolution, agentName };
});

app.get('/summary', (req, res) => {
  const summary = mappedLogs.reduce((acc, curr) => {
    const last = curr;
    if (!acc[curr.number]) {
      acc[curr.number] = { callCount: 1, last };
    } else {
      acc[curr.number].callCount++;
      acc[curr.number].last;
    }
    return acc;
  }, {})
  res.json(summary);
});

app.get('/agent/:id', (req, res) => {
  const { id } = req.params;
  const result =  mappedLogs.filter(log => log.agentIdentifier === id);
  res.json(result);
})  

app.get('/call/:number', (req, res) => {
  const { number } = req.params;
  const result =  mappedLogs.filter(log => log.number === number);
  res.json(result);
})  

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})