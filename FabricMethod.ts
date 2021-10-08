interface ICreator {
    factoryMethod: () => ICoffe
    getCofee: () => string
}

interface ICoffe {
    whatCoffe: () => string
}

abstract class Creator implements ICreator {
    public abstract factoryMethod(): ICoffe
    public getCofee = () => {
        const product = this.factoryMethod();
        return `Я создал объект, который говорит, что он ${product.whatCoffe()}`;
    }
}

class CreatorAmericano extends Creator {
    public factoryMethod = () => {
        return new Americano();
    }
}

class CreatorCapuchino extends Creator {
    public factoryMethod = () => {
        return new Capuchino();
    }
}

class Americano implements ICoffe {
    public whatCoffe = () => {
        return `Американо`
    } 
}

class Capuchino implements ICoffe {
    public whatCoffe = () => {
        return `Капучино`
    } 
}

function clientCode(creator: ICreator) {
    console.log(creator.getCofee())
}

clientCode(new CreatorAmericano())
clientCode(new CreatorCapuchino())

  