import AWS from 'aws-sdk';

// Configure AWS SDK using environment variables
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();
const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;

export const uploadFileToS3 = async (file) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: `uploads/${Date.now()}_${file.name}`,
    Body: file,
    ContentType: file.type
  };

  try {
    const { Location } = await s3.upload(params).promise();
    return Location; // Returns the uploaded file's URL
  } catch (error) {
    console.error("Error uploading to S3: ", error);
    throw error;
  }
};
