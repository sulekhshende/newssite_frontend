import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
  accessKeyId: "YOUR_ACCESS_KEY",
  secretAccessKey: "YOUR_SECRET_KEY",
  region: "YOUR_AWS_REGION"
});

const s3 = new AWS.S3();
const BUCKET_NAME = "YOUR_S3_BUCKET_NAME";

export const uploadFileToS3 = async (file: File): Promise<string> => {
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
