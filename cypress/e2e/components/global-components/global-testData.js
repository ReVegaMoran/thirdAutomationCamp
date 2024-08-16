import { faker } from '@faker-js/faker';

class TestDataElements {
    constructor() {
        this.email = faker.internet.email();
        this.staticEmail = "rene.vega@applydigital.com";
        this.staticPassword = "Renetest-123";
        this.password = faker.internet.password();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.middleName();
        this.phoneNumber = "978548578";
        this.rut = "184820188";
        this.street = faker.location.streetName();
        this.streetNumber = faker.location.zipCode();
        this.apartmentOfficeOther = faker.location.secondaryAddress();
    }
}

export const testDataComponents = new TestDataElements;