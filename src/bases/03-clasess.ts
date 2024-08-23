import axios from "axios"
import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    /*
    
    Forma Larga

        public id: number;
        public name: string;
    
        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
            console.log("Constructor llamado");
        }
    
        */

    // Forma Corta

    get imageUrl(): string {
        return `https://polemon.com/${this.id}.jpg`
    }
    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() {
        //Metodo scream
        console.log(`${this.name.toUpperCase()} estoy en scream `)
    }

    speak() {
        //Metodo speak
        console.log(`${this.name} ${this.name} estoy en speak`)
    }

    async getMoves() {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        try {
            console.log(data.moves);
            return data.moves
        } catch (error) {
            console.log(error)
        }
        // const moves = 10;
        // return moves;
    }



}

export const charmander = new Pokemon(7, 'pika');
console.log(charmander);
charmander.scream();
charmander.speak();
console.log(charmander.getMoves());
