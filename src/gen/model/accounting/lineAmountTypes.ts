/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Line amounts are exclusive of tax by default if you don’t specify this element. See Line Amount Types
*/
export enum LineAmountTypes {
    Exclusive = <any> 'Exclusive',
    Inclusive = <any> 'Inclusive',
    NoTax = <any> 'NoTax'
}
