import { TrendingUp, Users, DollarSign, FileText, ShieldCheck, BarChart3, BookOpen } from "lucide-react";

export const navLinks = [
    { label: "Homepage", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact Us", href: "#contact" },
];

export const heroFeatures = [
    { icon: TrendingUp, title: "Grow & Scale", desc: "Strategic financial planning to help your business grow and scale effectively in the Canadian market." },
    { icon: Users, title: "Understand Clients", desc: "Personalized services tailored to understand and meet your unique financial needs." },
    { icon: DollarSign, title: "Cost-Effective", desc: "Affordable accounting solutions without compromising on quality and accuracy." },
];

export const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "90%", label: "Satisfied Clients" },
    { value: "85%", label: "Problems Solved" },
    { value: "100+", label: "Expert Accountants" },
];

export const services = [
    { icon: FileText, title: "Tax Planning", desc: "Our tax planning services help you minimize your tax liabilities and maximize your returns with expert Canadian tax strategies.", benefits: ["T1 & T2 filing", "CRA audit support", "Tax-saving strategies"] },
    { icon: ShieldCheck, title: "Audit Services", desc: "Comprehensive audit services to ensure your financial statements are accurate and compliant with Canadian regulations.", benefits: ["Review engagements", "Compliance checks", "Risk assessment"] },
    { icon: BarChart3, title: "Tax Strategy", desc: "Strategic tax planning solutions designed to optimize your financial position and support long-term growth.", benefits: ["Corporate restructuring", "Tax deferral", "Investment planning"] },
    { icon: BookOpen, title: "Bookkeeping", desc: "Professional bookkeeping services to keep your financial records organized, accurate, and up-to-date.", benefits: ["Monthly reconciliation", "Cloud accounting", "Expense tracking"] },
];

export const teamMembers = [
    { img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop", name: "Ryan Collin", role: "Senior Accountant" },
    { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop", name: "Rihanna Cloudy", role: "Budget Analyst" },
    { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop", name: "Abraham Deanz", role: "Tax Expert" },
];

export const plans = [
    { name: "Starter", price: "$49", features: ["Personal tax filing", "Basic bookkeeping", "Quarterly reviews", "Email support", "GST/HST filing"], popular: false },
    { name: "Professional", price: "$90", features: ["Corporate tax filing", "Full bookkeeping", "Monthly reviews", "Priority support", "Financial statements"], popular: true },
    { name: "Enterprise", price: "$129", features: ["All Professional features", "Audit services", "Tax strategy planning", "Dedicated advisor", "Year-round support"], popular: false },
];

export const faqs = [
    { q: "What services does MHE Accounting offer?", a: "We offer a full range of accounting services including tax planning, bookkeeping, audit services, financial consulting, payroll processing, and GST/HST filing for individuals and businesses across Canada." },
    { q: "What is the accounting cycle?", a: "The accounting cycle is the collective process of recording and processing all financial transactions of a company. It includes identifying, analyzing, and recording events, and is completed when the financial statements are prepared." },
    { q: "How do I choose the right accounting firm for my business?", a: "Look for a firm with experience in your industry, relevant certifications (CPA), transparent pricing, and a proven track record. MHE Accounting offers personalized consultations to understand your specific needs." },
    { q: "What qualifications should I look for in an accountant?", a: "Look for a Chartered Professional Accountant (CPA) designation, relevant industry experience, good communication skills, and a commitment to staying current with Canadian tax laws and regulations." },
    { q: "Do you handle both personal and corporate taxes?", a: "Yes, MHE Accounting provides comprehensive tax services for both individuals and corporations, including tax planning, preparation, filing, and strategy optimization." },
];

export const testimonials = [
    { text: "Working with MHE Accounting has been a game-changer for our small business. Their meticulous attention to detail and proactive tax planning have saved us thousands.", name: "Sarah Laura", role: "Business Owner", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=150&auto=format&fit=crop" },
    { text: "MHE Accounting's team is incredibly professional and responsive. They've helped us navigate complex Canadian tax regulations with ease and confidence.", name: "Thomas Roy", role: "CEO, TechStart Inc.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
];

export const posts = [
    { img: "https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=600&auto=format&fit=crop", date: "09 July", title: "Navigating Tax Season: Essential Tips for Small Businesses", desc: "Learn the key strategies to prepare for tax season and maximize your deductions." },
    { img: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=600&auto=format&fit=crop", date: "15 Aug", title: "The Future of Blockchain in Accounting: Opportunities and Challenges", desc: "Explore how blockchain technology is transforming the accounting industry." },
    { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", date: "22 Sep", title: "How AI is Revolutionizing Financial Reporting and Analysis", desc: "Discover the impact of artificial intelligence on modern financial practices." },
];
