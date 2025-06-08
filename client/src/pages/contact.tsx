import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import contactVideo from "@assets/contactus_1749360583429.mp4";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Thank You Section */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={contactVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Thank you!
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                We will be in touch shortly.
              </p>
              <Button
                onClick={handleSendAnother}
                variant="outline"
                className="bg-transparent border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 text-lg"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Contact Form Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={contactVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Get in Touch With our Team
                </h1>
                <p className="text-xl mb-8">
                  Contact us on your desired job requirements, we are happy to directly 
                  work with you. We pride ourselves in our exceptional customer support!
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Office: 919-900-7115</p>
                    <p className="font-semibold">Mobile: 919-501-0572</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>support@bnbytes.software</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Address:</p>
                    <p>9650 Strickland Rd, Suite 103-352, Raleigh, NC 27615</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                className="bg-white/90 border-0 placeholder:text-gray-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Last Name"
                                className="bg-white/90 border-0 placeholder:text-gray-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Company Name"
                              className="bg-white/90 border-0 placeholder:text-gray-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Email"
                              className="bg-white/90 border-0 placeholder:text-gray-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Message (desired job requirements)"
                              className="bg-white/90 border-0 placeholder:text-gray-500 min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold"
                    >
                      {mutation.isPending ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}