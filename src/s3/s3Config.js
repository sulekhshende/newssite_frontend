import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  region: process.env.AWS_REGION || '',
  signatureVersion: 'v4', // Ensures proper authentication
});

// Ensure the bucket name is set
const BUCKET_NAME = process.env.AWS_BUCKET_NAME || 'newswebsite-uploads';

export const uploadFileToS3 = async (file) => {
  if (!BUCKET_NAME) {
    throw new Error("AWS_BUCKET_NAME is not set");
  }

  const params = {
    Bucket: BUCKET_NAME,
    Key: `uploads/${Date.now()}_${file.name}`,
    Body: file,
    ContentType: file.type,
  };

  try {
    const { Location } = await s3.upload(params).promise();
    return Location; // Returns the uploaded file's URL
  } catch (error) {
    console.error("Error uploading to S3: ", error);
    throw error;
  }
};
