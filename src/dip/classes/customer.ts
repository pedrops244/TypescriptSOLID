import {
  EntrepriseCustomerProtocol,
  IndividualCustomerProtocol,
  CustomerOrder,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  fisrtName: string;
  lastName: string;
  cpf: string;

  constructor(fisrtName: string, lastName: string, cpf: string) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    return this.fisrtName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}
export class EntrepriseCustomer
  implements EntrepriseCustomerProtocol, CustomerOrder
{
  name: string;
  cnpj: string;

  constructor(name: string, cpnj: string) {
    this.name = name;
    this.cnpj = cpnj;
  }
  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
