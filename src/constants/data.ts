export const personal = {
  name: 'Alex Carter',
  title: 'Creative Frontend Developer',
  subtitle: 'Building immersive digital experiences',
  bio: "I'm a passionate frontend developer with a love for crafting beautiful, performant web experiences. I blend design sensibility with technical precision to build products that feel alive.",
  email: 'alex@example.com',
  location: 'San Francisco, CA',
  available: true,
}

export const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 25, suffix: '+', label: 'Projects Completed' },
  { value: 15, suffix: '+', label: 'Happy Clients' },
]

export const skills = [
  { name: 'HTML',       level: 98, color: '#e34c26', icon: '🌐' },
  { name: 'CSS',        level: 95, color: '#264de4', icon: '🎨' },
  { name: 'JavaScript', level: 93, color: '#f7df1e', icon: '⚡' },
  { name: 'TypeScript', level: 88, color: '#3178c6', icon: '🔷' },
  { name: 'React',      level: 92, color: '#61dafb', icon: '⚛️' },
  { name: 'Tailwind',   level: 90, color: '#38bdf8', icon: '💨' },
  { name: 'Node.js',    level: 78, color: '#68a063', icon: '🟢' },
  { name: 'MongoDB',    level: 72, color: '#4db33d', icon: '🍃' },
  { name: 'GSAP',       level: 85, color: '#88ce02', icon: '🎬' },
  { name: 'Figma',      level: 80, color: '#f24e1e', icon: '🖌️' },
]

export const projects = [
  {
    id: 1,
    title: 'SaaS Dashboard',
    description: 'A comprehensive analytics dashboard with real-time data visualization, dark mode, and customizable widgets for modern SaaS products.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    live: '#', github: '#',
  },
  {
    id: 2,
    title: 'AI Landing Page',
    description: 'A stunning marketing landing page for an AI startup with animated hero, feature showcases, and conversion-optimized sections.',
    tags: ['React', 'GSAP', 'Framer Motion', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    live: '#', github: '#',
  },
  {
    id: 3,
    title: 'E-commerce Store',
    description: 'Full-featured e-commerce frontend with product filtering, cart management, smooth checkout flow, and mobile-first design.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    live: '#', github: '#',
  },
  {
    id: 4,
    title: 'Portfolio Studio',
    description: 'A drag-and-drop portfolio builder for creatives with live preview, custom themes, and one-click publishing.',
    tags: ['React', 'GSAP', 'Tailwind', 'Vite'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    live: '#', github: '#',
  },
  {
    id: 5,
    title: 'Task Manager App',
    description: 'A productivity app with kanban boards, drag-and-drop tasks, team collaboration, and deadline tracking.',
    tags: ['React', 'TypeScript', 'Node.js', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    live: '#', github: '#',
  },
  {
    id: 6,
    title: 'Real Estate UI',
    description: 'A premium real estate platform with interactive map search, 3D property tours, and AI-powered recommendations.',
    tags: ['React', 'Three.js', 'Mapbox', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    live: '#', github: '#',
  },
]

export const experience = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Pixel Studio',
    period: '2025 – Present',
    description: 'Leading frontend architecture for enterprise SaaS products. Building design systems, optimizing performance, and mentoring junior developers.',
    tags: ['React', 'TypeScript', 'GSAP', 'Figma'],
  },
  {
    id: 2,
    role: 'UI Engineer',
    company: 'Nova Labs',
    period: '2024 – 2025',
    description: 'Developed interactive UI components and animation systems for a fast-growing AI startup. Collaborated closely with design and product teams.',
    tags: ['React', 'Framer Motion', 'Tailwind', 'Node.js'],
  },
  {
    id: 3,
    role: 'Freelance Developer',
    company: 'Global Clients',
    period: '2023 – 2024',
    description: 'Delivered 15+ projects for clients across fintech, e-commerce, and creative industries. Specialized in high-performance landing pages and web apps.',
    tags: ['React', 'JavaScript', 'CSS', 'WordPress'],
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, Pixel Studio',
    avatar: 'https://i.pravatar.cc/150?img=47',
    text: "Alex transformed our product's frontend completely. The attention to detail, animation quality, and code cleanliness were beyond our expectations. Truly a top-tier developer.",
  },
  {
    id: 2,
    name: 'James Okafor',
    role: 'CTO, Nova Labs',
    avatar: 'https://i.pravatar.cc/150?img=12',
    text: "Working with Alex was a game-changer. He brought our design vision to life with pixel-perfect precision and added creative touches that made the product feel premium.",
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Founder, ShopFlow',
    avatar: 'https://i.pravatar.cc/150?img=32',
    text: "Alex delivered our e-commerce platform ahead of schedule with exceptional quality. The smooth animations and responsive design have significantly improved our conversion rate.",
  },
]

export const socials = [
  { name: 'GitHub',   url: 'https://github.com',   icon: 'github'   },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
  { name: 'Twitter',  url: 'https://twitter.com',  icon: 'twitter'  },
]

export const navLinks = [
  { label: 'Home',       href: '#hero'       },
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]
