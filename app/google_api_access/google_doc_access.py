from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

CREDENTIALS_FILE = BASE_DIR / "credentials.json"
TOKEN_FILE = BASE_DIR / "token.json"

SCOPES = [
    "https://www.googleapis.com/auth/documents",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/spreadsheets",
]


def google_doc_access(job):
    DOC_ID = "1Cx6W6RZd4ImSRS8PMCuEu0dEl7-DaI5qCHaFq5zaG7c"

    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CREDENTIALS_FILE, SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
    with open(TOKEN_FILE, "w") as token:
        token.write(creds.to_json())

    doc_service = build("docs", "v1", credentials=creds)
    drive_service = build("drive", "v3", credentials=creds)

    copied_doc = (
        drive_service.files()
        .copy(
            fileId=DOC_ID,
            body={"name": f"Cover Letter_{job["organization"]}_{job["title"]}"},
        )
        .execute()
    )
    copied_doc_id = copied_doc["id"]

    return doc_service, copied_doc_id
