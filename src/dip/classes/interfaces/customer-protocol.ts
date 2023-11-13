export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  fisrtName: string;
  lastName: string;
  cpf: string;
}
export interface EntrepriseCustomerProtocol {
  name: string;
  cnpj: string;
}
