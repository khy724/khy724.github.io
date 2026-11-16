# Personal Website Requirements

This is the living requirements document for the website. Update the status and notes as decisions are made.

## Goals

- Present a clear personal introduction and portrait.
- Share hobbies and interests beyond professional work.
- Show research, reading, and article interests as a mind map.
- Highlight selected projects and link to live work or source code.
- Keep content easy to edit without a framework or build process.
- Publish the site using GitHub Pages.

## Current Requirements

| ID | Requirement | Priority | Status | Notes |
| --- | --- | --- | --- | --- |
| R-001 | Home page with portrait and personal description | Must | Implemented | Content is editable in `site-data.js`. |
| R-002 | Dedicated hobbies page | Must | Implemented | Uses a responsive card grid. |
| R-003 | Articles, research, and reading interests page | Must | Implemented | Includes a responsive mind map and article list. |
| R-004 | Dedicated projects page | Must | Implemented | Supports status, tags, live links, and source links. |
| R-005 | Easy-to-edit template | Must | Implemented | Most content lives in one data file. |
| R-006 | GitHub Pages hosting compatibility | Must | Implemented | Static files need no build step. |
| R-007 | Mobile and desktop layouts | Must | Implemented | Breakpoints at 820px and 560px. |
| R-008 | Accessible navigation and semantics | Should | Implemented | Includes skip link, landmarks, labels, and reduced-motion support. |
| R-009 | Custom domain | Could | Backlog | Add a `CNAME` file when a domain is chosen. |
| R-010 | Contact form | Could | Backlog | GitHub Pages needs an external form service or mail link. |
| R-011 | Analytics | Could | Backlog | Choose a privacy-conscious provider before implementation. |
| R-012 | Article detail pages | Could | Backlog | Add when real article content is available. |

## Content Needed

- [ ] Full name and preferred professional description
- [ ] Short and long biography
- [ ] Portrait image and meaningful alt text
- [ ] Location and contact email
- [ ] GitHub and LinkedIn profile links
- [ ] Real hobby descriptions
- [ ] Research and reading interest branches
- [ ] Article titles, summaries, dates, and links
- [ ] Project descriptions, statuses, tags, demos, and repositories

## Design Decisions

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-09-14 | Use plain HTML, CSS, and JavaScript | Direct GitHub Pages deployment and low editing overhead. |
| 2026-09-14 | Store repeatable content in `site-data.js` | Keeps common edits in one documented location. |
| 2026-09-14 | Use a warm editorial visual direction | Suits a personal collection of work, reading, and research. |
| 2026-09-14 | Make the mind map CSS-based | Remains responsive, accessible, and dependency-free. |

## Future Decisions

Add new questions here before implementation so requirements remain explicit.

- What name, biography, and links should replace the sample content?
- Should projects support images or case-study pages?
- Should articles be hosted here or link to another publication?
- Is a custom domain needed?
- Is a contact form preferable to a direct email link?

## Change Log

| Date | Change |
| --- | --- |
| 2026-09-14 | Initial requirements captured and first website template implemented. |
| 2026-11-16 | Replaced sample portfolio copy with the research and engineering content plan; retained placeholders for undisclosed identity and contact details. |
