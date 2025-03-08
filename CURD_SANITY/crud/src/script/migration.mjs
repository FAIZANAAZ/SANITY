import { createClient } from 'next-sanity'



export const client = createClient({
  projectId:"ym7opmom",
  dataset:"production",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skJr34soS02INpdcCmxZolXxSR62PFkI58SNqn836WyYwhfqDqfpCrI0nRql5AVbpqsSd70opcvtd7hWuvAWp8vUBwcJIvnFA6KMRsOwExYsYKaDRi7frOGgz01z3BNIh7NtYQUIYWlexMxcWFtIIomur7NHnaKNQ6HLeBT48b6LbC4UCIwC",
})



// kioky ye ak scripthe to wo direct otha nhi pata token wagera tohm direct likhengy
const sanityCreateData = async () => {
 try {
    const response = await fetch('http://localhost:3000/api/user')
    const data = await response.json()
    // if (data){
    //     console.log(data);
    // }else{
    //     console.log('No data found',"😎");
    // }
    // for checking data

   for (let i = 0; i < data.length; i++) {
    const result =await client.create({
        _type:"name",
        name:data[i].name
    })
    console.log(result);
    
   }
 } catch (error) {
    console.log(error);
    
 }
    
}
sanityCreateData()