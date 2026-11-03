import requests


def ollama_generation(job_description):
    with open(
        "prompt-instructions/candidate_background.txt", "r", encoding="utf-8"
    ) as file:
        candidate_background = file.read()

    with open(
        "prompt-instructions/cover_letter_structure.txt", "r", encoding="utf-8"
    ) as file:
        cover_letter_structure = file.read()

    with open("prompt-instructions/writing_style.txt", "r", encoding="utf-8") as file:
        writing_style = file.read()

    with open("prompt-instructions/key_words.txt", "r", encoding="utf-8") as file:
        key_words = file.read()

    description_response = requests.post(
        "http://localhost:11434/api/chat",
        json={
            "model": "qwen3.5:9b",
            "messages": [
                {
                    "role": "system",
                    "content": f"{candidate_background}\n\n{cover_letter_structure}\n\n{writing_style}",
                },
                {
                    "role": "user",
                    "content": f"JOB DESCRIPTION:\n\n{job_description}\n\nWrite a tailored cover letter for this position.",
                },
            ],
            "think": False,
            "stream": False,
            "options": {"temperature": 0.2, "num_ctx": 8192, "num_predict": 500},
        },
    )

    key_words_response = requests.post(
        "http://localhost:11434/api/chat",
        json={
            "model": "qwen3.5:9b",
            "messages": [
                {"role": "system", "content": f"{key_words}\n\n{candidate_background}"},
                {
                    "role": "user",
                    "content": f"JOB DESCRIPTION:\n\n{job_description}\n\nSelect exactly three relevant keywords.",
                },
            ],
            "think": False,
            "stream": False,
            "options": {"temperature": 0.2, "num_ctx": 8192, "num_predict": 500},
        },
    )

    return (
        description_response.json()["message"]["content"].replace("\n\n", "\n").strip(),
        key_words_response.json()["message"]["content"].strip(),
    )
