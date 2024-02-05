import { notFound } from 'next/navigation'
import { FC } from 'react'

export const metadata = {
  title: "Page Not Found - Flyinn Amadeus",
  description:
      "Sorry, but the page you are looking for cannot be found. It might have been moved, deleted, or you may have entered an incorrect URL. Please double-check the URL or go back to the homepage to find what you are looking for",
};

const page: FC = () => {
  notFound()
}

export default page