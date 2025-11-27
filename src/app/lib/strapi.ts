export const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL || 'http://localhost:1337'


export async function getStrapiData(url: string){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}${url}`);
        if(!response.ok){
        console.error(`HTTP error! status ${response.status}`);
        return null;
        }
        const data = await response.json()
        //console.log(data)
        return data
    } catch(error){
        console.error('Error fetching data: ',  error);
        return null
    }
}


export async function getDataCard(url: string){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}${url}`);
        if(!response.ok){
        console.error(`HTTP error! status ${response.status}`);
        return null;
        }
        const data = await response.json()
        const layout = data.data[0].layout; //IMPORTANTE PARA EL LAYOUT
        const filtrado = layout.filter(item => item.__component === "component.card")
        //console.log(layout);
     return filtrado
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
        //console.log(data)
        return data
    } catch(error){
        console.error('Error fetching data: ',  error);
        return null
    }
}

export async function getHeroSection(url: string){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}${url}`);
        if(!response.ok){
        console.error(`HTTP error! status ${response.status}`);
        return null;
        }
        const data = await response.json()
        const layout = data.data[0].layout; //IMPORTANTE PARA EL LAYOUT
        const filtrado = layout.filter(item => item.__component === "layout.hero-section")
        //console.log(layout);
     return filtrado
    } catch(error){
        console.error('Error fetching data: ',  error);
        return null
    }
}


export async function getCaruselData(url: string){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}${url}`);
        if(!response.ok){
        console.error(`HTTP error! status ${response.status}`);
        return null;
        }
        const data = await response.json()
        const carusel = data.data[0].carusel
        const filtrado = carusel.filter(item => item.__component === "component.carrousel")

        return filtrado
    } catch(error){
        console.error('Error fetching data: ',  error);
        return null
    }
}

