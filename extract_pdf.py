import fitz  # PyMuPDF
import os

pdf_path = "public/Advaita _20260313_114914_0000.pdf"
output_dir = "public/photos/pdf"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"PDF has {len(doc)} pages")

for page_num in range(len(doc)):
    page = doc[page_num]
    # Render page as image at 2x resolution for quality
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
    output_path = os.path.join(output_dir, f"advaita-page-{page_num + 1}.png")
    pix.save(output_path)
    print(f"Saved page {page_num + 1} as {output_path} ({pix.width}x{pix.height})")

doc.close()
print("Done!")
