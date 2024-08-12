import config
import os
from typing import Optional
from openai import OpenAI

cfg = config.Config(os.path.join(os.getcwd(), "keys.cfg"))
api_base_url: Optional[str] = cfg.get("OPENAI_API_BASE_URL", None)
client = OpenAI(api_key=cfg["OPENAI_API_KEY"], base_url=api_base_url)
response = client.chat.completions.create(
        messages=[{"content": "Say Hi", "role": "user"}],
    model="gpt-4-turbo-2024-04-09",
)
print("i am here")
print(type(response))