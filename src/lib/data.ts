import { colors } from "./colors"

export interface Roaster {
  id: string;
  roastId: number;
  roastNombre: string;
  color: (typeof colors)[keyof typeof colors];
  imagen: string; //las imagenes estan en la carpeta public para que sean accesibles 
  capitanes: string[];
}

export const roasters: Roaster[] = [
  {
    id: '1',
    roastId: 1,
    roastNombre: "R1-The Fiends",
    color: colors.r1,
    imagen:
        "/imgs/roasters/R1.png",
    capitanes: ["Exonide", "Yerson"],
  },
  {
    id: '2',
    roastId: 2,
    roastNombre: "R2-Unholy Calamity",
    color: colors.r2,
    imagen:
      "/imgs/roasters/R2.png",
    capitanes: ["Hades", "Emi"],
  },
  {
    id: '3',
    roastId: 3,
    roastNombre: "R3-Banshess ",
    color: colors.r3,
    imagen:
      "/imgs/roasters/R3.png",
    capitanes: ["Dioxd"],
  },
  {
    id: '4',
    roastId: 4,
    roastNombre: "R4-Rime Orchestra",
    color: colors.r4,
    imagen:
        "/imgs/roasters/R4.png",
    capitanes: ["Symphony", "Azemi", "Androd", "Melody", "Marou", "Yumi"],
  },
  {
    id: '5',
    roastId: 5,
    roastNombre: "R5-Hacktrinas",
    color: colors.r5,
    imagen:
        "/imgs/roasters/R5.png",
    capitanes: ["SofyCaty", "Edryos"],
  },
  {
    id: '6',
    roastId: 6,
    roastNombre: "R6-Zodiacs",
    color: colors.r6,
    imagen:
        "/imgs/roasters/R6.png",
    capitanes: ["Leandro", "Kenn"],
  },
  {
    id: '7',
    roastId: 7,
    roastNombre: "R7-Fenrir",
    color: colors.r7,
    imagen:
        "/imgs/roasters/R7.png",
    capitanes: ["Aquatrap", "Viniest"],
  },
  {
    id: '8',
    roastId: 8,
    roastNombre: "R8-SEELE",
    color: colors.r8,
    imagen:
        "/imgs/roasters/R8.png",
    capitanes: ["GoroAkechi"],
  },
  {
    id: '9',
    roastId: 9,
    roastNombre: "R9-FCA",
    color: colors.r9,
    imagen:
        "/imgs/roasters/R9.png",
    capitanes: ["Rakun35"],
  },
  {
    id: '10',
    roastId: 10,
    roastNombre: "R10-Gorgonas",
    color: colors.r10,
    imagen:
        "/imgs/roasters/R10.png",
    capitanes: ["GatitoLetal", "DayreMiss"],
  },
  {
    id: '11',
    roastId: 11,
    roastNombre: "R11-Slipstreams",
    color: colors.r11,
    imagen:
        "/imgs/roasters/R11.png",
    capitanes: ["Kanade", "Nico"],
  },
  {
    id: '12',
    roastId: 12,
    roastNombre: "R12-Schwarze Adler",
    color: colors.r12,
    imagen:
        "/imgs/roasters/R12.png",
    capitanes: ["King Escanor", "Incubus", "Superman"],
  },
  {
    id: '13',
    roastId: 13,
    roastNombre: "R13-Death XIII",
    color: colors.r1,
    imagen:
        "/imgs/roasters/R1.png",
    capitanes: ["Zero", "TFM"],
  },
  {
    id: '14',
    roastId: 14,
    roastNombre: "R14-Sacatripas",
    color: colors.r1,
    imagen:
        "/imgs/roasters/R14.png",
    capitanes: ["GororAkechi", "Neme"],
  },
  {
    id: '15',
    roastId: 15,
    roastNombre: "R15-Space Invaders",
    color: colors.r1,
    imagen:
        "/imgs/roasters/R15.png",
    capitanes: ["Lizz", "Sofia"],
  },
  {
    id: '16',
    roastId: 16,
    roastNombre: "R16-Tokki Nations",
    color: colors.r1,
    imagen:
        "/imgs/roasters/R1.png",
    capitanes: ["RTLLGoerge"],
  },
  {
    id: '17',
    roastId: 17,
    roastNombre: "R17-Radioactivity",
    color: colors.r1,
    imagen:
        "/imgs/roasters/R1.png",
    capitanes: ["Kratos", "Ley"],
  },
  {
    id: '18',
    roastId: 18,
    roastNombre: "R17-Conejitas",
    color: colors.r1,
    imagen:
        "/imgs/roasters/R1.png",
    capitanes: ["Eunbi"],
  },
];

export const moreRoasters = roasters.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarRoasters = roasters.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allRoasters = [
  ...roasters,
  ...moreRoasters,
  ...sidebarRoasters,
]

export interface Players {
  id: number;
  roastId: number;
  nombre: string;
  imagen: string;
  roast: string;
  rol: string;
}

export const players: Players[] = [
//R1
  {
    "id": 1,
    "roastId": 1,
    "nombre": "Exonide",
    "imagen": `/imgs/players/R1/duxa.png`,
    "roast": "R1-The Fiends",
    "rol": "DPS"
  },
  {
    "id": 2,
    "roastId": 1,
    "nombre": "Yerson",
    "imagen": `/imgs/roasters/R1.png`,
    "roast": "R1-The Fiends",
    "rol": "Support"
  },

  

//R2
  {
    "id": 1,
    "roastId": 2,
    "nombre": "Hades",
    "imagen": `/imgs/players/R2/hades.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "Tank/Support"
  },
  {
    "id": 2,
    "roastId": 2,
    "nombre": "Canhablador",
    "imagen": `/imgs/players/R2/Canhablador.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "Support"
  },
  {
    "id": 3,
    "roastId": 2,
    "nombre": "PsychoDepres",
    "imagen": `/imgs/players/R2/PsychoDepres.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "Support"
  },
  {
    "id": 4,
    "roastId": 2,
    "nombre": "Dreamless",
    "imagen": `/imgs/players/R2/Dreamless.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "DPS"
  },
  {
    "id": 5,
    "roastId": 2,
    "nombre": "DestroyDN",
    "imagen": `/imgs/players/R2/DestroyDN.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "Tank/DPS"
  },
  {
    "id": 6,
    "roastId": 2,
    "nombre": "Trupper",
    "imagen": `/imgs/players/R2/Trupper.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "Support"
  },
  {
    "id": 7,
    "roastId": 2,
    "nombre": "ALE3X",
    "imagen": `/imgs/players/R2/ALE3X.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "Support"
  },
  {
    "id": 8,
    "roastId": 2,
    "nombre": "Dagaz",
    "imagen": `/imgs/players/R2/Dagaz.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "DPS"
  },
  {
    "id": 9,
    "roastId": 2,
    "nombre": "ATTN",
    "imagen": `/imgs/players/R2/ATTN.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "Flex"
  },
  {
    "id": 10,
    "roastId": 2,
    "nombre": "Extodik",
    "imagen": `/imgs/players/R2/Extodik.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "DPS"
  },
  {
    "id": 11,
    "roastId": 2,
    "nombre": "OverFredy",
    "imagen": `/imgs/players/R2/OverFredy.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "Support"
  },
  {
    "id": 12,
    "roastId": 2,
    "nombre": "Sadali",
    "imagen": `/imgs/players/R2/Sadali.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "DPS"
  },
  {
    "id": 13,
    "roastId": 2,
    "nombre": "Zomberth",
    "imagen": `/imgs/players/R2/Zomberth.PNG`,
    "roast": "R2-Unholy Calamity",
    "rol": "Support"
  },



//R3  
  {
    "id": 1,
    "roastId": 3,
    "nombre": "Dioxd",
    "imagen": `/imgs/roasters/R3.png`,
    "roast": "R3-Banshess",
    "rol": "xd"
  },
 



//R4
  {
    "id": 1,
    "roastId": 4,
    "nombre": "Rime Orchestra Symphony ",
    "imagen": "/imgs/roasters/R4.png",
    "roast": "R4-Rime Orchestra",
    "rol": "xd"
  },
  {
    "id": 2,
    "roastId": 4,
    "nombre": "Azemi",
    "imagen": "/imgs/roasters/R4.png",
    "roast": "R4-Rime Orchestra",
    "rol": "xd"
  },
  {
    "id": 3,
    "roastId": 4,
    "nombre": "Androd",
    "imagen": "/imgs/roasters/R4.png",
    "roast": "R4-Rime Orchestra",
    "rol": "xdxd"
  },
  {
    "id": 4,
    "roastId": 4,
    "nombre": "Rime Orchestra Melody",
    "imagen": "/imgs/roasters/R4.png",
    "roast": "R4-Rime Orchestra",
    "rol": "xdxd"
  },
  {
    "id": 5,
    "roastId": 4,
    "nombre": "Marou",
    "imagen": "/imgs/roasters/R4.png",
    "roast": "R4-Rime Orchestra",
    "rol": "xd"
  },
  {
    "id": 6,
    "roastId": 4,
    "nombre": "Yumii",
    "imagen": "/imgs/roasters/R4.png",
    "roast": "R4-Rime Orchestra",
    "rol": "xdxdxdx"
  },



//R5
  {
    "id": 1,
    "roastId": 5,
    "nombre": "SoffyCaty",
    "imagen": "/imgs/roasters/R5.png",
    "roast": "R5-Hacktrinas",
    "rol": "Support"
  },
  {
    "id": 2,
    "roastId": 5,
    "nombre": "Mago Robot/ Ac Slicker",
    "imagen": "/imgs/roasters/R5.png",
    "roast": "R5-Hacktrinas",
    "rol": "Tank"
  },
  {
    "id": 3,
    "roastId": 5,
    "nombre": "Mikasa",
    "imagen": "/imgs/roasters/R5.png",
    "roast": "R5-Hacktrinas",
    "rol": "Tank"
  },
  {
    "id": 4,
    "roastId": 5,
    "nombre": "Evetrola",
    "imagen": "/imgs/roasters/R5.png",
    "roast": "R5-Hacktrinas",
    "rol": "Tank"
  },
  {
    "id": 5,
    "roastId": 5,
    "nombre": "Leonard's",
    "imagen": "/imgs/roasters/R5.png",
    "roast": "R5-Hacktrinas",
    "rol": "Tank"
  },
  {
    "id": 6,
    "roastId": 5,
    "nombre": "MxCartoo",
    "imagen": "/imgs/roasters/R5.png",
    "roast": "R5-Hacktrinas",
    "rol": "DPS"
  },
  {
    "id": 7,
    "roastId": 5,
    "nombre": "Tyoka",
    "imagen": "/imgs/roasters/R5.png",
    "roast": "R5-Hacktrinas",
    "rol": "DPS"
  },
  {
    "id": 8,
    "roastId": 5,
    "nombre": "Kanitzu/ Kani/ K/ El demonio morado",
    "imagen": "/imgs/roasters/R5.png",
    "roast": "R5-Hacktrinas",
    "rol": "Support"
  },
  {
    "id": 9,
    "roastId": 5,
    "nombre": "Ositoima",
    "imagen": "/imgs/roasters/R5.png",
    "roast": "R5-Hacktrinas",
    "rol": "Support"
  },
  {
    "id": 10,
    "roastId": 5,
    "nombre": "Happy",
    "imagen": "/imgs/roasters/R5.png",
    "roast": "R5-Hacktrinas",
    "rol": "Support"
  },



//R6
{
  "id": 1,
  "roastId": 6,
  "nombre": "Leandro",
  "imagen": "/imgs/roasters/R6.png",
  "roast": "R6-Zodiacs",
  "rol": "xdxd"
},
{
"id": 2,
"roastId": 6,
"nombre": "Viniest",
"imagen": "/imgs/roasters/R6.png",
"roast": "R6-Zodiacs",
"rol": "xdxd"
},



//R7
{
  "id": 1,
  "roastId": 7,
  "nombre": "Aquatrap",
  "imagen": "/imgs/roasters/R7.png",
  "roast": "R7-Fenrir",
  "rol": "xdxd"
  },
{
  "id": 1,
  "roastId": 7,
  "nombre": "Viniest",
  "imagen": "/imgs/roasters/R7.png",
  "roast": "R7-Fenrir",
  "rol": "xdxd"
  },



//R8
{
  "id": 1,
  "roastId": 8,
  "nombre": "GoroAkechi",
  "imagen": "/imgs/players/R8/jefa.PNG",
  "roast": "R8-SEELE",
  "rol": "Support"
  },



//R9
{
  "id": 1,
  "roastId": 9,
  "nombre": "Rakun35/Charly",
  "imagen": "/imgs/players/R9/rakun.png",
  "roast": "R9-FCA",
  "rol": "Tank/DPS"
  },
{
  "id": 2,
  "roastId": 9,
  "nombre": "Szoul/José",
  "imagen": "/imgs/players/R9/Szoul.png",
  "roast": "R9-FCA",
  "rol": "DPS"
},
{
  "id": 3,
  "roastId": 9,
  "nombre": "JoseHM/Even",
  "imagen": "/imgs/players/R9/Even.png",
  "roast": "R9-FCA",
  "rol": "DPS"
},



//R10
{
  "id": 1,
  "roastId": 10,
  "nombre": "GatitoLetal",
  "imagen": "/imgs/roasters/R10.png",
  "roast": "R10-Gorgonas",
  "rol": "DPS"
},
{
  "id": 2,
  "roastId": 10,
  "nombre": "DayreMiss",
  "imagen": "/imgs/roasters/R10.png",
  "roast": "R10-Gorgonas",
  "rol": "Support"
},
{
  "id": 3,
  "roastId": 10,
  "nombre": "Allantr",
  "imagen": "/imgs/roasters/R10.png",
  "roast": "R10-Gorgonas",
  "rol": "Tank"
},
{
  "id": 4,
  "roastId": 10,
  "nombre": "Napolitana",
  "imagen": "/imgs/roasters/R10.png",
  "roast": "R10-Gorgonas",
  "rol": "DPS"
},
{
  "id": 5,
  "roastId": 10,
  "nombre": "Tonyccr",
  "imagen": "/imgs/roasters/R10.png",
  "roast": "R10-Gorgonas",
  "rol": "Support"
},



//R11
{
  "id": 1,
  "roastId": 11,
  "nombre": "Kanade",
  "imagen": "/imgs/roasters/R11.png",
  "roast": "R11-Slipstreams",
  "rol": "xdxd"
},
{
  "id": 2,
  "roastId": 11,
  "nombre": "Mizukage",
  "imagen": "/imgs/roasters/R11.png",
  "roast": "R11-Slipstreams",
  "rol": "xdxd"
},



//R12
{
  "id": 1,
  "roastId": 12,
  "nombre": "KingEscanor",
  "imagen": "/imgs/players/R12/escanor.webp",
  "roast": "R12-Schwarze Adler",
  "rol": "Tank"
},
{
  "id": 2,
  "roastId": 12,
  "nombre": "Incubus",
  "imagen": "/imgs/players/R12/incubus.webp",
  "roast": "R12-Schwarze Adler",
  "rol": "Flex"
},
{
  "id": 3,
  "roastId": 12,
  "nombre": "Superman/Wesker",
  "imagen": "/imgs/players/R12/superman.png",
  "roast": "R12-Schwarze Adler",
  "rol": "Tank/DPS"
},
{
  "id": 4,
  "roastId": 12,
  "nombre": "Martin/mimr93",
  "imagen": "/imgs/players/R12/tilin.png",
  "roast": "R12-Schwarze Adler",
  "rol": "Support"
},
{
  "id": 5,
  "roastId": 12,
  "nombre": "SoHunter",
  "imagen": "/imgs/players/R12/hunter.png",
  "roast": "R12-Schwarze Adler",
  "rol": "Support"
},
{
  "id": 6,
  "roastId": 12,
  "nombre": "Nashiraa",
  "imagen": "/imgs/players/R12/nashira.jpeg",
  "roast": "R12-Schwarze Adler",
  "rol": "DPS/Support"
},
{
  "id": 7,
  "roastId": 12,
  "nombre": "Deri",
  "imagen": "/imgs/roasters/R12.png",
  "roast": "R12-Schwarze Adler",
  "rol": "DPS"
},
{
  "id": 8,
  "roastId": 12,
  "nombre": "FarDSao",
  "imagen": "/imgs/players/R12/fardsao.png",
  "roast": "R12-Schwarze Adler",
  "rol": "DPS"
},
{
  "id": 9,
  "roastId": 12,
  "nombre": "Rafiki",
  "imagen": "/imgs/roasters/R12.png",
  "roast": "R12-Schwarze Adler",
  "rol": "Tank"
},
{
  "id": 10,
  "roastId": 12,
  "nombre": "Pereck",
  "imagen": "/imgs/roasters/R12.png",
  "roast": "R12-Schwarze Adler",
  "rol": "DPS/Support"
},
{
  "id": 11,
  "roastId": 12,
  "nombre": "Rogeloon",
  "imagen": "/imgs/roasters/R12.png",
  "roast": "R12-Schwarze Adler",
  "rol": "Support"
},
{
  "id": 11,
  "roastId": 12,
  "nombre": "Sooc",
  "imagen": "/imgs/roasters/R12.png",
  "roast": "R12-Schwarze Adler",
  "rol": "DPS"
},
{
  "id": 12,
  "roastId": 12,
  "nombre": "ArturoHdz16",
  "imagen": "/imgs/roasters/R12.png",
  "roast": "R12-Schwarze Adler",
  "rol": "Tank"
},




//R13
{
  "id": 1,
  "roastId": 13,
  "nombre": "Zero",
  "imagen": "/imgs/roasters/R1.png",
  "roast": "R13-Death XIII",
  "rol": "xdxdxd"
},
{
  "id": 2,
  "roastId": 13,
  "nombre": "TFM",
  "imagen": "/imgs/roasters/R1.png",
  "roast": "R13-Death XIII",
  "rol": "xdxdxd"
},



//R14
{
  "id": 1,
  "roastId": 14,
  "nombre": "GoroAkechi",
  "imagen": "/imgs/players/R14/jefa.PNG",
  "roast": "R14-Sacatripas",
  "rol": "Support"
},
{
  "id": 2,
  "roastId": 14,
  "nombre": "Neme",
  "imagen": "/imgs/roasters/R14.png",
  "roast": "R14-Sacatripas",
  "rol": "xdxdxdx"
},



//R15
{
  "id": 1,
  "roastId": 15,
  "nombre": "Lizz",
  "imagen": "/imgs/roasters/R15.png",
  "roast": "R15-Space Invaders",
  "rol": "xdxdxd"
},
{
  "id": 2,
  "roastId": 15,
  "nombre": "Sofia",
  "imagen": "/imgs/roasters/R15.png",
  "roast": "R15-Space Invaders",
  "rol": "xdxdxd"
},


//R16
{
  "id": 1,
  "roastId": 16,
  "nombre": "RTLLGoerge",
  "imagen": "/imgs/roasters/R1.png",
  "roast": "R16-Tokki Nations",
  "rol": "xdxdxd"
},


//R17
{
  "id": 1,
  "roastId": 17,
  "nombre": "Kratos",
  "imagen": "/imgs/roasters/R1.png",
  "roast": "R17-Radioactivity",
  "rol": "DPS"
},
{
  "id": 2,
  "roastId": 17,
  "nombre": "VIctorLRider",
  "imagen": "/imgs/roasters/R1.png",
  "roast": "R17-Radioactivity",
  "rol": "Tank"
},
{
  "id":3,
  "roastId": 17,
  "nombre": "Shyru",
  "imagen": "/imgs/roasters/R1.png",
  "roast": "R17-Radioactivity",
  "rol": "Support"
},
{
  "id": 4,
  "roastId": 17,
  "nombre": "Lobosalvaje7",
  "imagen": "/imgs/roasters/R1.png",
  "roast": "R17-Radioactivity",
  "rol": "DPS"
},
{
  "id": 5,
  "roastId": 17,
  "nombre": "Lobosalvaje7",
  "imagen": "/imgs/roasters/R1.png",
  "roast": "R17-Radioactivity",
  "rol": "Support"
},
{
  "id": 6,
  "roastId": 17,
  "nombre": "XXpepeXX",
  "imagen": "/imgs/roasters/R1.png",
  "roast": "R17-Radioactivity",
  "rol": "Support"
},
{
  "id": 7,
  "roastId": 17,
  "nombre": "Vilchiz10",
  "imagen": "/imgs/roasters/R1.png",
  "roast": "R17-Radioactivity",
  "rol": "Support"
},


//r18
{
  "id": 1,
  "roastId": 18,
  "nombre": "Eunbi",
  "imagen": "/imgs/roasters/R1.png",
  "roast": "R18-Conejitas",
  "rol": "xdxd"
},
]