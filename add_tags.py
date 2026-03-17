import json
import re

file_path = "c:\\Users\\redmi\\Downloads\\# new downloads\\fromGit\\jslr\\data\\javascript.js"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

json_str = content.replace("export const javascriptCourse = ", "").strip()
json_str = json_str.removesuffix(";")

data = json.loads(json_str)

for section in data.get("sections", []):
    section_id = section.get("id", "")
    for lesson in section.get("lessons", []):
        tags = set()
        if section_id:
            tags.add(section_id)
        
        slug = lesson.get("slug", "")
        for word in slug.split("-"):
            if len(word) > 3:
                tags.add(word)
                
        if "function" in slug or "arrow" in slug: tags.add("functions")
        if "object" in slug: tags.add("objects")
        if "array" in slug: tags.add("arrays")
        if "class" in slug: tags.add("classes")
        if "promise" in slug or "async" in slug: tags.add("async")
        if "dom" in slug or "document" in slug: tags.add("dom")
        if "event" in slug: tags.add("events")
        
        lesson["tags"] = list(tags)

new_json_str = json.dumps(data, indent=2)
new_content = f"export const javascriptCourse = {new_json_str};\n"

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Tags successfully injected!")
