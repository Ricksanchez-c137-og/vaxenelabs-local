"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

const skills = [
  { subject: 'Network Security', A: 120, fullMark: 150 },
  { subject: 'Penetration Testing', A: 98, fullMark: 150 },
  { subject: 'Incident Response', A: 86, fullMark: 150 },
  { subject: 'Cryptography', A: 99, fullMark: 150 },
  { subject: 'Cloud Security', A: 85, fullMark: 150 },
  { subject: 'Threat Intelligence', A: 65, fullMark: 150 },
]

export default function Skills() {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <Card>
        <CardHeader>
          <CardTitle>Skill Proficiency</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="Skills" dataKey="A" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </section>
  )
}

