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
        //const carusel = data.data[0].carusel
        //const filtrado = carusel.filter(item => item.__component === "component.carrousel")

        const urls = data.data[0].carusel[0].image.map(img => img.url)


        return urls
    } catch(error){
        console.error('Error fetching data: ',  error);
        return null
    }
}


export async function getSitios(url: string) {
    try {
        const response = await fetch(`${STRAPI_BASE_URL}${url}`);
        if (!response.ok) {
            console.error(`HTTP error! status ${response.status}`);
            return null;
        }

        const data = await response.json();

        // Extraer solo los datos que necesitamos
        const sitios = data.data[0]?.Sitios?.[0]?.sitioUno?.map((sitio) => ({
            id: sitio.id,
            nombre: sitio.nombre,
            description: sitio.description,
            alt: sitio.alt,
            href: sitio.href,
            imageUrl: sitio.image?.url,  // Obtener el URL de la imagen
        })) || [];

        return sitios;

    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

/*
export async function getSitios(url: string){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}${url}`);
        if (!response.ok) {
            console.error(`HTTP error! status ${response.status}`);
            return null;
        }

        const data = await response.json();
        const primer = data.data

        //console.log("Respuesta completa:", JSON.stringify(data, null, 2));
        return JSON.stringify(primer, null, 2);

    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}


export async function getSitios(url: string){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}${url}`);
        if(!response.ok){
        console.error(`HTTP error! status ${response.status}`);
        return null;
        }
        const data = await response.json()
        //const sitios = data.data[0].Sitios || []
        return sitios
        //return data
    } catch(error){
        console.error('Error fetching data: ',  error);
        return null
    }
}
*/