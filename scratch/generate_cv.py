from fpdf import FPDF

class PDF(FPDF):
    def __init__(self):
        super().__init__()
        self.accent_color = (44, 62, 80) # Midnight Blue
        self.highlight_color = (52, 152, 219) # Azure Blue
        self.base_text_color = (60, 60, 60)
        self.set_auto_page_break(auto=True, margin=15)

    def header(self):
        # Header background
        self.set_fill_color(*self.accent_color)
        self.rect(0, 0, 210, 55, 'F')
        
        # Name
        self.set_y(15)
        self.set_font('Arial', 'B', 24)
        self.set_text_color(255, 255, 255)
        self.cell(0, 12, 'NANYANZI DEBORAH', 0, 1, 'C')
        
        # Role
        self.set_font('Arial', '', 14)
        self.cell(0, 8, 'Software Engineer', 0, 1, 'C')
        
        # Contact info line
        self.set_font('Arial', '', 10)
        self.ln(2)
        contact = "0754739637  |  deborahrahj20@gmail.com  |  Kampala, Uganda"
        self.cell(0, 5, contact, 0, 1, 'C')
        
        # Links
        links = "GitHub: github.com/debbyra  |  LinkedIn: linkedin.com/in/deborah-nanyanzi-3a38a8288"
        self.cell(0, 5, links, 0, 1, 'C')
        
        portfolio = "Portfolio: deborah-nanyanzi.netlify.app"
        self.cell(0, 5, portfolio, 0, 1, 'C')
        
        self.set_y(65)

    def section_title(self, title):
        self.ln(4)
        self.set_font('Arial', 'B', 13)
        self.set_text_color(*self.accent_color)
        
        # Section title with a nice left border
        self.set_fill_color(*self.highlight_color)
        self.rect(10, self.get_y(), 2, 8, 'F')
        self.set_x(15)
        self.cell(0, 8, title, 0, 1, 'L')
        
        # Underline
        self.set_draw_color(*self.highlight_color)
        self.set_line_width(0.3)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(3)

    def body_text(self, text, bold=False):
        self.set_x(12)
        r, g, b = self.base_text_color
        self.set_text_color(r, g, b)
        if bold:
            self.set_font('Arial', 'B', 10)
        else:
            self.set_font('Arial', '', 10)
        self.multi_cell(0, 5, text)
        self.ln(1)

    def experience_header(self, title, location, date):
        self.set_x(12)
        self.set_font('Arial', 'B', 11)
        self.set_text_color(40, 40, 40)
        self.cell(0, 6, title, 0, 0, 'L')
        self.set_font('Arial', 'I', 10)
        self.set_text_color(100, 100, 100)
        self.cell(0, 6, f"{location} | {date}", 0, 1, 'R')
        self.ln(1)

def create_cv():
    pdf = PDF()
    pdf.add_page()
    
    # Professional Summary
    pdf.section_title('PROFESSIONAL SUMMARY')
    summary = ("Software engineer passionate about building scalable backend systems and seamless user experiences. "
               "I write code that solves real problems - whether integrating payment gateways, automating workflows, "
               "or designing intuitive interfaces. My work is driven by a simple belief: technology should remove "
               "friction, not create it. I thrive on turning complex requirements into clean, maintainable solutions "
               "that empower learners, instructors, and administrators to focus on what truly matters.")
    pdf.body_text(summary)
    
    # Core Competencies
    pdf.section_title('CORE COMPETENCIES')
    pdf.body_text("Backend: Django, Django REST Framework, Python, PostgreSQL, Celery, Redis", bold=True)
    pdf.body_text("Frontend: React, HTML5, CSS3, JavaScript, Responsive Design", bold=True)
    pdf.body_text("APIs & Integration: RESTful APIs, JWT Authentication, Webhooks, Third-party Integrations (Flutterwave, Zoom, Google Meet, Microsoft Teams)", bold=True)
    pdf.body_text("Tools & Workflow: Git, GitHub, VS Code, Postman, Docker (basics), Celery", bold=True)

    # Technical Experience
    pdf.section_title('TECHNICAL EXPERIENCE')
    pdf.experience_header("Software Engineer (Backend Focus)", "Refactory, Kampala", "2025 - Present")
    pdf.body_text("Intensive software development program focused on real-world applications. Collaborated on team projects to design, build, and deploy production-ready systems.")
    pdf.body_text("- Engineered a full-featured Learning Management System (LMS) backend supporting 5 user roles, course management, and livestream integrations.")
    pdf.body_text("- Integrated multiple payment providers (Flutterwave) with webhook handling and automatic invoice generation.")
    pdf.body_text("- Built asynchronous report generation using Celery and Redis, delivering 6 report types with CSV export.")
    pdf.body_text("- Designed RESTful APIs with Django REST Framework, serving both web and mobile clients.")
    pdf.body_text("- Implemented role-based access control (RBAC) with granular permissions for Super Admin, TASC Admin, LMS Manager, Instructor, Learner, and Finance roles.")
    pdf.body_text("- Integrated third-party video platforms (Zoom, Google Meet, Microsoft Teams) for automatic meeting creation and attendance tracking.")
    pdf.body_text("- Automated certificate generation and verification system upon course completion.")
    
    # Projects
    pdf.section_title('PROJECT HIGHLIGHTS')
    pdf.body_text("TASC Learning Management System (LMS) - Online Learning Platform", bold=True)
    pdf.body_text("- Course Management: Full CRUD operations with hierarchical categories, search, filtering, and ordering.")
    pdf.body_text("- Livestream Integration: Auto-generated meeting links for Zoom / Google Meet / Teams with attendance tracking.")
    pdf.body_text("- Payment Processing: Flutterwave integration with multiple currencies, webhook handling, and automatic invoicing.")
    pdf.body_text("- Quiz System: Complete submission and grading system with answer tracking and analytics.")
    pdf.body_text("- Certificate Engine: Auto-generated PDF certificates with unique IDs and QR code verification.")
    pdf.body_text("- Tech Stack: Django, DRF, PostgreSQL, Celery, Redis, Flutterwave API, Zoom API, Google Meet API, Microsoft Teams API")

    # Education
    pdf.section_title('DIPLOMA & CONTINUING EDUCATION')
    pdf.body_text("Diploma in Computer Science", bold=True)
    pdf.body_text("Focus Areas: Fundamentals of Programming, Web Technologies, Database Basics, Problem Solving, User-Centered System Design, Computer Systems.")

    # Work Ethics
    pdf.section_title('WORK ETHICS & APPROACH')
    pdf.body_text("\"I write code that serves people.\"", bold=True)
    pdf.body_text("- Empathy First: Understanding user needs before writing a single line of code.")
    pdf.body_text("- Clean by Default: Readable, maintainable, and well-documented code is not optional.")
    pdf.body_text("- Continuous Growth: Every project is an opportunity to learn something new.")

    pdf.output('public/Deborah_Nanyanzi_CV.pdf')

if __name__ == '__main__':
    create_cv()
