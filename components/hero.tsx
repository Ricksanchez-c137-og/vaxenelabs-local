import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Hero() {
  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/avatar.jpg" alt="Cybersecurity Engineer" />
          <AvatarFallback>CE</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-3xl">Jane Doe</CardTitle>
          <p className="text-muted-foreground">Senior Cybersecurity Engineer</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Experienced cybersecurity professional with a passion for protecting digital assets and educating others about online safety.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge>Penetration Testing</Badge>
          <Badge>Incident Response</Badge>
          <Badge>Network Security</Badge>
          <Badge>Cryptography</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

