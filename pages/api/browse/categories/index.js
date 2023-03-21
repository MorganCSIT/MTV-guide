import { connect, model, models, Schema } from "mongoose"
const connectionString = process.env.MONGODB_URI


export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method: ", req.method);
    console.log("connectionString:", connectionString);


    if (req.method === 'GET') {
        const docs = await Category.find()
        res.status(200).json(docs)
    } else if (req.method === 'POST') {
        const doc = await Category.create(req.body)
        res.status(201).json(doc)
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}



const categorySchema = new Schema(
    {
        name: String,
    },
    { strict: false }
);

const Category = models?.category || model('categories', categorySchema);