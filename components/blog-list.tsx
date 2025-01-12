"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Ransomware: What You Need to Know",
    excerpt: "Ransomware attacks are on the rise. Learn about the latest trends and how to protect your organization.",
    date: "2023-05-15",
    tags: ["Ransomware", "Cybersecurity Threats", "Data Protection"],
  },
  {
    id: 2,
    title: "Securing Your Cloud Infrastructure: Best Practices",
    excerpt: "As more businesses move to the cloud, securing your infrastructure is crucial. Discover the best practices for cloud security.",
    date: "2023-06-02",
    tags: ["Cloud Security", "Infrastructure", "Best Practices"],
  },
  {
    id: 3,
    title: "The Importance of Regular Security Audits",
    excerpt: "Regular security audits are essential for maintaining a strong security posture. Learn why and how to conduct them effectively.",
    date: "2023-06-20",
    tags: ["Security Audits", "Risk Management", "Compliance"],
  },
  // Add more blog posts as needed
]

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  // Simulate loading
  setTimeout(() => setLoading(false), 1500)

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div>
      <Input
        type="search"
        placeholder="Search blog posts..."
        className="mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-6 w-2/3 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-8 w-24" />
                </CardFooter>
              </Card>
            ))
          : filteredPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
            ))
        }
      </div>
    </div>
  )
}

