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


export async function getDataUniversidad(url: string){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}${url}`);
        if(!response.ok){
        console.error(`HTTP error! status ${response.status}`);
        return null;
        }
        const data = await response.json()
        const layout = data.data[0].layout;
        //console.log(layout);
     return layout
    } catch(error){
        console.error('Error fetching data: ',  error);
        return null
    }
}

export async function getAutoresData(url: string){
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