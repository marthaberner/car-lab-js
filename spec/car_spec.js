var Car = require('../car');

describe('Car', function(){

  beforeEach(function(){
    car = new Car("Toyotoa", "Tercel", 1975, "Yellow");
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    xit('should be the current year', function(){
      expect(car.year).toEqual(1975);
    });
  });

  describe('#state', function(){
    xit('should initially be off', function(){
      expect(car.state).toEqual("off");
    });
  });

  describe('#previousOwners', function(){
    xit('should initially be empty', function(){
      expect(car.previousOwners).toEqual([]);
    });
  });

  describe('#curretOwner', function(){
    xit('should initially be manufacturer', function(){
      expect(car.currentOwner).toEqual("manufacturer");
    });
  });

  describe('#passengers', function(){
    xit('should initially be empty', function(){
      expect(car.passengers).toEqual([]);
    });
  });

  describe('#sale', function(){

    xit('should move currentOwner to previousOwners array', function(){
      car.currentOwner = "Joe Schmoe";
      car.sale("Suzie Swazie");
      expect(car.previousOwners).toEqual(["Joe Schmoe"]);
    });

    xit('should update currentOwner with the new owner', function(){
      car.currentOwner = "Joe Schmoe";
      car.sale("Suzie Swazie");
      expect(car.currentOwner).toEqual("Suzie Swazie");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){

    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){

    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){

    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){

    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){

    });

    it('should not modify the passengers array if car is off', function(){

    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){

    });

    it('should leave passenger in the passengers array if car is off', function(){

    });
  });

});
