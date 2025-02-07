import AWS from 'aws-sdk';

// Configure AWS SDK using environment variables
AWS.config.update({
  accessKeyId: "AKIAWC4MDWITNOHIDTUT",
  secretAccessKey: "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",
  region: "ap-south-1"
});

const s3 = new AWS.S3();
const BUCKET_NAME = "newswebsite-uploads";

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
