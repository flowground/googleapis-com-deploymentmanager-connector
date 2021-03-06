/**
 * Auto-generated action file for "Google Cloud Deployment Manager" API.
 *
 * Generated at: 2019-05-23T09:13:16.922Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-deploymentmanager-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'deploymentmanager.deployments.insert'
 * Endpoint Path: '/{project}/global/deployments'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "createPolicy",
    "preview",
    "project",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "createPolicy": "createPolicy",
    "preview": "preview",
    "project": "project",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "description": "description",
    "fingerprint": "fingerprint",
    "id": "id",
    "insertTime": "insertTime",
    "labels": "labels",
    "manifest": "manifest",
    "name": "name",
    "clientOperationId": "clientOperationId",
    "creationTimestamp": "creationTimestamp",
    "endTime": "endTime",
    "errors": "errors",
    "error": "error",
    "httpErrorMessage": "httpErrorMessage",
    "httpErrorStatusCode": "httpErrorStatusCode",
    "kind": "kind",
    "operationType": "operationType",
    "progress": "progress",
    "region": "region",
    "selfLink": "selfLink",
    "startTime": "startTime",
    "status": "status",
    "statusMessage": "statusMessage",
    "targetId": "targetId",
    "targetLink": "targetLink",
    "user": "user",
    "warnings": "warnings",
    "zone": "zone",
    "operation": "operation",
    "content": "content",
    "config": "config",
    "imports": "imports",
    "target": "target",
    "update": "update",
    "updateTime": "updateTime",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'deploymentmanager.deployments.insert',
        pathName: '/{project}/global/deployments',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}