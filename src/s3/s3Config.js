import AWS from 'aws-sdk';

console.log("AWS SDK Credentials Check:");
console.log("Access Key:", process.env.REACT_APP_AWS_ACCESS_KEY_ID);
console.log("Secret Key:", process.env.REACT_APP_AWS_SECRET_ACCESS_KEY ? "Exists" : "Missing");
console.log("Region:", process.env.REACT_APP_AWS_REGION);
console.log("Bucket Name:", process.env.REACT_APP_AWS_BUCKET_NAME);

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || '',
  region: process.env.REACT_APP_AWS_REGION || '',
  signatureVersion: 'v4',
});

export const uploadFileToS3 = async (file) => {
  if (!process.env.REACT_APP_AWS_ACCESS_KEY_ID || !process.env.REACT_APP_AWS_SECRET_ACCESS_KEY) {
    throw new Error("🚨 AWS credentials are missing!");
  }

  const params = {
    Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
    Key: `uploads/${Date.now()}_${file.name}`,
    Body: file,
    ContentType: file.type,
  };

  try {
    console.log("🟢 Uploading file to S3...");
    const { Location } = await s3.upload(params).promise();
    console.log("✅ File uploaded successfully:", Location);
    return Location;
  } catch (error) {
    console.error("❌ Error uploading to S3:", error);
    throw error;
  }
};
