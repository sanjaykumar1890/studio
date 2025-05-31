'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StudentLogo } from '@/components/ui/logo';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState(1); // 1: Enter Roll No, 2: Enter OTP, 3: Set Password
  const [rollNo, setRollNo] = useState('');

  const handleRollNoSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Mock Roll No verification
    toast({ title: "OTP Sent", description: "OTP (123456) sent to your registered number." });
    setStep(2);
  };

  const handleOtpSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Mock OTP verification
    const otp = (event.target as HTMLFormElement).otp.value;
    if (otp === '123456') {
      setStep(3);
    } else {
      toast({ title: "Invalid OTP", description: "Please enter the correct OTP.", variant: "destructive" });
    }
  };

  const handlePasswordSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Mock password setting
    toast({ title: "Signup Successful", description: "You can now log in with your new credentials." });
    router.push('/');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="items-center text-center">
          <StudentLogo className="h-16 w-16 text-primary mb-4" />
          <CardTitle className="text-3xl font-headline">Student Signup</CardTitle>
          <CardDescription>Create your ACE Portal account</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <form onSubmit={handleRollNoSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="rollNo">Roll No</Label>
                <Input id="rollNo" value={rollNo} onChange={(e) => setRollNo(e.target.value)} placeholder="Enter your Roll No" required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Verify Roll No
              </Button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <p className="text-sm text-muted-foreground">An OTP has been sent to the mobile number linked with Roll No: {rollNo}. For development, use OTP: 123456.</p>
              <div className="space-y-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <Input id="otp" placeholder="Enter 6-digit OTP" required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Verify OTP
              </Button>
            </form>
          )}
          {step === 3 && (
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" placeholder="Enter new password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm new password" required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Set Password & Sign Up
              </Button>
            </form>
          )}
        </CardContent>
        <CardContent className="mt-4 text-center text-sm">
          <Link href="/">
            <Button variant="link" className="text-primary">Already have an account? Login</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
