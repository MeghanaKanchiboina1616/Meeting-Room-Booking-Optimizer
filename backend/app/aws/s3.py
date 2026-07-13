import boto3

s3 = boto3.client("s3")

BUCKET_NAME = "smart-meeting-room-files-2026"

def upload_file(local_path: str, s3_key: str):

    s3.upload_file(
        local_path,
        BUCKET_NAME,
        s3_key,
    )

    return s3_key