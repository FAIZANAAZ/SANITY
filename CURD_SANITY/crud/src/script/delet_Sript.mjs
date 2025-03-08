import { createClient } from 'next-sanity'



export const client = createClient({
  projectId:"ym7opmom",
  dataset:"production",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skJr34soS02INpdcCmxZolXxSR62PFkI58SNqn836WyYwhfqDqfpCrI0nRql5AVbpqsSd70opcvtd7hWuvAWp8vUBwcJIvnFA6KMRsOwExYsYKaDRi7frOGgz01z3BNIh7NtYQUIYWlexMxcWFtIIomur7NHnaKNQ6HLeBT48b6LbC4UCIwC",
})

const getData = async () => {
    const response = await client.fetch(`*[_type=="name"]{name,_id}`)
    return response
}

async function SanityDeleteData(){
   const data= await getData()
//    console.log(data);

for (const item of data){
    const response = await client.delete(item._id)
    console.log(response)
}
   
}
SanityDeleteData()