const Database = require('./db');
const saveOrphanage = require("./saveOrphanage");


Database.then(async (db) => {
    //inserir dados na tabela
   /*await saveOrphanage(db,{
    lat: "-27.222633",
    lng: "-49.6655874", 
    name: "Lar de amor",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "99999999",
    images: [
        "https://images.unsplash.com/photo-1601841681382-41c7de6537e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        "https://images.unsplash.com/photo-1600267605664-689860fe1a0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    ].toString(),
    instruction: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours:"Horário de visitas das 18h até 8h",
    open_on_weekends:"1"
})*/


    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //Consultar somente 1 orphanage, pelo id
    //const orphanage = await db.all("SELECT * FROM orphanages WHERE id='3'")
    //    console.log(orphanage)

    //deletar dado da tabela
    // await db.run("DELETE FROM orphanages WHERE id='6'")
})