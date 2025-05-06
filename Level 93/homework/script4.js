// Promises and async/await

// 3 Examples

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
  });
  
  promise.then(result => console.log(result)); // "Done!"




  async function fetchData() {
    return "data received";
  }
  
  async function main() {
    let data = await fetchData();
    console.log(data); // "data received"
  }
  
  main();

  


  async function getData() {
    throw new Error("Oops!");
  }
  
  async function run() {
    try {
      await getData();
    } catch (e) {
      console.log(e.message); // "Oops!"
    }
  }
  
  run();
  