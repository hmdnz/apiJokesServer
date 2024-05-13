// server.js

const http = require("http");
const url = require("url");
const querystring = require("querystring");

let db = [
  {
    id: 1,
    title: "Funny Joke 1",
    comedian: "Comedian A",
    year: 2020,
  },
  {
    id: 2,
    title: "Hilarious Joke 2",
    comedian: "Comedian B",
    year: 2018,
  },
  {
    id: 3,
    title: "Laugh-out-loud Joke 3",
    comedian: "Comedian C",
    year: 2022,
  },
  {
    id: 4,
    title: "Side-Splitting Joke 4",
    comedian: "Comedian D",
    year: 2019,
  },
  {
    id: 5,
    title: "Rib-Tickling Joke 5",
    comedian: "Comedian E",
    year: 2021,
  },
  {
    id: 6,
    title: "Gut-Busting Joke 6",
    comedian: "Comedian F",
    year: 2020,
  },
  {
    id: 7,
    title: "Knee-Slapping Joke 7",
    comedian: "Comedian G",
    year: 2017,
  },
  {
    id: 8,
    title: "Belly-Laughing Joke 8",
    comedian: "Comedian H",
    year: 2016,
  },
  {
    id: 9,
    title: "Jaw-Dropping Joke 9",
    comedian: "Comedian I",
    year: 2018,
  },
  {
    id: 10,
    title: "Tear-Jerking Joke 10",
    comedian: "Comedian J",
    year: 2023,
  },
  {
    id: 11,
    title: "Guffaw-Inducing Joke 11",
    comedian: "Comedian K",
    year: 2022,
  },
  {
    id: 12,
    title: "Chuckle-Worthy Joke 12",
    comedian: "Comedian L",
    year: 2020,
  },
  {
    id: 13,
    title: "Snicker-Worthy Joke 13",
    comedian: "Comedian M",
    year: 2019,
  },
  {
    id: 14,
    title: "Smirk-Inducing Joke 14",
    comedian: "Comedian N",
    year: 2021,
  },
];

const server = http.createServer((req, res) => {
  const { method, url: reqUrl } = req;
  const parsedUrl = url.parse(reqUrl);
  const { pathname, query } = parsedUrl;

  if (method === "GET" && pathname === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(db));
  } else if (method === "GET" && pathname.startsWith("/joke/")) {
    const jokeId = parseInt(pathname.split("/")[2]);
    const joke = db.find((j) => j.id === jokeId);
    if (joke) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(joke));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Joke not found" }));
    }
  } else if (method === "POST" && pathname === "/") {
    // POST handler
  } else if (method === "PATCH" && pathname.startsWith("/joke/")) {
    // PATCH handler
  } else if (method === "DELETE" && pathname.startsWith("/joke/")) {
    // DELETE handler
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
})
