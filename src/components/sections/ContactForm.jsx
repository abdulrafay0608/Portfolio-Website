import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../ui-components/InputField";
import CustomButton from "../../ui-components/CustomButton";
import { Api } from "../../utils/utils.api";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const resp = await Api.post("/send-email", data);
      toast.success(resp?.data?.message);
      reset();
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <InputField
        label="Name"
        id="name"
        name="name"
        placeholder="Enter your name"
        {...register("name", { required: "Name is required" })}
        error={errors.name?.message}
      />
      <InputField
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Please enter a valid email address",
          },
        })}
        error={errors.email?.message}
      />
      <InputField
        label="Subject"
        id="subject"
        name="subject"
        placeholder="Enter subject"
        {...register("subject", { required: "Subject is required" })}
        error={errors.subject?.message}
      />

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block font-medium text-primary/80 leading-relaxed text-base mb-1"
        >
          Message
        </label>
        <textarea
          placeholder="Your message..."
          id="message"
          rows={3}
          name="message"
          {...register("message", {
            required: "Message cannot be empty",
          })}
          className={`text-sm block p-2.5 w-full rounded border border-primary/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message?.message}</p>
        )}
      </div>
      <CustomButton
        type="submit"
        label={loading ? "Send Message..." : "Send Message"}
        variant="filled"
        extraClasses="px-6 py-3 text-sm"
        disabled={loading}
      />
    </form>
  );
};

export default ContactForm;
