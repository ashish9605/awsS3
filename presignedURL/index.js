const { generatedUrl } = require('./utils');

// Lambda handler function
exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event));

  const bucketName = 'Your--Bucket--Name';
  const objectKey = event.objectKey;
  
  try {
    // Generate a presigned URL with 1-day expiration
    const presignedUrl = await generatedUrl(bucketName, objectKey);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'URL generated successfully',
        url: presignedUrl
      }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
