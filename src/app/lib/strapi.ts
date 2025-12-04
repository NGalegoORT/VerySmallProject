import qs from 'qs';

export const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL || 'http://localhost:1337'



const mainSite = qs.stringify({
  "populate": {
    "layout": {
      "on": {
        "layout.hero-section": {
          "fields": ["id", "heading", "subHeading"],
          "populate": {
            "image": {
              "fields": ["url"]
            }
          }
        },
        "component.card": {
          "fields": ["id", "title", "description", "autor"],
          "populate": {
            "image": {
              "fields": ["url"]
            }
          }
        },
        "component.in-line": {
          "fields": ["id", "title", "subTitle"]
        },
        "layout.fila":{
          "populate": {
            "fila": {
              "fields":["id", "title", "subTitle"]
            }
            }
          }
        },
      }
    },
    "carusel": {
      "on": {
        "component.carrousel": {
          "fields": ["id", "title"],
          "populate": {
            "image": {
              "fields": ["url"]
            }
          }
        }
      }
    },
    "Sitios": {
      "on": {
        "component.sitios": {
          "populate": {
            "sitioUno": {
              "fields": ["id", "nombre", "alt", "href", "description"],
              "populate": {
                "image": {
                  "fields": ["url"]
                }
              }
            }
          }
        }
      }
    }
  }
)

export async function getLayout(){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}/api/la-universidads?${mainSite}`);
        if(!response.ok){
        console.error(`HTTP error! status ${response.status}`);
        return null;
        }
        const data = await response.json()
        const layout =data.data[0].layout
        return layout
    } catch(error){
        console.error('Error fetching data: ',  error);
        return null
    }
}


const sideSite = qs.stringify({
  "populate": {
    "layout": {
      "on": {
        "layout.hero-section": {
          "fields": ["id", "heading", "subHeading"],
          "populate": {
            "image": {
              "fields": ["url"]
            },
            "link": {
              "fields": ["href", "label", "isExternal"]
            }
          }
        },

        "component.card": {
          "fields": ["id", "title", "description", "autor"],
          "populate": {
            "image": {
              "fields": ["url"]
            }
          }
        },

        "component.in-line": {
          "fields": ["id", "title", "subTitle"]
        },

        "layout.fila": {
          "populate": {
            "fila": {
              "fields": ["id", "title", "subTitle"]
            }
          }
        },

        "layout.formulario": {
          "fields": ["id", "title", "descripcion", "email"],
          "populate": {
            "campo": {
              "fields": ["nameField", "placeHolder"]
            },
            "link": {
              "fields": ["href", "label", "isExternal"]
            }
          }
        }
      }
    },

    "carusel": {
      "on": {
        "component.carrousel": {
          "fields": ["id", "title"],
          "populate": {
            "image": {
              "fields": ["url"]
            }
          }
        }
      }
    },

    "Sitios": {
      "on": {
        "component.sitios": {
          "populate": {
            "sitioUno": {
              "fields": ["id", "nombre", "alt", "href", "description"],
              "populate": {
                "image": {
                  "fields": ["url"]
                }
              }
            }
          }
        }
      }
    }
  }
}
)

export async function getSideSite(){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}/api/la-universidads?${sideSite}`);
        if(!response.ok){
        console.error(`HTTP error! status ${response.status}`);
        return null;
        }
        const data = await response.json()
        const carusel =data.data[0].carusel
        return carusel
    } catch(error){
        console.error('Error fetching data: ',  error);
        return null
    }
}

//Prueba de Datos de FORMULARIO!!!!
const testResponse = qs.stringify({
  "populate": {
    "layout": {
      "on": {
        "layout.hero-section": {
          "fields": ["id", "heading", "subHeading"],
          "populate": {
            "image": {
              "fields": ["url"]
            },
            "link": {
              "fields": ["href", "label", "isExternal"]
            }
          }
        },

        "component.card": {
          "fields": ["id", "title", "description", "autor"],
          "populate": {
            "image": {
              "fields": ["url"]
            }
          }
        },

        "component.in-line": {
          "fields": ["id", "title", "subTitle"]
        },

        "layout.fila": {
          "populate": {
            "fila": {
              "fields": ["id", "title", "subTitle"]
            }
          }
        },

        "layout.formulario": {
          "fields": ["id", "title", "descripcion", "email"],
          "populate": {
            "campo": {
              "fields": ["nameField", "placeHolder"]
            },
            "link": {
              "fields": ["href", "label", "isExternal"]
            }
          }
        }
      }
    },

    "carusel": {
      "on": {
        "component.carrousel": {
          "fields": ["id", "title"],
          "populate": {
            "image": {
              "fields": ["url"]
            }
          }
        }
      }
    },

    "Sitios": {
      "on": {
        "component.sitios": {
          "populate": {
            "sitioUno": {
              "fields": ["id", "nombre", "alt", "href", "description"],
              "populate": {
                "image": {
                  "fields": ["url"]
                }
              }
            }
          }
        }
      }
    }
  }
}
)

export async function getTestResp(){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}/api/la-universidads?${testResponse}`);
        if(!response.ok){
        console.error(`HTTP error! status ${response.status}`);
        return null;
        }
        const data = await response.json()
        const layout =data.data[0].layout
        return layout
    } catch(error){
        console.error('Error fetching data: ',  error);
        return null
    }
}
//--------------------------------------------

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

export async function getDataCardLine(url: string){
    try{
        const response = await fetch(`${STRAPI_BASE_URL}${url}`);
        if(!response.ok){
        console.error(`HTTP error! status ${response.status}`);
        return null;
        }
        const data = await response.json()
        const layout = data.data[0].layout; //IMPORTANTE PARA EL LAYOUT
        const filtrado = layout.filter(item => item.__component === "component.in-line")
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