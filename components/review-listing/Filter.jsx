"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters").max(50, "Title must be under 50 characters"),
    category: z.string().min(1, "Category is required"),
    subcategory: z.string().min(1, "Subcategory is required"),
    details: z.object({
        name: z.boolean(),
        country: z.boolean(),
        dates: z.boolean(),
        salary: z.boolean(),
        web: z.boolean(),
    }),
    questionType: z.enum(["rating", "multiple_choice", "true_false", "open_ended"], {
        required_error: "Question type is required",
    }),
});

const Feedbacklist = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            category: "",
            subcategory: "",
            details: {
                name: false,
                country: false,
                dates: false,
                salary: false,
                web: false,
            },
            questionType: "rating",
        },
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (

        <Card className="w-full flex-grow h-auto shadow-lg rounded-lg">
            <CardContent className="p-10">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
                        {/* Feedback Title */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <p className="text-2xl -my-10 mb-5 font-bold ">Filter</p>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter feedback title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        {/* Category & Subcategory Dropdowns */}
                        <div className="flex items-center justify-between w-full gap-10">
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Category</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="education">Education</SelectItem>
                                                <SelectItem value="health">Health</SelectItem>
                                                <SelectItem value="technology">Technology</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="subcategory"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Subcategory</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a subcategory" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="school">School</SelectItem>
                                                <SelectItem value="hospital">Hospital</SelectItem>
                                                <SelectItem value="software">Software</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Submit Button */}
                        <Button type="submit">Submit Feedback</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default Feedbacklist;
