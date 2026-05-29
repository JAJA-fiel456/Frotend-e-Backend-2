import PageLogin from "@/components/ui/Page-Login";

export default function Login() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <PageLogin />
      </div>
    </div>
  );
}