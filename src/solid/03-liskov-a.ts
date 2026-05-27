import { Tesla, Audi, Toyota, Honda, Vehicle, Volvo } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {
        
        for (const car of cars) {
            if( car instanceof Vehicle ) {
                console.log( car.constructor.name, car.getNumberOfSeats() )
                continue;
            }
        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
    ];


    printCarSeats( cars );

})();