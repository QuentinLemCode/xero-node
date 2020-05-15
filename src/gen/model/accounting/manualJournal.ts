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

import { Attachment } from '././attachment';
import { LineAmountTypes } from '././lineAmountTypes';
import { ManualJournalLine } from '././manualJournalLine';
import { ValidationError } from '././validationError';

export class ManualJournal {
    /**
    * Description of journal being posted
    */
    'narration': string;
    /**
    * See JournalLines
    */
    'journalLines'?: Array<ManualJournalLine>;
    /**
    * Date journal was posted – YYYY-MM-DD
    */
    'date'?: string;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * See Manual Journal Status Codes
    */
    'status'?: ManualJournal.StatusEnum;
    /**
    * Url link to a source document – shown as “Go to [appName]” in the Xero app
    */
    'url'?: string;
    /**
    * Boolean – default is true if not specified
    */
    'showOnCashBasisReports'?: boolean;
    /**
    * Boolean to indicate if a manual journal has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * Last modified date UTC format
    */
    'updatedDateUTC'?: Date;
    /**
    * The Xero identifier for a Manual Journal
    */
    'manualJournalID'?: string;
    /**
    * A string to indicate if a invoice status
    */
    'statusAttributeString'?: string;
    /**
    * Displays array of warning messages from the API
    */
    'warnings'?: Array<ValidationError>;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
    /**
    * Displays array of attachments from the API
    */
    'attachments'?: Array<Attachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "narration",
            "baseName": "Narration",
            "type": "string"
        },
        {
            "name": "journalLines",
            "baseName": "JournalLines",
            "type": "Array<ManualJournalLine>"
        },
        {
            "name": "date",
            "baseName": "Date",
            "type": "string"
        },
        {
            "name": "lineAmountTypes",
            "baseName": "LineAmountTypes",
            "type": "LineAmountTypes"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "ManualJournal.StatusEnum"
        },
        {
            "name": "url",
            "baseName": "Url",
            "type": "string"
        },
        {
            "name": "showOnCashBasisReports",
            "baseName": "ShowOnCashBasisReports",
            "type": "boolean"
        },
        {
            "name": "hasAttachments",
            "baseName": "HasAttachments",
            "type": "boolean"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "manualJournalID",
            "baseName": "ManualJournalID",
            "type": "string"
        },
        {
            "name": "statusAttributeString",
            "baseName": "StatusAttributeString",
            "type": "string"
        },
        {
            "name": "warnings",
            "baseName": "Warnings",
            "type": "Array<ValidationError>"
        },
        {
            "name": "validationErrors",
            "baseName": "ValidationErrors",
            "type": "Array<ValidationError>"
        },
        {
            "name": "attachments",
            "baseName": "Attachments",
            "type": "Array<Attachment>"
        }    ];

    static getAttributeTypeMap() {
        return ManualJournal.attributeTypeMap;
    }
}

export namespace ManualJournal {
    export enum StatusEnum {
        DRAFT = <any> 'DRAFT',
        POSTED = <any> 'POSTED',
        DELETED = <any> 'DELETED',
        VOIDED = <any> 'VOIDED',
        ARCHIVED = <any> 'ARCHIVED'
    }
}
