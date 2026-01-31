# My Portfolio

This repository contains the source code for my personal portfolio website. The website showcases my projects, skills, and experience as a software developer.

## Website

The portfolio website is designed to provide an overview of my work and capabilities. It includes sections such as:

- About Me: A brief introduction about myself and my background.
- Projects: Highlights of some of the projects I have worked on, including descriptions, technologies used, and links to the live demos or repositories.
- Skills: A list of programming languages, frameworks, and tools that I am proficient in.
- Experience: Details about my professional experience, including previous roles and responsibilities.
- Contact: Information on how to get in touch with me.

## Content

The content of the website is regularly updated to reflect my latest projects and skills. It is intended to provide visitors with a comprehensive understanding of my abilities as a software developer.

## Features

### Component Dependency Analysis

This project includes an automated system for analyzing and displaying peer dependencies for React components. This is particularly useful for component library documentation.

- **Automatic dependency extraction**: Analyzes TypeScript/JavaScript files to identify all third-party dependencies
- **Deep import resolution**: Recursively follows local imports to capture transitive dependencies
- **Version tracking**: Extracts version information from package.json
- **React component for display**: Pre-built table component for showing dependencies in documentation
- **Utility functions**: Helper functions for programmatic access to dependency data

See [docs/PEER_DEPENDENCIES.md](docs/PEER_DEPENDENCIES.md) for detailed documentation on how to use this feature.

**Quick Start:**

```bash
# Generate dependency data
npm run gen:deps

# Use in your documentation
import DependencyTable from "~/components/DependencyTable";
<DependencyTable componentPath="src/components/YourComponent.tsx" />
```

## Contact

Feel free to explore the website and reach out to me if you have any questions or opportunities for collaboration.
