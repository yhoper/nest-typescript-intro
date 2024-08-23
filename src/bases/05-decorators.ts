class NewPokemon {
    constructor(
        public readonly id: number, //Propiedades
        public name: string //Propiedades
    ) { }

    //Vamos a crear 2 métodos

    scream() {
        console.log(`No estoy disponible!!`)
    }

    speak() {
        console.log(`Hoy no me apetece hablar`)
    }
}



const MyDecorator = () => {
    return (target: Function) => {
        return NewPokemon;
        //console.log(target);
    }
}

@MyDecorator()
export class Pokemon {

    constructor(
        public readonly id: number, //Propiedades
        public name: string //Propiedades
    ) { }

    //Vamos a crear 2 métodos

    scream() {
        console.log(`${this.name.toUpperCase()}!!`)
    }

    speak() {
        console.log(`${this.name}, ${this.name}!`)
    }

}

export const charmander = new Pokemon(1, 'charmander');

charmander.scream();
charmander.speak();