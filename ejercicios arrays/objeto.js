function createObject(name, subs) {
    const persona = {
        name ,
        subs ,
        hash: name.length*subs,
        getStatus: function(){
            return`el canal de ${name} tiene ${subs} suscriptores`
        }
    }
    return persona
 }
    const personas = createObject("Tomas", 200)
    console.log(personas.getStatus())
    
