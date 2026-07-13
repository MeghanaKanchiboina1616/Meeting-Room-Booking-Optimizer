import boto3

AWS_REGION = "us-east-1"

S3_BUCKET = "smart-meeting-room-files-2026"

s3 = boto3.client(
    "s3",
    region_name=AWS_REGION
)