
class Usuarios {


    constructor() {

        this.personas = []; //Personas conectadas al chat

    }

    agregarPersona(id, nombre, sala){

        let persona = {id, nombre, sala};

        this.personas.push(persona);

        return this.personas;

    }

    getPersona( id ) {
        let persona = this.personas.filter( persona =>  persona.id = id /*condición del filtro*/ )[0]; //[0] porque filter devuelve un nuevo array
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala( sala ) {
        //TODO:
        let personasEnSala = this.personas.filter(persona => persona.sala = sala);

        return personasEnSala;
    }

    borrarPersona( id ) {

        let personaBorrada = this.getPersona( id );

        this.personas = this.personas.filter( persona =>  persona.id != id ) //filtramos las personas que no coincidas con el id recibido en borrar

        return personaBorrada;

    }

}

module.exports = Usuarios;