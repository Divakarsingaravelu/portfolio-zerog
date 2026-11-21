from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
import os
import shutil

pdf_path = 'public/Divakar_Singaravelu_Resume.pdf'
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=36,
    rightMargin=36,
    topMargin=32,
    bottomMargin=32
)

styles = getSampleStyleSheet()

header_name = ParagraphStyle(
    'HeaderName',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    alignment=1,
    textColor=colors.HexColor('#000000'),
    spaceAfter=3
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11.5,
    alignment=1,
    textColor=colors.HexColor('#1f2937'),
    spaceAfter=2
)

subtitle_style = ParagraphStyle(
    'SubtitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=10,
    leading=13,
    alignment=1,
    textColor=colors.HexColor('#1e40af'),
    spaceAfter=6
)

section_title = ParagraphStyle(
    'SectionTitle',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=10.5,
    leading=13.5,
    textColor=colors.HexColor('#1e40af'),
    spaceBefore=5,
    spaceAfter=2
)

body = ParagraphStyle(
    'Body',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11.5,
    textColor=colors.HexColor('#1f2937'),
    spaceAfter=2
)

bullet = ParagraphStyle(
    'Bullet',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.2,
    leading=11,
    textColor=colors.HexColor('#374151'),
    leftIndent=10,
    spaceAfter=1.5
)

elements = []

elements.append(Paragraph('DIVAKAR S', header_name))
elements.append(Paragraph('divakarsingaravelu@gmail.com | 9786388241 | Tiruvannamalai, Tamil Nadu, 604601 | <a href="https://www.linkedin.com/in/divakarsingaravelu/"><u>LinkedIn</u></a> | <a href="https://github.com/divakarsingaravelu"><u>GitHub</u></a>', contact_style))
elements.append(Paragraph('Full Stack Developer | Web Developer | Software Developer', subtitle_style))

def add_section(title):
    elements.append(Paragraph(title, section_title))
    elements.append(HRFlowable(width='100%', thickness=0.75, color=colors.HexColor('#1e40af'), spaceBefore=1, spaceAfter=3))

# Professional Summary
add_section('PROFESSIONAL SUMMARY')
elements.append(Paragraph('Detail-oriented Software Developer pursuing a B.E. in Computer Science Engineering with a strong foundation in building responsive, full-stack web applications. Proficient in JavaScript, React, TypeScript, Python, Java, Node.js, REST API integration, and SQL/SQLite databases. Proven ability to deliver optimized, user-centric software solutions through two industry internships, hands-on technical projects, NxtWave CCBP 4.0 academy training, and competitive hackathon participation.', body))

# Education
add_section('EDUCATION')
edu_table_data = [
    [Paragraph('<b>B.E. – Computer Science Engineering</b><br/>Adhi College of Engineering and Technology, Anna University, Kanchipuram | CGPA: 7.5', body),
     Paragraph('<div align="right"><b>2023 – 2027</b></div>', body)],
    [Paragraph('<b>Intermediate (MBIPC)</b><br/>Government Boys Higher Secondary School, Tiruvannamalai | 72%', body),
     Paragraph('<div align="right"><b>2020 – 2023</b></div>', body)]
]
t = Table(edu_table_data, colWidths=[430, 110])
t.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0)
]))
elements.append(t)

# Skills
add_section('SKILLS')
elements.append(Paragraph('<b>Languages:</b> JavaScript, TypeScript, Python, Java, C, SQL', body))
elements.append(Paragraph('<b>Front-End:</b> React 18, HTML, CSS, Bootstrap, Tailwind CSS, TanStack Query, Responsive Web Design (Flexbox)', body))
elements.append(Paragraph('<b>Back-End & APIs:</b> Node.js, REST API Integration, Fetch API', body))
elements.append(Paragraph('<b>Databases:</b> SQLite, SQL, Relational Database Schema Design, Row-Level Security', body))
elements.append(Paragraph('<b>Soft Skills:</b> Rapid Problem-Solving, Cross-functional Collaboration, Time Management, Adaptability', body))
elements.append(Paragraph('<b>Certifications:</b> AI-Powered Workflows – Make.com (Feb 2026) | Internet of Things (IoT) Two-Day Workshop | NxtWave CCBP 4.0 Academy: Responsive Web Design Using Flexbox (Jun 2026), Build Your Own Dynamic Web Application (Mar 2026), Programming Foundations with Python (Nov 2025)', body))

# Internship Experience
add_section('INTERNSHIP EXPERIENCE')
exp_table_data1 = [
    [Paragraph('<b>Web Development Intern – Happieloop Technologies</b>', body), Paragraph('<div align="right"><b>Oct 2026 – Nov 2026</b></div>', body)]
]
t1 = Table(exp_table_data1, colWidths=[420, 120])
t1.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1)
]))
elements.append(t1)
elements.append(Paragraph('&bull; Completed a Web Development internship (9 Oct 2026 – 8 Nov 2026; Certificate ID: HP2610500).', bullet))
elements.append(Paragraph('&bull; Applied web development fundamentals to build and refine responsive interfaces and web application components.', bullet))

exp_table_data2 = [
    [Paragraph('<b>Full Stack Development Intern – Thiranex</b>', body), Paragraph('<div align="right"><b>Sep 2026 – Oct 2026</b></div>', body)]
]
t2 = Table(exp_table_data2, colWidths=[420, 120])
t2.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ('TOPPADDING', (0,0), (-1,-1), 3)
]))
elements.append(t2)
elements.append(Paragraph('&bull; Successfully completed a Full Stack Development internship (6 Sep 2026 – 5 Oct 2026; Certificate ID: THX-SEP0626-293).', bullet))
elements.append(Paragraph('&bull; Gained hands-on experience across frontend, backend, and database integration in full-stack web development.', bullet))

# Projects
add_section('PROJECTS')
p_table_data1 = [
    [Paragraph('<b>MenuBase – Multi-Platform Menu Management SaaS</b> (React 18, TypeScript, Tailwind CSS, TanStack Query)', body), Paragraph('<div align="right"><i>Personal Project</i></div>', body)]
]
tp1 = Table(p_table_data1, colWidths=[430, 110])
tp1.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1)
]))
elements.append(tp1)
elements.append(Paragraph('&bull; Built a full-stack SaaS platform centralizing menu, pricing, and stock management for cloud kitchens, eliminating manual re-entry and reducing sync errors.', bullet))
elements.append(Paragraph('&bull; Developed the frontend with React 18, TypeScript, and Tailwind CSS, using TanStack Query for server-state management with instant user feedback.', bullet))
elements.append(Paragraph('&bull; Designed a relational database schema with Row-Level Security on every table and integrated an AI-powered description generator to speed up menu creation.', bullet))

p_table_data2 = [
    [Paragraph('<b>Wikipedia Search Application</b> (HTML, CSS, Bootstrap, JavaScript, Fetch API)', body), Paragraph('<div align="right"><i>Academic Project</i></div>', body)]
]
tp2 = Table(p_table_data2, colWidths=[430, 110])
tp2.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ('TOPPADDING', (0,0), (-1,-1), 3)
]))
elements.append(tp2)
elements.append(Paragraph('&bull; Engineered a dynamic Wikipedia search application using asynchronous JavaScript (Fetch API) to execute real-time REST API GET requests.', bullet))
elements.append(Paragraph('&bull; Designed an intuitive, mobile-first responsive UI with HTML, CSS, and Bootstrap, optimizing layout and load performance for fast data retrieval.', bullet))

doc.build(elements)
print('PDF generated successfully. Size:', os.path.getsize(pdf_path))

os.makedirs('dist', exist_ok=True)
shutil.copyfile(pdf_path, 'dist/Divakar_Singaravelu_Resume.pdf')
print('Copied to dist successfully.')
