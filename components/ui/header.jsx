import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ChevronDown, GraduationCap, LayoutDashboard, StarsIcon } from 'lucide-react';
import { DropdownMenu } from './dropdown-menu';
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './dropdown-menu';
import { FileText } from 'lucide-react';
import { PenBox } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';



const Header = async() => {
  await checkUser();
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section - Only wraps the image */}
        <Link href='/'>
          <Image 
            src="/logo.jpg" 
            alt="Skillective Logo" 
            width={200} 
            height={60} 
            className="h-12 py-1 w-auto object-contain" 
          />
        </Link>

        {/* Navigation Items - Separate from logo link */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                <span className='hidden md:block'>
                  Industry Insights
                </span>
              </Button>
            </Link>
          

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <StarsIcon className="h-4 w-4 mr-2" />
                <span className='hidden md:block'>
                  Growth Tools
                </span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/resume" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Build Resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem><Link href="/ai-cover-letter" className="flex items-center gap-2">
                  <PenBox className="h-4 w-4" />
                  <span>Cover Letter</span>
                </Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/interview" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Interview Prep</span>
                </Link></DropdownMenuItem>
        
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>

          {/* Auth Buttons */}
          <SignedOut>
            <SignInButton >
                <Button variant="outline">Sign In</Button>
                </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton appearance={{elements:{
                avatarBox: 'h-10 w-10',
                userButtonPopoverCard: "shadow-xl",
                userPreviewMainIdentifier: "font-semibold ",
            },}}
            />

          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header;