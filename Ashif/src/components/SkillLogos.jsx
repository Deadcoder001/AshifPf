import React from 'react';

import reactLogo from '../assets/logos/react.png';
import nextjsLogo from '../assets/logos/Next.png';
import javascriptLogo from '../assets/logos/JS.png';
import typescriptLogo from '../assets/logos/TS.png';
import nodeLogo from '../assets/logos/node.png';
import gitLogo from '../assets/logos/Git.png';
import phpLogo from '../assets/logos/php.png';
import mysqlLogo from '../assets/logos/MySQL.png';

// A generic wrapper for all logos
const Logo = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-full object-contain"
  />
);

export const ReactLogo = () => <Logo src={reactLogo} alt="React" />;
export const Nextjs = () => <Logo src={nextjsLogo} alt="Next.js" />;
export const Javascript = () => <Logo src={javascriptLogo} alt="JavaScript" />;
export const Typescript = () => <Logo src={typescriptLogo} alt="TypeScript" />;
export const Node = () => <Logo src={nodeLogo} alt="Node.js" />;
export const Git = () => <Logo src={gitLogo} alt="Git" />;
export const Tailwind = () => <Logo src={tailwindLogo} alt="Tailwind CSS" />;
export const Figma = () => <Logo src={figmaLogo} alt="Figma" />;
export const Php = () => <Logo src={phpLogo} alt="PHP" />;
export const Mysql = () => <Logo src={mysqlLogo} alt="MySQL" />;
export const Aws = () => <Logo src={awsLogo} alt="AWS" />;