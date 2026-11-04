(() => {
    // placeholder - address doesnt show on LinkedIn main page
    const address = document.querySelector('asdasdasdasdasd')?.innerText ?? "Not Found"

    const description = document.querySelector('[data-testid="expandable-text-box"]')?.innerText ?? "Not Found"

    // Breaks apart data and finds index where location is present then extracts location from string
    const locationInfo = document.querySelector('[data-sdui-screen]')?.innerText ?? ""
    const locationSegment = locationInfo.split("\n\n").find(line => line.includes("people clicked apply"))
    const location = locationSegment?.split(/[·]/)[0].trim() ?? "Not Found"

    const organization = document.querySelector('[aria-label^="Company, "]')?.innerText ?? "Not Found"
    const title = document.querySelector('[href*="/jobs/view/"]')?.innerText ?? "Not Found"

    chrome.runtime.sendMessage({
        type: "JOB_DATA",
        job_posting: {
            address,
            description,
            location,
            organization,
            title
        }
    })
})()