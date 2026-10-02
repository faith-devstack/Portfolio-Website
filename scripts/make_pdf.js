import fs from 'fs';
import path from 'path';

function buildPdf() {
  // Construct standard valid PDF 1.4
  const lines = [
    'BT',
    '/F1 20 Tf',
    '50 745 Td',
    '(FAITH ABEJIDE TIJESUNIMI) Tj',
    '/F2 10 Tf',
    '0 -16 Td',
    '(FULL-STACK DEVELOPER  |  LAGOS & MINNA, NIGERIA) Tj',
    '/F3 8.5 Tf',
    '0 -14 Td',
    '(Email: abejidefaith110@gmail.com  |  WhatsApp: +234 707 929 9531  |  Calls: +234 701 157 5214) Tj',
    '0 -12 Td',
    '(Portfolio: https://portfolio-website-ten-omega-74.vercel.app/  |  X / Twitter: @faithbuilds001) Tj',
    
    // Line separator
    'ET',
    '0.18 0.64 0.60 rg', // Teal accent
    '50 690 512 1.5 re',
    'f',
    
    'BT',
    // SECTION: PROFESSIONAL PROFILE
    '0 0 0 rg',
    '/F2 11 Tf',
    '50 670 Td',
    '(PROFESSIONAL PROFILE) Tj',
    '/F3 9 Tf',
    '0 -14 Td',
    '(Full-stack developer with nearly two years of experience, including client project work, and a 200-level) Tj',
    '0 -12 Td',
    '(Mechatronics Engineering student at the Federal University of Technology, Minna. Builds responsive web) Tj',
    '0 -12 Td',
    '(applications with the MERN stack and works with TypeScript, Firebase, Drizzle ORM, Supabase and) Tj',
    '0 -12 Td',
    '(PostgreSQL. Driven by creating reliable digital products and exploring practical AI integration.) Tj',
    
    // SECTION: TECHNICAL SKILLS
    '/F2 11 Tf',
    '0 -22 Td',
    '(TECHNICAL SKILLS) Tj',
    '/F2 9 Tf',
    '0 -14 Td',
    '(Languages & Frameworks: ) Tj',
    '/F3 9 Tf',
    '125 0 Td',
    '(JavaScript (ES6+), TypeScript, React, Next.js, Node.js, Express.js) Tj',
    '-125 -13 Td',
    '/F2 9 Tf',
    '(Web & Motion: ) Tj',
    '/F3 9 Tf',
    '125 0 Td',
    '(Vite, Tailwind CSS, GSAP, Framer Motion, HTML5/CSS3, Lucide React) Tj',
    '-125 -13 Td',
    '/F2 9 Tf',
    '(Data & Services: ) Tj',
    '/F3 9 Tf',
    '125 0 Td',
    '(MongoDB, Firebase (Auth/Firestore), Supabase, PostgreSQL, Drizzle ORM, REST APIs) Tj',
    
    // SECTION: SELECTED PROJECTS
    '-125 -22 Td',
    '/F2 11 Tf',
    '(SELECTED PROJECTS) Tj',
    
    // Blue Cabana
    '/F2 9.5 Tf',
    '0 -15 Td',
    '(BLUCABANA  |  Frontend & Motion Engineer) Tj',
    '/F3 8.5 Tf',
    '0 -12 Td',
    '(Stack: React, TypeScript, Tailwind CSS, GSAP, Framer Motion, Lucide React) Tj',
    '0 -11 Td',
    '(Live: https://blucabana-website-3lsyfw1jv-faith-devstacks-projects.vercel.app/) Tj',
    '0 -11 Td',
    '(- Premium coffee and restaurant hospitality website concept focused on immersive visual storytelling.) Tj',
    '0 -11 Td',
    '(- Engineered scroll-scrubbed frame-based hero reveal sequence and cinematic visual reveals.) Tj',
    
    // SubTrack
    '/F2 9.5 Tf',
    '0 -16 Td',
    '(SUBTRACK  |  Full-Stack Subscription Management App) Tj',
    '/F3 8.5 Tf',
    '0 -12 Td',
    '(Stack: React, TypeScript, Vite, Tailwind CSS, Firebase Auth & Firestore) Tj',
    '0 -11 Td',
    '(Live: https://sub-track-alpha.vercel.app/) Tj',
    '0 -11 Td',
    '(- Centralized dashboard for tracking recurring expenses, renewal timelines, and monthly spending.) Tj',
    '0 -11 Td',
    '(- Built custom subscription lifecycle manager, category filtering, and analytics summaries.) Tj',
    
    // PACE E-Commerce
    '/F2 9.5 Tf',
    '0 -16 Td',
    '(PACE  |  Full-Stack E-Commerce Platform) Tj',
    '/F3 8.5 Tf',
    '0 -12 Td',
    '(Stack: React, Node.js, Express, MongoDB, REST APIs) Tj',
    '0 -11 Td',
    '(Live: https://dr-tee-frontend.onrender.com/) Tj',
    '0 -11 Td',
    '(- Full-stack shopping application with persistent cart storage, checkout pipeline, and status tracking.) Tj',
    '0 -11 Td',
    '(- Designed modular REST endpoints for catalog queries and real-time inventory checks.) Tj',
    
    // SECTION: EDUCATION
    '-0 -22 Td',
    '/F2 11 Tf',
    '(EDUCATION) Tj',
    '/F2 9.5 Tf',
    '0 -14 Td',
    '(Federal University of Technology, Minna (FUT Minna)  |  Expected: 2029) Tj',
    '/F3 9 Tf',
    '0 -12 Td',
    '(B.Eng. in Mechatronics Engineering (200 Level)  |  Lagos & Minna, Nigeria) Tj',
    
    // SECTION: ADDITIONAL
    '0 -20 Td',
    '/F2 11 Tf',
    '(ADDITIONAL INFORMATION & INTERESTS) Tj',
    '/F3 9 Tf',
    '0 -13 Td',
    '(Technical Interests: Scalable full-stack web applications, AI integration, robotic systems & automation.) Tj',
    '0 -12 Td',
    '(Communication: Fluent in English  |  Availability: Open for Junior / Mid Full-Stack Roles and Projects.) Tj',
    'ET'
  ];

  const streamContent = lines.join('\n');
  const streamLength = Buffer.byteLength(streamContent);

  const objects = [
    `%PDF-1.4\n`,
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R >>\nendobj\n`,
    `4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`,
    `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`,
    `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
    `7 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj\n`
  ];

  // Calculate offsets for xref table
  let currentOffset = 0;
  const offsets = [];
  let pdfData = objects[0];
  currentOffset += Buffer.byteLength(objects[0]);

  for (let i = 1; i < objects.length; i++) {
    offsets.push(currentOffset);
    pdfData += objects[i];
    currentOffset += Buffer.byteLength(objects[i]);
  }

  const startXref = currentOffset;
  let xref = `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (const off of offsets) {
    xref += String(off).padStart(10, '0') + ` 00000 n \n`;
  }
  xref += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF\n`;

  pdfData += xref;

  fs.writeFileSync('public/resume.pdf', pdfData);
  fs.writeFileSync('public/Faith_Abejide_Resume.pdf', pdfData);
  console.log('Successfully generated public/resume.pdf and public/Faith_Abejide_Resume.pdf');
}

buildPdf();
