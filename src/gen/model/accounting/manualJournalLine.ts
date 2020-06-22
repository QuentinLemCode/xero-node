/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TrackingCategory } from '././trackingCategory';

export class ManualJournalLine {
    /**
    * total for line. Debits are positive, credits are negative value
    */
    'lineAmount'?: number;
    /**
    * See Accounts
    */
    'accountCode'?: string;
    /**
    * Description for journal line
    */
    'description'?: string;
    /**
    * The tax type from TaxRates
    */
    'taxType'?: string;
    /**
    * Optional Tracking Category – see Tracking. Any JournalLine can have a maximum of 2 <TrackingCategory> elements.
    */
    'tracking'?: Array<TrackingCategory>;
    /**
    * The calculated tax amount based on the TaxType and LineAmount
    */
    'taxAmount'?: number;
    /**
    * is the line blank
    */
    'isBlank'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lineAmount",
            "baseName": "LineAmount",
            "type": "number"
        },
        {
            "name": "accountCode",
            "baseName": "AccountCode",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "taxType",
            "baseName": "TaxType",
            "type": "string"
        },
        {
            "name": "tracking",
            "baseName": "Tracking",
            "type": "Array<TrackingCategory>"
        },
        {
            "name": "taxAmount",
            "baseName": "TaxAmount",
            "type": "number"
        },
        {
            "name": "isBlank",
            "baseName": "IsBlank",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ManualJournalLine.attributeTypeMap;
    }
}

