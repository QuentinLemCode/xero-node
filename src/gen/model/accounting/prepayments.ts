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

import { Prepayment } from '././prepayment';

export class Prepayments {
    'prepayments'?: Array<Prepayment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "prepayments",
            "baseName": "Prepayments",
            "type": "Array<Prepayment>"
        }    ];

    static getAttributeTypeMap() {
        return Prepayments.attributeTypeMap;
    }
}

