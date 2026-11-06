# Job Application Assistant

A Python-based application that streamlines the job application process by extracting information from job postings, generating tailored application materials, and organizing application details.

The project combines a Chrome extension with a Python backend and Google API integrations to reduce repetitive tasks involved in applying for jobs.

## Overview

The Job Application Assistant is designed to simplify several parts of the job application process. A Chrome extension extracts relevant information from job-posting webpages and sends it to a Python backend for processing. The application then uses this information to prepare tailored cover letters and organize application details through Google Docs and Google Sheets.

The project focuses on application development, browser integration, API communication, and workflow automation.

## Features

- **Job Posting Extraction:** Chrome extension retrieves relevant information from job postings, including the company, position, location, and job description.
- **Cover Letter Generation:** Uses extracted job information and stored candidate background information to prepare tailored cover letters.
- **Google Docs Integration:** Creates and updates cover-letter documents using the Google Docs API.
- **Google Sheets Integration:** Organizes job application information in a spreadsheet to help track applications.
- **Browser Integration:** Connects Chrome extension functionality with the Python backend to process information directly from job-posting webpages.
- **Local Language Model Integration:** Uses Ollama to run a locally hosted language model for generating tailored text.

## Technologies

| Technology | Purpose |
|---|---|
| Python | Backend development and application logic |
| FastAPI | Backend API and communication |
| JavaScript | Chrome extension functionality |
| Chrome Extensions API | Browser interaction and job-posting extraction |
| Google Docs API | Cover-letter document integration |
| Google Sheets API | Application tracking and organization |
| Ollama | Local language model integration |
| Git & GitHub | Version control and project development |

## How It Works

1. **Extract Job Information:** The Chrome extension retrieves relevant details from a job-posting webpage.
2. **Process Information:** The extracted information is sent to the Python backend for processing.
3. **Prepare Application Materials:** The application uses the job details and candidate background information to generate a tailored cover letter.
4. **Create Documents:** The Google Docs API is used to create or update the cover-letter document.
5. **Track Applications:** Relevant job information is added to a Google Sheets spreadsheet for application tracking.

## Development

This project is actively under development. I continue to add functionality, improve existing components, and refine the overall application workflow.

Current development focuses on improving job-posting extraction, refining Google API integrations, and making the application more reliable and easier to maintain.

## Future Improvements

- Expand compatibility with additional job-posting websites.
- Improve extraction accuracy and handling of different webpage layouts.
- Refine document creation and formatting.
- Improve error handling and backend reliability.
- Further streamline the application tracking process.
- Improve code organization and maintainability.

## Author

Developed as a personal software project to apply and expand my knowledge of Python, JavaScript, API integration, browser extensions, and application development.
