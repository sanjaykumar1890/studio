'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StudentLogo } from '@/components/ui/logo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Mock login logic
    router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="items-center text-center">
          <StudentLogo className="h-16 w-16 text-primary mb-4" />
          <CardTitle className="text-3xl font-headline">ACE Portal</CardTitle>
          <CardDescription>Track your attendance</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="parent">Parent</TabsTrigger>
            </TabsList>
            <TabsContent value="student">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="rollNo">Roll No</Label>
                  <Input id="rollNo" placeholder="Enter your Roll No" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Login
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="parent">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Registered Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="otp">OTP</Label>
                  <Input id="otp" type="text" placeholder="Enter OTP (e.g., 123456)" defaultValue="123456" required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Login with OTP
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2 text-sm">
          <div className="flex justify-between w-full">
            <Link href="/forgot-password">
              <Button variant="link" className="p-0 h-auto text-primary">Forgot Password?</Button>
            </Link>
            <Link href="/signup">
              <Button variant="link" className="p-0 h-auto text-primary">Sign Up</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
