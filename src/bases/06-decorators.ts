const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
        // console.log({target})
        return {
            get() {
                const wrapperFn = (...args: any[]) => {
                    console.warn(`Method ${memberName} is deprecated with reason: ${deprecationReason}`);
                    //! Llamar la función propiamente con sus argumentos
                    propertyDescriptor.value.apply(this, args);
                }
                return wrapperFn;
            }
        }
    }
}

export class Pokemon {

    constructor(
        public readonly id: number, //Propiedades
        public name: string //Propiedades
    ) { }

    //Vamos a crear 2 métodos

    scream() {
        console.log(`${this.name.toUpperCase()}!!`)
    }

    @Deprecated('Most use speak2 method instead')
    speak() {
        console.log(`${this.name}, ${this.name}!`)
    }

    speak2() {
        console.log(`${this.name}, ${this.name}!!! Nueva versión`)
    }

}

export const charmander = new Pokemon(1, 'charmander');

charmander.speak();