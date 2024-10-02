export interface IDocumentRequest {
    nameClient: string;
    typeDocumentId: 'NIT' | 'Cedula de Ciudadania' | 'Cedula de Extranjeria' | 'Pasaporte';
    documentId: string;
    email: string;
    phone: string;
    documentRequest: string;
    documentFiscalYear: string;
    dateRequest: string;
}