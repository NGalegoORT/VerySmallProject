export const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL || 'http://localhost:1337'


export async function getStrapiData(url: string){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}${url}`);
        if(!response.ok){
        console.error(`HTTP error! status ${response.status}`);
        return null;
        }
        const data = await response.json()
        console.log(data)
        return data
    } catch(error){
        console.error('Error fetching data: ',  error);
        return null
    }
}