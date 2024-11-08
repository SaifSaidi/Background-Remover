# Background Remover Web Application

A simple web application that removes the background from uploaded images. Built with JavaScript, Tailwind CSS, and Node.js, this app allows users to upload an image, remove its background, and customize export options like format, quality, and filename.

## Features

- **Image Upload**: Upload any image file and preview it before processing.
- **Background Removal**: Uses a backend API to remove the background of uploaded images.
- **Export Options**:
  - Format: WebP, JPEG, PNG
  - Quality: High, Medium, Low
  - Filename: Customize output file name
- **Download Processed Image**: View and download the processed image with background removed.

## Demo

![Demo](https://github.com/SaifSaidi/Background-Remover/blob/main/Background-Remover%20by%20Saif%20Saidi.png?raw=true)

## Author

Developed by Saif Saidi.

## Tech Stack

- **Frontend**: Node, JavaScript, HTML, Tailwind CSS
- **Backend**: Node.js, [@xixiyahaha/rembg-node](https://www.npmjs.com/package/@xixiyahaha/rembg-node)

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

## Getting Started
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SaifSaidi/Background-Remover.git
   cd background-remover```
2. **Install Dependencies, Run The Server:**:
  ```bash
    npm install
    node server.js
      The server will start on http://localhost:3000.
    Open Index.html from any local server
