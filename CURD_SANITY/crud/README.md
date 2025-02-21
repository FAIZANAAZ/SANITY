<!-- sbsy phly hm sanity sy mngwaty hen phir bhejty hen-->
(1)make schema 
  example:
          import { title } from "process";

export const data={
  
    title: "Name",
    name: "name",
    type: "document",
    fields: [
      {
        title: "Name",
        name: "name",
        type: "string",
      }
    ]

  }


(2)make function in src/service/sanitydata.ts

 ***import { client } from "@/sanity/lib/client"


export const sanityFetch = async () => {
    const response = await client.fetch(`*[_type=="name"]{name,_id}`)
    console.log(response);
    
    return response
}

**wesy to hm sbko hi laygy name wagera jiskoi zarorat hogi abhi bs id isi liye lay taky cheq kr sken hm ke data gya he sanity prya nhi console krky 

(3)wha pr function ko chala jha hm mngwa rhy hen component me 

  ***** 
  interface IName{
  name:string,
  _id:string}
  
   const [namesArray, setNamesArray] = useState<IName[]>([]);
  

  useEffect(() => {
    const getData = async () => {
      const response = await sanityFetch()
      setNamesArray(response)
    }
  
    getData()
   
  }, [])

  phir map lgadengy wo a jayga nazr wb prlekindata base sanity r nhi jayga osko hm create sy krwaygy 
  
<!-- KAM KO SANITY PR BHEJNY KE LIYE  -->

(1)create fun in src/service/sanitydata.ts same file me hi bnygy sb fun crud ke 

***
export const sanityCreateData = async () => {
    const response = await client.create({ _type: "name", name: "faiza" })
    // abhi stodio ka rout nhi chlra isi liye direct name  kry hen wrna hm parameter ke zariye laygy or osko fun me bhejengy lekin type name hi rhy gi iska matlb ye he ke schema me jo type he name ki osmy hm bhjery hen
    console.log(response);
    
    return response
}
****
(2)fun ko chala jha hm mngwa rhy hen component me 