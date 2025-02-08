import AWS from 'aws-sdk';

// Ensure the bucket name is set
const BUCKET_NAME = process.env.REACT_APP_AWS_BUCKET_NAME || 'newswebsite-uploads';

export const uploadFileToS3 = async (file) => {
  if (!BUCKET_NAME) {
    throw new Error("AWS_BUCKET_NAME is not set");
  }

  // 🔹 Configure AWS SDK inside the function to ensure credentials are loaded at runtime
  const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || '',
    region: process.env.REACT_APP_AWS_REGION || '',
    signatureVersion: 'v4',
  });

  const params = {
    Bucket: BUCKET_NAME,
    Key: `uploads/${Date.now()}_${file.name}`,
    Body: file,
    ContentType: file.type,
  };

  try {
    const { Location } = await s3.upload(params).promise();
    console.log("File uploaded successfully: ", Location);
    return Location; // Returns the uploaded file's URL
  } catch (error) {
    console.error("Error uploading to S3: ", error);
    throw error;
  }
};
