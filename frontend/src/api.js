import axios from 'axios';

async function fetchData(path) {
  let data;
  try {
    const host = process.env.VUE_APP_HOST;
    const result = await axios(`${host}/${path}`);
    data = result.data;
  } catch (err) {
    console.error(err);
  }
  return data;
}

export default fetchData;
