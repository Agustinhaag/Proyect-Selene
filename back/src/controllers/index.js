import pollModel from "../models/pollModel.js"

export const createPolls = async(req,res)=>{
try {
    const poll = req.body
    const response = await pollModel.create({question:poll.question, options:[{text:poll.option1}]})
    if(response){
        res.json(response).status(201)
    }

} catch (error) {
    console.log(error)
}
}

export const getPolls = async(req,res)=>{
try {
    const {id} = req.body
const poll = await pollModel.findById(id)
if(poll){
    res.json(poll).status(200)
}
} catch (error) {
    console.log(error)
}
}

export const registerVote = async(req,res)=>{
const {id} = req.body;
const response = await pollModel.findById(id)

}