# ![LOGO](logo.png) Google Cloud Deployment Manager **flow**ground Connector

## Description

A generated **flow**ground connector for the Google Cloud Deployment Manager API (version v2).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/deploymentmanager/v2/swagger.json<br/>
Generated at: 2019-05-07T17:41:31+03:00

## API Description

Declares, configures, and deploys complex solutions on Google Cloud Platform.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Lists all deployments for a given project.

*Tags:* `deployments`

#### Input Parameters
* `filter` - _optional_ - A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.

For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.

You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.

To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
* `maxResults` - _optional_ - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* `orderBy` - _optional_ - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.

You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.

Currently, only sorting by name or creationTimestamp desc is supported.
* `pageToken` - _optional_ - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* `project` - _required_ - The project ID for this request.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a deployment and all of the resources described by the deployment manifest.

*Tags:* `deployments`

#### Input Parameters
* `createPolicy` - _optional_ - Sets the policy to use for creating new resources.
    Possible values: ACQUIRE, CREATE_OR_ACQUIRE.
* `preview` - _optional_ - If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the update() method or you can use the cancelPreview() method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
* `project` - _required_ - The project ID for this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a deployment and all of the resources in the deployment.

*Tags:* `deployments`

#### Input Parameters
* `deletePolicy` - _optional_ - Sets the policy to use for deleting resources.
    Possible values: ABANDON, DELETE.
* `deployment` - _required_ - The name of the deployment for this request.
* `project` - _required_ - The project ID for this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets information about a specific deployment.

*Tags:* `deployments`

#### Input Parameters
* `deployment` - _required_ - The name of the deployment for this request.
* `project` - _required_ - The project ID for this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a deployment and all of the resources described by the deployment manifest. This method supports patch semantics.

*Tags:* `deployments`

#### Input Parameters
* `createPolicy` - _optional_ - Sets the policy to use for creating new resources.
    Possible values: ACQUIRE, CREATE_OR_ACQUIRE.
* `deletePolicy` - _optional_ - Sets the policy to use for deleting resources.
    Possible values: ABANDON, DELETE.
* `deployment` - _required_ - The name of the deployment for this request.
* `preview` - _optional_ - If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
* `project` - _required_ - The project ID for this request.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a deployment and all of the resources described by the deployment manifest.

*Tags:* `deployments`

#### Input Parameters
* `createPolicy` - _optional_ - Sets the policy to use for creating new resources.
    Possible values: ACQUIRE, CREATE_OR_ACQUIRE.
* `deletePolicy` - _optional_ - Sets the policy to use for deleting resources.
    Possible values: ABANDON, DELETE.
* `deployment` - _required_ - The name of the deployment for this request.
* `preview` - _optional_ - If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
* `project` - _required_ - The project ID for this request.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Cancels and removes the preview currently associated with the deployment.

*Tags:* `deployments`

#### Input Parameters
* `deployment` - _required_ - The name of the deployment for this request.
* `project` - _required_ - The project ID for this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists all manifests for a given deployment.

*Tags:* `manifests`

#### Input Parameters
* `deployment` - _required_ - The name of the deployment for this request.
* `filter` - _optional_ - A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.

For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.

You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.

To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
* `maxResults` - _optional_ - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* `orderBy` - _optional_ - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.

You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.

Currently, only sorting by name or creationTimestamp desc is supported.
* `pageToken` - _optional_ - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* `project` - _required_ - The project ID for this request.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets information about a specific manifest.

*Tags:* `manifests`

#### Input Parameters
* `deployment` - _required_ - The name of the deployment for this request.
* `manifest` - _required_ - The name of the manifest for this request.
* `project` - _required_ - The project ID for this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists all resources in a given deployment.

*Tags:* `resources`

#### Input Parameters
* `deployment` - _required_ - The name of the deployment for this request.
* `filter` - _optional_ - A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.

For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.

You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.

To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
* `maxResults` - _optional_ - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* `orderBy` - _optional_ - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.

You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.

Currently, only sorting by name or creationTimestamp desc is supported.
* `pageToken` - _optional_ - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* `project` - _required_ - The project ID for this request.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets information about a single resource.

*Tags:* `resources`

#### Input Parameters
* `deployment` - _required_ - The name of the deployment for this request.
* `project` - _required_ - The project ID for this request.
* `resource` - _required_ - The name of the resource for this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.

*Tags:* `deployments`

#### Input Parameters
* `deployment` - _required_ - The name of the deployment for this request.
* `project` - _required_ - The project ID for this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets the access control policy for a resource. May be empty if no such policy or resource exists.

*Tags:* `deployments`

#### Input Parameters
* `project` - _required_ - Project ID for this request.
* `resource` - _required_ - Name or id of the resource for this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Sets the access control policy on the specified resource. Replaces any existing policy.

*Tags:* `deployments`

#### Input Parameters
* `project` - _required_ - Project ID for this request.
* `resource` - _required_ - Name or id of the resource for this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns permissions that a caller has on the specified resource.

*Tags:* `deployments`

#### Input Parameters
* `project` - _required_ - Project ID for this request.
* `resource` - _required_ - Name or id of the resource for this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists all operations for a project.

*Tags:* `operations`

#### Input Parameters
* `filter` - _optional_ - A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.

For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.

You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.

To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
* `maxResults` - _optional_ - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* `orderBy` - _optional_ - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.

You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.

Currently, only sorting by name or creationTimestamp desc is supported.
* `pageToken` - _optional_ - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* `project` - _required_ - The project ID for this request.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets information about a specific operation.

*Tags:* `operations`

#### Input Parameters
* `operation` - _required_ - The name of the operation for this request.
* `project` - _required_ - The project ID for this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists all resource types for Deployment Manager.

*Tags:* `types`

#### Input Parameters
* `filter` - _optional_ - A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.

For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.

You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.

To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
* `maxResults` - _optional_ - The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
* `orderBy` - _optional_ - Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.

You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.

Currently, only sorting by name or creationTimestamp desc is supported.
* `pageToken` - _optional_ - Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
* `project` - _required_ - The project ID for this request.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-deploymentmanager-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
