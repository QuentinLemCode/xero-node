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

import { ContactGroup } from '././contactGroup';

export class ContactGroups {
    'contactGroups'?: Array<ContactGroup>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contactGroups",
            "baseName": "ContactGroups",
            "type": "Array<ContactGroup>"
        }    ];

    static getAttributeTypeMap() {
        return ContactGroups.attributeTypeMap;
    }
}

