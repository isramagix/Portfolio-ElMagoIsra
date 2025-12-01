import { Field, ErrorMessage } from "formik";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  rows?: number;
  children?: React.ReactNode;
}

export const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  as = "input",
  rows,
  children,
}: FormFieldProps) => {
  const baseClassName =
    "w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-text-primary focus:border-gold focus:outline-none transition";

  return (
    <div className={as === "select" ? "relative" : ""}>
      <label htmlFor={name} className="block text-text-primary mb-2">
        {label} {required && "*"}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        as={as === "input" ? undefined : as}
        rows={rows}
        className={`${baseClassName} ${
          as === "textarea" ? "resize-none" : ""
        } ${as === "select" ? "pr-10 appearance-none cursor-pointer" : ""}`}
        placeholder={placeholder}
      >
        {children}
      </Field>
      {as === "select" && (
        <div className="pointer-events-none absolute right-3 top-[42px] text-gold">
          ▼
        </div>
      )}
      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};
