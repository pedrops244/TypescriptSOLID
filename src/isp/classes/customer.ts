import {
  EntrepriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  fisrtName: string;
  lastName: string;
  cpf: string;

  constructor(fisrtName: string, lastName: string, cpf: string) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}
export class EntrepriseCustomer implements EntrepriseCustomerProtocol {
  name: string;
  cnpj: string;

  constructor(name: string, cpnj: string) {
    this.name = name;
    this.cnpj = cpnj;
  }
}
