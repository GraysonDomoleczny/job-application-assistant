from fastapi import FastAPI
from app.google_api_access.google_doc_access import google_doc_access
from app.google_api_access.google_sheet_access import google_sheet_access
from app.ollama_generation import ollama_generation
import webbrowser
from datetime import date
from dotenv import load_dotenv
import os


def cover_letter_updates(job, doc_id, doc_service):
    description, key_words = ollama_generation(job["description"])

    # insert description
    doc_service.documents().batchUpdate(
        documentId=doc_id,
        body={
            "requests": [
                {"insertText": {"location": {"index": 275}, "text": description}}
            ]
        },
    ).execute()

    # insert title
    doc_service.documents().batchUpdate(
        documentId=doc_id,
        body={
            "requests": [
                {"deleteContentRange": {"range": {"startIndex": 242, "endIndex": 256}}},
                {"insertText": {"location": {"index": 242}, "text": job["title"]}},
            ]
        },
    ).execute()

    # insert location
    doc_service.documents().batchUpdate(
        documentId=doc_id,
        body={
            "requests": [
                {"deleteContentRange": {"range": {"startIndex": 222, "endIndex": 236}}},
                {"insertText": {"location": {"index": 222}, "text": job["location"]}},
            ]
        },
    ).execute()

    # insert address if exists
    if job["address"] != "Not Found":
        doc_service.documents().batchUpdate(
            documentId=doc_id,
            body={
                "requests": [
                    {
                        "deleteContentRange": {
                            "range": {"startIndex": 207, "endIndex": 221}
                        }
                    },
                    {
                        "insertText": {
                            "location": {"index": 207},
                            "text": job["address"],
                        }
                    },
                ]
            },
        ).execute()

    # delete address if not exists
    else:
        doc_service.documents().batchUpdate(
            documentId=doc_id,
            body={
                "requests": [
                    {
                        "deleteContentRange": {
                            "range": {"startIndex": 207, "endIndex": 222}
                        }
                    },
                ]
            },
        ).execute()

    # insert organization
    doc_service.documents().batchUpdate(
        documentId=doc_id,
        body={
            "requests": [
                {"deleteContentRange": {"range": {"startIndex": 194, "endIndex": 206}}},
                {
                    "insertText": {
                        "location": {"index": 194},
                        "text": job["organization"],
                    }
                },
            ]
        },
    ).execute()

    # insert todays date
    date_today = date.today().strftime("%B %d, %Y")
    doc_service.documents().batchUpdate(
        documentId=doc_id,
        body={
            "requests": [
                {"deleteContentRange": {"range": {"startIndex": 177, "endIndex": 193}}},
                {"insertText": {"location": {"index": 177}, "text": date_today}},
            ]
        },
    ).execute()

    # insert key words
    doc_service.documents().batchUpdate(
        documentId=doc_id,
        body={
            "requests": [
                {"deleteContentRange": {"range": {"startIndex": 20, "endIndex": 51}}},
                {"insertText": {"location": {"index": 20}, "text": key_words}},
            ]
        },
    ).execute()


load_dotenv()
app = FastAPI()


@app.get("/personal")
def get_personal():
    return {
        "username": os.getenv("JOB_USERNAME"),
        "password": os.getenv("JOB_PASSWORD"),
        "address1": os.getenv("JOB_ADDRESS_1"),
        "address2": os.getenv("JOB_ADDRESS_2"),
        "city": os.getenv("JOB_CITY"),
        "zipcode": os.getenv("JOB_ZIPCODE"),
    }


@app.post("/")
async def recieve_job(job: dict):
    if job["action"] == "generateLetter":
        doc_service, doc_id = google_doc_access(job)

        webbrowser.open(f"https://docs.google.com/document/d/{doc_id}/edit")

        cover_letter_updates(job, doc_id, doc_service)

    if job["action"] == "logToSpreadsheet":
        sheet_service, sheet_id = google_sheet_access()

        sheet_service.spreadsheets().values().append(
            spreadsheetId=sheet_id,
            range="Sheet1!A:B",
            valueInputOption="USER_ENTERED",
            insertDataOption="INSERT_ROWS",
            body={"values": [[job["organization"], job["title"]]]},
        ).execute()
