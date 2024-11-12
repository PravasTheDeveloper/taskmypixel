import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Head from "next/head"

export default function Login() {
    return (
        <>
            <Head>
                <title>Login || TaskMyPixel</title>
            </Head>
            
            <div className="w-full h-screen relative">
                <div className="absolute z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Task My Pixel</CardTitle>
                            <CardDescription>Make your task perfect</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" placeholder="Enter your password" />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button className="w-full">Log In</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="w-full h-full absolute top-0 left-0 z-30">
                    <div className="relative h-full w-full bg-slate-950">
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
