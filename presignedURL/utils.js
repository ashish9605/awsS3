const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({ region: 'us-west-2' });

exports.generatedUrl = async (bucketName, objectKey) => {
  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: objectKey,
    });

    // Create a pre-signed URL with 1-day expiration
    const url = await s3Client.getSignedUrl(command, { expiresIn: 86400 });
    
    return url;
  } catch (error) {
    throw new Error('Failed to generate presigned URL: ' + error.message);
  }
};
