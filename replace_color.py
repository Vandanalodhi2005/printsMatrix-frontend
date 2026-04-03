import os
import re

directory = r'd:\TechnoSky_Official\printsMatrix\frontend\src'
old_color = '#024ad8'
new_color = '#0075be'

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith(('.jsx', '.css')):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if old_color in content:
                new_content = content.replace(old_color, new_color)
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated: {path}")
