"use server";
import { flattenError, z } from "zod";
import { Resend } from "resend";
import { Contact } from "@/app/components/EmailTemplate/Contact";

const resend = new Resend(process.env.RESEND_API_KEY!);

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  message: z.string().optional(),
});

// Form default values
export type FormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  message?: string;
};

export type State = {
  errors?: {
    fullName?: string[];
    email?: string[];
    phoneNumber?: string[];
    message?: string[];
  };
  message?: string | null;
  status?: "success" | "error";
  values?: FormValues;
};
export async function sendEmail(
  previousState: State,
  formData: FormData,
): Promise<State> {
  // Validate form using Zod
  const validatedFields = contactFormSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    message: formData.get("message"),
  });

  // if honeypot is filled, it's a bot
  if (formData.get("honeypot")) {
    return { status: "error", message: "Spam detected." };
  }

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      status: "error",
      errors: flattenError(validatedFields.error).fieldErrors,
      values: {
        fullName: String(formData.get("fullName") ?? ""),
        email: String(formData.get("email") ?? ""),
        phoneNumber: String(formData.get("phoneNumber") ?? ""),
        message: String(formData.get("message") ?? ""),
      },
    };
  }

  // Prepare data for email send out
  const { fullName, email, phoneNumber, message } = validatedFields.data;

  // Send email via Resend
  try {
    await resend.emails.send({
      from: process.env.RESEND_TO!,
      to: [process.env.RESEND_INBOX!],
      replyTo: [email],
      subject: "New Inquiry",
      react: Contact({
        fullName,
        email,
        phoneNumber,
        message,
      }),
    });
    return { message: "Email Send Successfully.", status: "success" };
  } catch (error) {
    console.log(error);
    return { message: "Email Error. Email Failed to send.", status: "error" };
  }
}
