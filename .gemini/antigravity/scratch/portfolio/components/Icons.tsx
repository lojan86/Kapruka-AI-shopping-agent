"use client";
import React from "react";

type IconProps = { className?: string };

export const Github: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.092 3.292 9.418 7.867 10.945.575.106.785-.25.785-.556 0-.275-.01-1.006-.016-1.976-3.2.696-3.876-1.543-3.876-1.543-.523-1.33-1.277-1.684-1.277-1.684-1.044-.714.08-.699.08-.699 1.154.081 1.761 1.186 1.761 1.186 1.026 1.758 2.692 1.25 3.347.956.104-.744.402-1.25.731-1.538-2.554-.29-5.239-1.277-5.239-5.682 0-1.255.448-2.28 1.183-3.084-.119-.29-.513-1.457.113-3.036 0 0 .964-.309 3.156 1.18a10.95 10.95 0 0 1 2.875-.387c.976.005 1.96.132 2.874.388 2.19-1.49 3.154-1.18 3.154-1.18.629 1.58.236 2.747.117 3.037.737.804 1.182 1.83 1.182 3.084 0 4.416-2.69 5.387-5.253 5.673.413.355.78 1.056.78 2.127 0 1.536-.014 2.774-.014 3.151 0 .308.208.668.79.555C20.713 21.417 24 17.09 24 12 24 5.648 18.352.5 12 .5z" />
  </svg>
);

export const Linkedin: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.98 3.5C4.98 5 3.86 6.1 2.36 6.1S-.26 5 .26 3.5 1.38.9 2.88.9 4.98 2 4.98 3.5zM.5 8.5h4.86V24H.5V8.5zM8.5 8.5h4.66v2.07h.07c.65-1.23 2.24-2.53 4.61-2.53C23.19 8.04 24 11.2 24 15.32V24h-4.86v-7.08c0-1.69-.03-3.86-2.35-3.86-2.36 0-2.72 1.84-2.72 3.74V24H8.5V8.5z" />
  </svg>
);

export const Mail: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5h16v14H4z" />
    <path d="M22 7l-10 7L2 7" />
  </svg>
);

export const Phone: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.81.35 1.6.66 2.34a1 1 0 0 1-.23 1.05L7.7 8.7a16 16 0 0 0 6 6l1.56-1.53a1 1 0 0 1 1.05-.23c.74.31 1.53.54 2.34.66a1 1 0 0 1 .75 1V21z" />
  </svg>
);

export const MapPin: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.243 2 7 4.243 7 7c0 5.25 5 11 5 11s5-5.75 5-11c0-2.757-2.243-5-5-5zm0 7.5A2.5 2.5 0 1 1 12 4.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export const ArrowDown: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

export const ExternalLink: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
  </svg>
);

export const Heart: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21s-7.5-4.92-9.2-8.02C.92 9.9 4.6 5.5 8.4 6.5 10 7 12 9 12 9s2-2 3.6-2.5c3.8-1 7.48 3.4 5.6 6.48C19.5 16.08 12 21 12 21z" />
  </svg>
);

export const ArrowUp: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

export const CheckCircle: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 7z" />
  </svg>
);

export const Send: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20 1-7 7-7z" />
  </svg>
);

export const Calendar: React.FC<IconProps> = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const ImageIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L3 21" />
  </svg>
);

export const ChevronDown: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const ChevronUp: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

export const GraduationCap: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L1 7l11 5 9-4.09V17" />
    <path d="M21 15v4a2 2 0 0 1-2 2H5" />
  </svg>
);

export const BookOpen: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7c1.5-1 4-2 8-2s6.5 1 8 2v11c-1.5-1-4-2-8-2s-6.5 1-8 2V7z" />
    <path d="M22 7v11c-1.5-1-4-2-8-2" />
  </svg>
);

export const Award: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3 4 5 .5-3.5 3 1 5-4-2.5L8.5 15l1-5L6 6.5 11 6z" />
  </svg>
);

export const Trophy: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3h12v2a4 4 0 0 1-4 4H10A4 4 0 0 1 6 5V3z" />
    <path d="M8 13a4 4 0 0 0 8 0V11H8v2zM5 20h14v1H5v-1z" />
  </svg>
);

export const Menu: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

export const X: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export const Code2: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18l6-6-6-6" />
    <path d="M8 6L2 12l6 6" />
  </svg>
);

export default {};
