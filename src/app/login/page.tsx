"use client";

import {useLogin} from "@refinedev/core";
import {Card, CardContent} from "@components/ui/card";
import {Button} from "@components/ui/button";

export default function Login() {
  const { mutate: login } = useLogin();

  return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
          <Card className="w-full max-w-sm p-6 shadow-lg rounded-2xl">
              <CardContent className="flex flex-col items-center space-y-6">
                  <h1 className="text-2xl font-semibold text-gray-800">Welcome Back</h1>

                  <Button
                      onClick={() => login({})}
                      className="w-full flex items-center justify-center gap-2 rounded-xl py-2 hover:bg-primary hover:text-white"
                      variant="outline"
                  >
                      <img
                          alt="Google"
                          src="/google.png"
                          className="h-5 w-5"
                      />
                      Sign in with Google
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                      Secure login powered Google
                  </p>
              </CardContent>
          </Card>
      </div>
  );
}
