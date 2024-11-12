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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Login() {
    return (
        <>
            <div className="w-full h-screen">
                <div className="relative h-full w-full bg-slate-950 flex justify-center items-center">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] flex justify-center items-center">
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>Task My Pixel</CardTitle>
                                <CardDescription>Make your task perfect</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="name">Email</Label>
                                            <Input id="name" placeholder="Enter your email" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="name">Password</Label>
                                            <Input id="name" type="password" placeholder="Enter your password" />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button className="w-full">Log In</Button>
                            </CardFooter>
                        </Card>
                    </div></div>
            </div>
        </>
    )
}
