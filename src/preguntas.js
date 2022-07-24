const preguntas = [
  {
    titulo: "¿Cuantos años tienes?",
    id:"pg1",
    tipopregunta:"input",
    respuesta: [
      { textarea: "" },
  
    ],
  },
  {
    titulo: "Cual fue la duracion de los sintomas en el ultimo episodio de tus migrañas en dias...?",
    id:"pg2",
    tipopregunta:"input",
    respuesta: [
      { textarea: "" },
    ],
  },
  {
    titulo: "¿Con que frecuencia tienes tus episodios al mes?",
    id:"pg3",
    tipopregunta:"input",
    respuesta: [
      {textarea: "" },
    ],
  },
  {
    titulo: "¿Como clasificarias tu dolor de cabeza 0 niguna , Unilatera 1, Bilateral 2)?",
    id:"pg4",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "Ninguna" , value:"0"},
      { textoRespuesta: "Unilateral", value:"1"},
      { textoRespuesta: "Bilateral", value:"2"},
   
    ],
  },

  {
    titulo: "¿Que caracteristica tiene tu dolor de cabeza Ningua 0 Palpitante 1 Constante 2",
    id:"pg5",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "Ninguna", value:"0" },
      { textoRespuesta: "Palpitante" , value:"1" },
      { textoRespuesta: "Constante" , value:"2" },

    ],
  },


  {
    titulo: "¿Que nivel de dolor de cabeza crees tener  (Ninguna - 0, Leve - 1, Media - 2, Severa - 3",
    id:"pg6",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "Ninguna", value:"0"  },
      { textoRespuesta: "Leve", value:"1" },
      { textoRespuesta: "Media" , value:"2" },
      { textoRespuesta: "Severa", value:"3" },
    ],
  },

  {
    titulo: "¿Tus migrañas te provocan nauseas no 0 si 1",
    id:"pg7",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI", value:"1"  },
      { textoRespuesta: "NO", value:"0" },
 
    ],
  },

  {
    titulo: "¿Tus migrañas te provocan nvomitos no 0 si 1",
    id:"pg8",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI" , value:"1"  },
      { textoRespuesta: "NO", value:"0" },
 
    ],
  },

  {
    titulo: "¿Tus migrañas son provocados por mucho ruido, es decir tienes sensibildad al ruido no 0 si 1",
    id:"pg10",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI" , value:"1" },
      { textoRespuesta: "NO", value:"0" },
 
    ],
  },

  {
    titulo: "¿Tus migrañas son provocados cualquier provenencia de luz, es decir tienes sensibildad a la luz no 0 si 1",
    id:"pg11",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI" , value:"1" },
      { textoRespuesta: "NO", value:"0" },
 
    ],
  },

  {
    titulo: "¿Segun tu experiencia cuantos problemas visuales se presentan junto a tus migrañas",
    id:"pg12",
    tipopregunta:"input",
    respuesta: [
      { textarea: "" },

 
    ],
  },

  {
    titulo: "¿Segun tu experiencia cuantos problemas sensoriales se presentan junto a tus migrañas",
    id:"pg13",
    tipopregunta:"input",
    respuesta: [
      { textarea: "" },
     
     
 
    ],
  },


  {
    titulo: "¿Alguna vez se presentaron problemas de coordinacion del habla",
    id:"pg14",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI" , value:"1" },
      { textoRespuesta: "NO", value:"0" },
     
     
 
    ],
  },

  {
    titulo: "¿Alguna vez se presentaron problemas de Sonidos y palabras desarticuladas",
    id:"pg15",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI", value:"1"  },
      { textoRespuesta: "NO", value:"0" },
     
 
    ],
  },
  
  {
    titulo: "¿Alguna vez se presentaron problemas de vertigo o mareos",
    id:"pg16",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI" , value:"1" },
      { textoRespuesta: "NO" , value:"0" },
     
     
 
    ],
  },

  {
    titulo: "¿Sufres de tinitus, es decir zumbidos en el oido",
    id:"pg17",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI", value:"1"  },
      { textoRespuesta: "NO", value:"0" },
     
     
 
    ],
  },

  {
    titulo: "¿Alguna vez sufriste de disminucion de sensibilidad auditiva o perdida de audicion (hipoacusis)",
    id:"pg18",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI" , value:"1" },
      { textoRespuesta: "NO", value:"0" },
     
     
 
    ],
  },

  {
    titulo: "¿Alguna vez sufriste de vision doble durante tus episodios",
    id:"pg19",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI", value:"1"  },
      { textoRespuesta: "NO", value:"0" },
     
     
 
    ],
  },
  {
    titulo: "¿Alguna vez sufriste de problemas simultáneo del campo ocular frontal o del campo nasal o en ambos ojos (No - 0, Sí - 1)",
    id:"pg20",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI" , value:"1" },
      { textoRespuesta: "NO", value:"0" },
      
    ],
  },

  {
    titulo: "¿Alguna vez sufriste de problema en el control muscular de tu cuerpo (No - 0, Sí - 1)",
    id:"pg21",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI", value:"1"  },
      { textoRespuesta: "NO", value:"0" },
      
    ],
  },

  {
    titulo: "¿Alguna vez sufriste de problemas en la perdidad de conciencia (No - 0, Sí - 1)",
    id:"pg22",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI" , value:"1" },
      { textoRespuesta: "NO", value:"0" },
      
    ],
  },

  {
    titulo: "¿Alguna vez sufriste de sensación de hormigueo y entumecimiento, adormecimiento o ardor  (No - 0, Sí - 1)",
    id:"pg23",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI" , value:"1" },
      { textoRespuesta: "NO", value:"0" },
      
    ],
  },

  {
    titulo: "¿Crees tener familiares con tus mismos problemas de migraña  (No - 0, Sí - 1)",
    id:"pg24",
    tipopregunta:"button",
    respuesta: [
      { textoRespuesta: "SI" , value:"1" },
      { textoRespuesta: "NO", value:"0" },
      
    ],
  },


];

export default preguntas;
