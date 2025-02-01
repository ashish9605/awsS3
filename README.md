# Generate Pre-signed URL for S3 by using aws lambda

This repository contains an AWS Lambda function that generates a pre-signed URL for an S3 object. 
The URL is valid for 1 day. This Lambda function can be triggered with an event containing the `objectKey` of the file in S3.

## Prerequisites

- **AWS Account**: You need an AWS account to deploy and run the Lambda function.
- **IAM Permissions**: Ensure that your Lambda execution role has the appropriate permissions to access S3 (e.g., `s3:GetObject`).
- **AWS SDK**: The AWS SDK is already included in the Lambda runtime environment.


