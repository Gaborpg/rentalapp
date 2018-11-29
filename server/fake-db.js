const Rental = require('./models/rental')


class Fakedb {
  constructor() {
    this.rentals = [
      {
        title: 'Central Apartment',
        city: 'New York',
        street: 'Times Sqaure',
        category: 'apartment',
        image: 'https://picsum.photos/360/260',
        bedrooms: 3,
        shared: false,
        description: 'Very nice apartment',
        dailyRate: 34
      },
      {
        title: 'Central Apartment 2',
        city: 'San Francisco',
        street: 'Main street',
        category: 'condo',
        image: 'https://picsum.photos/360/260',
        bedrooms: 2,
        shared: false,
        description: 'Very nice apartment',
        dailyRate: 12
      },
      {
        title: 'Central Apartment 3',
        city: 'Bratislava',
        street: 'Hlavna',
        category: 'condo',
        image: 'https://picsum.photos/360/260',
        bedrooms: 2,
        shared: false,
        description: 'Very nice apartment',
        dailyRate: 334
      },
      {
        title: 'Central Apartment 4',
        city: 'Berlin',
        street: 'Haupt strasse',
        category: 'house',
        image: 'https://picsum.photos/360/260',
        bedrooms: 9,
        shared: true,
        description: 'Very nice apartment',
        dailyRate: 33
      }
    ]
  }


   async clearDb() {
     await Rental.deleteMany({});
  }

  pushRentalsToDb() {
    this.rentals.forEach((rental) => {
      const newRental = new Rental(rental);

      newRental.save();
    })
  }

  seedDb(){
    this.clearDb();
    this.pushRentalsToDb();
  }
}


module.exports = Fakedb;
