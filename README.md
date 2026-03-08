# PostGenerator

PostGenerator is a premium, modern Next.js web application that allows users to seamlessly generate social media posts (for platforms like LinkedIn, X, and Instagram) based on any topic. It uses a robust n8n automation pipeline to process the generation and email the results directly to the user.

## ✨ Features

- **Automated Post Generation**: Enter a topic and have custom posts generated for multiple social platforms.
- **Email Delivery**: The generated content is automatically sent straight to your inbox.
- **n8n Webhook Integration**: A seamless connection to your active n8n workflows for processing requests.
- **Premium UI/UX**: Designed with a sleek, modern interface, beautiful glassmorphism effects, a smooth background ring animation, and dark/light theme support.
- **Responsive Design**: Built to look amazing across all devices, mobile or desktop.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Directory)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Automation Pipeline**: [n8n](https://n8n.io/)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20 or higher is recommended)
- An active n8n workflow exposing a POST webhook URL.

### Installation

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone <repository-url>
   cd PostGenerator
   ```

2. Install the dependencies using your preferred package manager:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Configuration

1. Copy the `.env.example` file to create your own localized `.env` file:

   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and set the `N8N_WEBHOOK_URL` to your live n8n webhook URL. The n8n automation should be active and expecting a JSON payload with `query` (the post topic) and `gmail` (the user's email).

   ```env
   N8N_WEBHOOK_URL=your_n8n_webhook_url_here
   ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application in action.

## 📁 Project Structure

- `src/app/page.tsx`: The main landing page with the topic and email input forms.
- `src/app/api/generate/route.ts`: The Next.js API route that securely relays user input to your n8n webhook.
- `src/components/`: Contains all reusable UI components (e.g., `SubmitButton`, `BackgroundRings`, `ThemeToggle`, `TopicInput`).

## 🚢 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new). Do not forget to configure your environment variables (like `N8N_WEBHOOK_URL`) inside your deployment platform settings.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
