let job_posting

chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "JOB_DATA") {
        job_posting = message.job_posting
    }
})


// Gets the active tab ID, and the domain of the current webpage.
chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    const tabId = tabs[0].id
    const domain = new URL(tabs[0].url).hostname

    if (domain.endsWith("linkedin.com")) {
        await chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["job-sites/linkedin.js"]
        })

    } else if (domain.endsWith("icims.com")) {
        const response = await fetch("http://127.0.0.1:8000/personal")
        const personal = await response.json();

        await chrome.tabs.sendMessage(tabId, {
            type: "PERSONAL",
            personal: personal
        })
    }
})


// Sends job data to the local Python backend as a POST request.
async function sendData(data) {
    await fetch("http://127.0.0.1:8000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
}

// Handles button clicks by specifying the requested action and sending the job data.
document.getElementById("generateLetter").addEventListener("click", () => {
    job_posting.action = "generateLetter"
    sendData(job_posting)
})

document.getElementById("logToSpreadsheet").addEventListener("click", () => {
    job_posting.action = "logToSpreadsheet"
    sendData(job_posting)
})