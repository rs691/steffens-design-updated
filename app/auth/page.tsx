"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AuthForm from "@/components/auth-form"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-background to-muted/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">{isLogin ? "Welcome Back" : "Join Us"}</h1>
            <p className="text-muted-foreground">
              {isLogin ? "Sign in to your account" : "Create your account to start shopping"}
            </p>
          </div>

          {/* Auth Form */}
          <AuthForm isLogin={isLogin} />

          {/* Toggle between login and register */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-semibold text-primary hover:text-primary/90 transition-colors"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

          {/* Guest checkout */}
          <div className="mt-8 pt-6 border-t border-border">
            <Link href="/cart">
              <Button variant="outline" className="w-full bg-transparent">
                Continue as Guest
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 text-center space-y-2 text-sm text-muted-foreground">
          <p>Your data is secure with us</p>
          <div className="flex justify-center space-x-4 text-xs">
            <span>🔒 Encrypted</span>
            <span>✓ Verified</span>
            <span>🛡️ Secure</span>
          </div>
        </div>
      </div>
    </div>
  )
}
