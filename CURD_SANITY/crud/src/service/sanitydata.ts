import { client } from "@/sanity/lib/client"


export const sanityFetch = async () => {
    const response = await client.fetch(`*[_type=="name"]{name,_id}`)
    console.log(response);
    
    return response
}

export const sanityCreateData = async (name :string ) => {
    const response = await client.create({ _type: "name", name: name })
    // abhi stodio ka rout nhi chlra isi liye direct name  kry hen wrna hm parameter ke zariye laygy or osko fun me bhejengy lekin type name hi rhy gi iska matlb ye he ke schema me jo type he name ki osmy hm bhjery hen
    console.log(response);
    
    return response
}

export const sanityDeleteData = async (_id :string) => {
    const response = await client.delete(_id)
    // agr zada schema hongy to hm btaygy jesy oper btaya he ke konsy schema ki type me jana he
    
    console.log(response);
    
    return response
}

export const sanityUpdateData = async (_id :string,updatadeName :string) => {
    const response = await client.patch(_id).set({name:updatadeName}).commit()
    console.log(response);
    // best practice he ke schema ka name bhi btana he 1 sy zada hen ar schema taky wo confuse n HO
    return response
}