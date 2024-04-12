import { fakerEN_US as faker } from '@faker-js/faker';
import Utils from '@helper/utils';
import { STATES } from '@fixtures/states';

export function generatePartnerData() {
  let partnerData = {
    company: {
      name: `TA - ${faker.company.name()}`,
      phone: faker.string.numeric({ length: 10, exclude: ['0'] }),
      address: faker.location.zipCode({ state: Utils.constRandomValue(STATES) }),
      secondaryAddress: faker.location.secondaryAddress()
    },
    personal: {
      name: faker.person.fullName(),
      phone: faker.string.numeric({ length: 10, exclude: ['0'] }),
      address: faker.location.zipCode({ state: Utils.constRandomValue(STATES) }),
      secondaryAddress: faker.location.secondaryAddress()
    },
    credential: {
      email: generateEmail(),
      password: '123.Change'
    }
  };

  return partnerData;
}

export function generateEmail(user, domain) {
  let userEmail = user ? user : 'eos.testes';
  let domainEmail = domain ? domain : '@gmail.com';
  return `${userEmail}+${faker.string.uuid()}${domainEmail}`;
}

export function generateProjectData() {
  let projectData = {
    project: {
      usageLastMonths: faker.string.numeric({ length: 3, exclude: ['0'] }),
      averageElectricBill: faker.string.numeric({ length: { min: 5, max: 6 }, exclude: ['0'] }),
      SolarProduction: faker.string.numeric({ length: 4, exclude: ['0'] }),
      estimatedFinanceAmount: faker.string.numeric({ length: { min: 7, max: 10 }, exclude: ['0'] })
    },
    customer: {
      firstName: `TA ${faker.person.firstName()}`,
      lastName: `${faker.person.middleName()} ${faker.person.lastName()}`,
      phone: faker.string.numeric({ length: 10, exclude: ['0'] }),
      address: faker.location.zipCode({ state: Utils.constRandomValue(STATES) }),
      secondaryAddress: faker.location.secondaryAddress(),
      email: generateEmail()
    }
  };

  return projectData;
}
