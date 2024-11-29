export const createPoll = async(values)=>{
try {
    const response = await fetch("http://localhost:3000/polls",{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    })
    if(response.ok){
        const data = await response.json()
        return data
    }
} catch (error) {
    console.log(error)
}
}