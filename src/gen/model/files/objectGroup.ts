/**
 * Xero Files API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API.
*/
export enum ObjectGroup {
    Account = <any> 'Account',
    BankTransaction = <any> 'BankTransaction',
    Contact = <any> 'Contact',
    CreditNote = <any> 'CreditNote',
    Invoice = <any> 'Invoice',
    Item = <any> 'Item',
    ManualJournal = <any> 'ManualJournal',
    Overpayment = <any> 'Overpayment',
    Payment = <any> 'Payment',
    Prepayment = <any> 'Prepayment',
    Receipt = <any> 'Receipt'
}