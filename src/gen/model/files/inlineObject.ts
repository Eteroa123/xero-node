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


export class InlineObject {
    'body'?: string;
    /**
    * exact name of the file you are uploading
    */
    'name'?: string;
    'filename'?: string;
    'mimeType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject.attributeTypeMap;
    }
}
