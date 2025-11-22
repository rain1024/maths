# Generate LaTeX

You are tasked with generating professional LaTeX documents from mathematical problem definitions.

## Instructions

When this command is invoked:

1. **Detect the context**: Determine which problem folder you're working with by:
   - Checking the current working directory
   - Looking for PROBLEM files (PROBLEM.md, problem.txt, etc.)
   - Examining the index.html file

2. **Extract information from files**:
   - **Problem Statement**: Extract from PROBLEM file or from the `<title>` and problem description in index.html
   - **Solution Method**: Extract from index.html JavaScript code - look for the `solve()` function and explanation generation logic
   - **Problem Title**: Extract from the HTML title or generate from problem context

3. **Generate LaTeX file** with the following structure:
   - Document class: `article` with appropriate packages (amsmath, amssymb, geometry, unicode-math for Vietnamese)
   - Vietnamese language support using `polyglossia` or `babel`
   - Professional formatting with sections for:
     - Problem title
     - Problem statement (Đề bài)
     - Detailed solution (Lời giải chi tiết) with step-by-step explanation
     - Answer/Conclusion (Đáp án)

4. **Create the PDF directory** if it doesn't exist in the problem folder

5. **Save the LaTeX file** at: `<problem_folder>/pdf/<problem_name>.tex`
   - For example: `baitoanrutbi/pdf/baitoanrutbi.tex` or `thuthachvongtron/pdf/thuthachvongtron.tex`

6. **Compile the LaTeX file to PDF** using pdflatex:
   - Run `pdflatex` command from within the `pdf` directory
   - Execute compilation twice to ensure cross-references are resolved
   - Command: `cd <problem_folder>/pdf && pdflatex <problem_name>.tex && pdflatex <problem_name>.tex`
   - This will generate: `<problem_folder>/pdf/<problem_name>.pdf`
   - Handle any compilation errors gracefully and report them to the user

## LaTeX Template Structure

```latex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[vietnamese]{babel}
\usepackage{amsmath,amssymb,amsthm}
\usepackage[margin=2.5cm]{geometry}
\usepackage{enumitem}
\usepackage{fancyhdr}

\title{<Problem Title>}
\author{}
\date{}

\begin{document}
\maketitle

\section{Đề bài}
<Extract from PROBLEM file or index.html>

\section{Lời giải chi tiết}
<Extract solution steps from the explanation logic in index.html>

\subsection{Phương pháp 1: <Method Name>}
<Detailed steps>

\subsection{Phương pháp 2: <Method Name>} (if applicable)
<Alternative solution>

\section{Đáp án}
<Final answer with example calculations>

\end{document}
```

## Example Usage

If working with `baitoanrutbi`:
- Read `baitoanrutbi/problem.txt` for problem statement
- Read `baitoanrutbi/index.html` for solution logic
- Extract the mathematical formula and explanation
- Generate `baitoanrutbi/pdf/baitoanrutbi.tex`

If working with `thuthachvongtron`:
- Read `thuthachvongtron/PROBLEM.md` for problem statement
- Read `thuthachvongtron/index.html` for solution logic
- Extract the modulo-based solution
- Generate `thuthachvongtron/pdf/thuthachvongtron.tex`

## Notes

- Include all mathematical formulas in proper LaTeX format
- Translate code comments and explanations into clear mathematical language
- Include concrete examples with specific values (like n=15, k=10 for ball problem)
- Ensure Vietnamese characters are properly encoded
- Add proper section numbering and formatting
- If multiple solution methods exist in the HTML, include all of them
