//Fullfilled

import { MongoClient } from "mongodb";

const URI = "mongodb+srv://albertoolv00:B3b3t010%40@cluster0.i3iyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);