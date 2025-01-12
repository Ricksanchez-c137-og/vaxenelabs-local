"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const projects = [
  {
    id: 1,
    title: "Secure Network Infrastructure Design",
    description: "Designed and implemented a robust network infrastructure for a Fortune 500 company.",
    tags: ["Network Security", "Firewall Configuration", "VPN"],
  },
  {
    id: 2,
    title: "Incident Response Automation",
    description: "Developed an automated incident response system to detect and mitigate threats in real-time.",
    tags: ["Automation", "Incident Response", "SIEM"],
  },
  {
    id: 3,
    title: "Penetration Testing Framework",
    description: "Created a comprehensive penetration testing framework for web applications and networks.",
    tags: ["Penetration Testing", "Vulnerability Assessment", "Exploit Development"],
  },
  // Add more projects as needed
]

export default function Projects() {
  const [loading, setLoading] = useState(true)

  // Simulate loading
  setTimeout(() => setLoading(false), 2000)

  return (
    <section id="projects" className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <Alert className="mb-4">
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>
          The following projects are a selection of my most impactful work. For more details, please contact me directly.
        </AlertDescription>
      </Alert>
      <Carousel>
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <Skeleton className="h-[100px] w-full" />
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Learn More</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Contact me for more details about this project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Accordion type="single" collapsible className="mt-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>View All Projects</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6">
              {projects.map((project) => (
                <li key={project.id}>{project.title}</li>
              ))}
              {/* Add more projects here */}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

