let apis = [
  "https://i-dont-exist.com/api/v2",
  "https://httpstat.us/500/cors",
  "https://httpstat.us/404/cors",
  // returns the json {"code": 200, "description": "OK"}
  "https://httpstat.us/200/cors",
];

/**this is a new topic for me so ill write every step down explaning why and how
 * and the version that im submitting is refined to no to include messy parts which
 * will be pain to read
 * Sourses of information: 
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * I really hope that the result is whats required, i have a feeling that something is not fully complete
 */

// the function should be async to accomodate for Promise.allSettle
// Idea: traverse entries, get server responses and throw error if link is wrong "i-dont-exist.com"
//       use Promise Handling and Asynchronous Operations to ensure that  failed requests don’t break the process.
async function fetchAllAPIs(apiList) {
  const requests = apiList.map(
    (api) =>
        //
      fetch(api)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Eorror: ${response.status}`);
          }
          // spent alot of time on this line, all example were in the form response.json. which made me think this is the only way
          // in reality since there is nothgin besides 200 ok i only need responce
          return response;
        })
        .catch((err) => err) // If fetch fails, return undefined
  );
//as i understood this line will wait for fetch to finish all the operations with all entries and only after that 
//it will let the rest of the code proceed
  const results = await Promise.allSettled(requests);

  console.log(results); //for checking whats wrong

  results.forEach((result, index) => {
    //i only want to display teh fulfilled results, so i guess no need for the else case
    if (result.status === "fulfilled") {
      console.log(`API ${index + 1}:`, result.value);
    }
  });
}

fetchAllAPIs(apis);
