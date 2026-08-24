

async function fetchWithTimeout(url: string, timeoutMs: number): Promise<Response> {
    const timeout = new Promise<never>((resolve, reject) => {

    setTimeout(() => reject(new Error("Request timed out")), timeoutMs);
  });
  return Promise.race([fetch(url), timeout]);

}

fetchWithTimeout("https://jsonplaceholder.typicode.com/users", 1000)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err.message));
